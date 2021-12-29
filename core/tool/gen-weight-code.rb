puts <<-END
Table {
    data: [
END

ARGV.each do |f|
    coefs = File.foreach(f).map {|line| line.strip }
    puts <<-END
        Weight {
            edge2x: [
    END
    coefs.shift(3321).each do |line|
        puts <<-END
                #{ line },
        END
    end
    puts <<-END
            ],
            mob: #{ coefs[0] },
            pmob_black: #{ coefs[1] },
            pmob_white: #{ coefs[2] },
        },
    END
end

puts <<-END    
    ],
}
END