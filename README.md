# 6x6 reversi oracle

This is a perfect AI of 6x6 reversi.

https://mame.github.io/6x6-reversi-oracle/

## What this is

Reversi has been solved for a 6x6 board: the second player (white) wins under perfect play.
You are the first player (black), and this perfect AI makes white move.
You cannot beat 6x6-reversi oracle. Enjoy being miserable.

## How to build

```
$ cd core
$ cargo install wasm-pack
$ wasm-pack build
$ cd ../app
$ npm install
$ npx webpack
```

You can also use `npx webpack-dev-server` to develop the app.

## How to generate data files

The three data files were precomuted.

* data/weight.rs: A coefficient table of the evaluation function
* data/opening-tree.dat and data/opening-data.dat: A game tree of the initial stage (first eight white moves)

```
$ cargo build --release

# takes half a day
$ for i in `seq 10 22`; do
    time ./target/release/o66 generate --depth $i --count 65536 --output data/supervisors/supervisors-$i.txt
  done

$ cat data/supervisors/supervisors-1[0-8].txt > data/supervisors-10-18.txt
$ cat data/supervisors/supervisors-{19,2[0-2]}.txt > data/supervisors-19-22.txt

# run this half a day and manually stop
$ ./target/release/o66 learn --input data/supervisors-10-18.txt --output data/weight-10-18.txt
$ ./target/release/o66 learn --input data/supervisors-19-22.txt --output data/weight-19-22.txt

# generate data/weight.dat
$ ruby tool/gen-weight-code.rb data/weight-10-18.txt data/weight-19-22.txt > data/weight.rs

$ echo "E4 C5(+04)" > opening/opening-1.txt
$ for i in `seq 1 7`; do
    time ./target/release/o66 build --input opening/opening-$i.txt --output opening/opening-$(($i + 1)).txt
  done

# generate data/opening-tree.dat and data/opening-data.dat
$ ruby tool/opening-tree.rb data/opening/opening-8.txt
```

## Some interesting moves

```
Moves ending with a black move
b:E4 w:C5 b:B2 w:F4 b:D5 w:C6 b:B5 w:E3 b:D6 w:E6 b:F3 w:F2 b:E5 w:C2 b:E2 w:F1 b:B1 w:D2 b:B4 w:C1 b:D1 w:E1 b:B3 w:A1 b:B6 w:A6 b:A5 w:A2 b:A3 w:A4 b:xx w:F5 b:F6

Moves including white pass
b:E4 w:C5 b:B6 w:F4 b:E3 w:F3 b:B4 w:A4 b:F2 w:F1 b:E5 w:F6 b:A3 w:E2 b:A5 w:C6 b:D6 w:xx b:C2 w:B1 b:C1 w:D1 b:F5 w:D5 b:E6 w:A6 b:xx w:A2 b:xx w:B3 b:D2 w:B2 b:xx w:E1 b:xx w:B5
```