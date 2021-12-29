use clap::value_t;
use clap::{App, AppSettings, Arg, SubCommand};

use o66::cli;

fn main() {
    let moves = Arg::with_name("moves")
        .help("initial moves (e.g., E4 C5 B2 F4 B5 C2 D2 D1 C6 A1)")
        .min_values(0)
        .index(1);
    let input = Arg::with_name("input")
        .takes_value(true)
        .long("input")
        .required(true);
    let output = Arg::with_name("output")
        .long("output")
        .takes_value(true)
        .required(true);

    let matches = App::new("o66")
        .setting(AppSettings::ArgRequiredElseHelp)
        .subcommand(
            SubCommand::with_name("search")
                .about("Find next move by game tree search")
                .arg(moves.clone()),
        )
        .subcommand(
            SubCommand::with_name("generate")
                .about("Generate supervisor data for learning of midgame evaluator")
                .arg(Arg::with_name("depth").takes_value(true).long("depth"))
                .arg(Arg::with_name("count").takes_value(true).long("count"))
                .arg(output.clone()),
        )
        .subcommand(
            SubCommand::with_name("learn")
                .about("Optimize weights for midgame evaluator")
                .arg(input.clone())
                .arg(output.clone()),
        )
        .subcommand(
            SubCommand::with_name("build")
                .about("Create opening move data")
                .arg(input.clone())
                .arg(output.clone()),
        )
        .subcommand(
            SubCommand::with_name("lookup")
                .about("Find next move by using opening move data")
                .arg(Arg::with_name("auto").long("auto"))
                .arg(moves.clone()),
        )
        .subcommand(
            SubCommand::with_name("validate")
                .about("Check if the opening move data is complete")
                .arg(moves.clone()),
        )
        .get_matches();

    match matches.subcommand() {
        ("search", Some(matches)) => {
            let moves: Vec<_> = matches.values_of_lossy("moves").unwrap_or(vec![]);
            cli::search::main(moves);
        }
        ("generate", Some(matches)) => {
            let depth = value_t!(matches, "depth", u32).unwrap_or(10);
            let count = value_t!(matches, "count", u32).unwrap_or(256);
            let output = matches.value_of("output").unwrap().to_string();
            cli::generate::main(depth, count, output);
        }
        ("learn", Some(matches)) => {
            let input = matches.value_of("input").unwrap().to_string();
            let output = matches.value_of("output").unwrap().to_string();
            cli::learn::main(input, output)
        }
        ("build", Some(matches)) => {
            let input = matches.value_of("input").unwrap().to_string();
            let output = matches.value_of("output").unwrap().to_string();
            cli::build::main(input, output)
        }
        ("lookup", Some(matches)) => {
            let moves: Vec<_> = matches.values_of_lossy("moves").unwrap_or(vec![]);
            let auto = matches.is_present("auto");
            cli::lookup::main(moves, auto)
        }
        ("validate", Some(_matches)) => cli::validate::main(),
        ("", None) => {}
        _ => unreachable!(),
    }
}
