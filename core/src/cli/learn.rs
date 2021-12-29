use std::fs::File;
use std::io::Write;
use std::io::{BufRead, BufReader};

use rand;
use rand::prelude::*;

use crate::bitboard::bits::Bits;
use crate::bitboard::feature::Feature;
use crate::bitboard::Bitboard;
use crate::search::midgame::evaluator::Weight;

#[derive(Debug, Clone, Copy)]
struct Sample {
    feature: Feature,
    score: i32,
}

#[derive(Debug)]
struct State {
    samples: Vec<Sample>,
    best_weight: Weight,
    best_mse: f64,
    rng: rand::rngs::StdRng,
}

fn load_samples(path: String) -> Vec<Sample> {
    let f = File::open(path).unwrap();
    let reader = BufReader::new(f);
    let lines = reader.lines();

    let mut samples = vec![];
    for line in lines {
        let line = line.ok().unwrap();
        let mut iter = line.split(",");
        let mut board = Bitboard::EMPTY_BOARD;
        board.black = Bits::new(u64::from_str_radix(iter.next().unwrap(), 16).ok().unwrap());
        board.white = Bits::new(u64::from_str_radix(iter.next().unwrap(), 16).ok().unwrap());
        let feature = board.feature();
        let score = iter
            .next()
            .unwrap()
            .to_string()
            .trim()
            .parse::<i32>()
            .unwrap();
        samples.push(Sample { feature, score })
    }

    samples
}

impl Weight {
    fn new_random() -> Weight {
        let mut rng: rand::rngs::StdRng = rand::SeedableRng::from_seed([0; 32]);
        let mut edge2x = [0.0; 3321];
        for i in 0..3321 {
            edge2x[i] = rng.gen::<f64>() * 2.0 - 1.0;
        }
        let mob = rng.gen::<f64>() * 2.0 - 1.0;
        let pmob_black = rng.gen::<f64>() * 2.0 - 1.0;
        let pmob_white = rng.gen::<f64>() * 2.0 - 1.0;
        Weight {
            edge2x,
            mob,
            pmob_black,
            pmob_white,
        }
    }

    fn mutate(&self, rng: &mut rand::rngs::StdRng) -> Weight {
        let mut weight = *self;
        for i in 0..3321 {
            weight.edge2x[i] += (rng.gen::<f64>() * 2.0 - 1.0) / 128.0;
        }
        weight.mob += (rng.gen::<f64>() * 2.0 - 1.0) / 128.0;
        weight.pmob_black += (rng.gen::<f64>() * 2.0 - 1.0) / 128.0;
        weight.pmob_white += (rng.gen::<f64>() * 2.0 - 1.0) / 128.0;
        weight
    }

    // steepest descent method
    fn sd_update(&mut self, step: f64, sample: &Sample, weight: &Weight) {
        for i in 0..4 {
            self.edge2x[sample.feature.edge2x[i]] += step;
        }
        self.mob += step * weight.mob;
        self.pmob_black += step * weight.pmob_black;
        self.pmob_white += step * weight.pmob_white;
    }

    pub fn save(&self, output: String) {
        let mut file = File::create(output).unwrap();
        for v in self.edge2x.iter() {
            writeln!(file, "{}", *v).unwrap();
        }
        writeln!(file, "{}", self.mob).unwrap();
        writeln!(file, "{}", self.pmob_black).unwrap();
        writeln!(file, "{}", self.pmob_white).unwrap();
    }
}

impl State {
    fn new(input: String) -> Self {
        State {
            samples: load_samples(input),
            best_weight: Weight::new_random(),
            best_mse: std::f64::INFINITY,
            rng: rand::SeedableRng::from_seed([0; 32]),
        }
    }

    pub fn simulated_annealing(&mut self, tmax: usize) {
        let mut weight1 = self.best_weight;
        let mut weight2 = self.best_weight;
        let mut prev_mse = self.best_mse;
        let mut w1 = &mut weight1;
        let mut w2 = &mut weight2;

        for t in (0..tmax).rev() {
            *w2 = w1.mutate(&mut self.rng);

            let mut mse = 0.0;
            for sample in &self.samples {
                let guess = w2.eval(&sample.feature);
                let err = sample.score as f64 - guess;
                mse += err * err;
            }
            mse /= self.samples.len() as f64;

            if t % 1000 == 0 {
                println!(
                    "SA: temperature: {:5}, best_mse: {:.6}, mse: {:.6}",
                    t, self.best_mse, mse
                );
            }

            if mse < prev_mse
                || ((prev_mse - mse) * 100000000.0 / t as f64).exp() > self.rng.gen::<f64>()
            {
                let wt = w1;
                w1 = w2;
                w2 = wt;
                prev_mse = mse;
                if mse < self.best_mse {
                    self.best_weight = *w1;
                    self.best_mse = mse;
                }
            }
        }
    }

    pub fn steepest_descent(&mut self, iter: usize) {
        let mut weight1 = self.best_weight;
        let mut weight2 = self.best_weight;

        for i in (0..iter).rev() {
            let step = 1.0e-2 / self.samples.len() as f64;

            let mut mse = 0.0;
            for sample in &self.samples {
                let guess = weight1.eval(&sample.feature);
                let err = sample.score as f64 - guess;
                mse += err * err;

                weight2.sd_update(step * err, sample, &weight1);
            }
            mse /= self.samples.len() as f64;

            if i % 1000 == 0 {
                println!(
                    "SD: iter: {:5}, best_mse: {:.6}, mse: {:.6}",
                    i, self.best_mse, mse
                );
            }

            weight1 = weight2;

            if mse < self.best_mse {
                self.best_weight = weight1;
                self.best_mse = mse;
            }
        }
    }
}

pub fn main(input: String, output: String) {
    let mut state = State::new(input);
    state.simulated_annealing(30000);
    loop {
        state.steepest_descent(30000);
        state.best_weight.save(output.clone());
        state.simulated_annealing(3000);
        state.simulated_annealing(3000);
        state.simulated_annealing(3000);
    }
}
