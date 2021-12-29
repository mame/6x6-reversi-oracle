BlackNode = Struct.new(:black_moves, :count, :value)
WhiteNode = Struct.new(:white_moves, :count, :value)

root = BlackNode.new({})

ARGF.each do |line|
  raise line unless line =~ /\(( ?[+-]\d+)\)$/
  value = $1.to_i
  node = root
  $`&.split&.each_slice(2) do |black, white|
    white = white.sub(/^\d+:/, "")
    node = node.black_moves[black.to_sym] ||= WhiteNode.new({})
    node = node.white_moves[white.to_sym] ||= BlackNode.new({})
  end
  node.count = 1
  node.value = -value
end

OpeningNode = Struct.new(:white_move, :value, :children)

class BlackNode
  def decide_count
    unless count
      count, value = 0, 0xffff
      black_moves.each do |black_move, white_node|
        white_node.decide_count
        count += white_node.count
        value = [value, white_node.value].compact.min || raise
      end
      self.count = count + 1
      self.value = -value
    end
  end

  def show(moves)
    if black_moves.empty? # leaf node
      puts moves.join(" ")
    else
      black_moves.each do |black_move, white_node|
        white_node.show(moves + [black_move])
      end
    end
  end

  def to_opening
    return nil if black_moves.empty? # leaf node
    h = {}
    black_moves.each do |black_move, white_node|
      white_move, black_node = white_node.white_moves.first
      h[black_move] = OpeningNode.new(
        white_move,
        white_node.value,
        black_node.to_opening
      )
    end
    h
  end
end

class WhiteNode
  def decide_count
    unless count
      self.count, self.value = nil, nil
      white_moves.each do |white_move, black_node|
        black_node.decide_count
      end
      white_move, black_node =
        white_moves.min_by {|white_move, black_node| black_node.count }
      self.white_moves = { white_move => black_node }
      self.count = black_node.count
      self.value = -black_node.value
    end
  end

  def show(moves)
    white_moves.each do |white_move, black_node|
      black_node.show(moves + ["#{ white_move }(#{ "%+3d" % value })"])
    end
  end
end

root.decide_count
root.show([])
root = root.to_opening[:E4]

MOVES = { :xx => 36 }
(?A..?F).each_with_index do |xc, x|
  (?1..?6).each_with_index do |yc, y|
    MOVES[(xc + yc).to_sym] = y * 6 + x
  end
end

tree = [1, 0]
data = []
queue = [root]
until queue.empty?
  node = queue.shift
  data << MOVES[node.white_move] << node.value
  node.children&.each do |_black_move, child|
    tree << 1
    queue << child
  end
  tree << 0
end

tree << 0 until tree.size % 512 == 0
tree = tree.each_slice(8).map {|v| v.reverse.join.to_i(2) }.pack("C*")
data = data.pack("C*")

File.binwrite("data/opening-tree.dat", tree)
File.binwrite("data/opening-data.dat", data)