#  0, 1, 2, 3, 4, 5
#  6, 7, 8, 9,10,11
# 12,13,14,15,16,17
# 18,19,20,21,22,23
# 24,25,26,27,28,29
# 30,31,32,33,34,35

EDGE2X = [
  [ 7, 0, 1, 2, 3, 4, 5,10],
  [10, 5,11,17,23,29,35,28],
  [28,35,34,33,32,31,30,25],
  [25,30,24,18,12, 6, 0, 7],
]

EDGE2X.zip(%w(N E S W)) do |edge2x, edge|
  min_mod = 100009
  -63.upto(63) do |shift|
    values = {}
    ok = true
    [0, 1, 2].repeated_permutation(8) do |a|
      black = white = 0
      edge2x.zip(a) do |offset, cell|
        case cell
        when 1 then black |= 1 << offset
        when 2 then white |= 1 << offset
        end
      end
      key = black + (white << shift)
      value = [a.join, a.join.reverse].min.to_i(3)
      if key >= (1 << 64) || (values[key] && values[key] != value)
        ok = false
        break
      end
      values[key] = value
    end
    next if !ok

    values.values.uniq.size.step(min_mod, 2) do |mod|
      tbl = {}
      ok = true
      values.each do |hash, value|
        hash %= mod
        if tbl[hash] && tbl[hash] != value
          ok = false
          break
        end
        tbl[hash] = value
      end
      if ok
        puts "EDGE_%s: (black + (white << %2d)) %% %6d" % [edge, shift, mod]
        min_mod = mod
        break
      end
    end
  end
end

__END__
EDGE_N : (black + (white << 46)) %  45705 (max: 45703)
EDGE_E : (black + (white <<  2)) % 100001 (max: 99910)
EDGE_S : (black + (white << 27)) %  56047 (max: 56040)
EDGE_W : (black + (white <<  4)) %  65279 (max: 64739)