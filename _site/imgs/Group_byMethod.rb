



# array = [1, 2, 3, 4, 5, 6]
# puts array.group_by{|a| a%3}          #>>>>>>>>>{1=>[1, 4], 2=>[2, 5], 0=>[3, 6]}

# hash = {one: 1,
#         two: 2,
#         three: 3,
#         uno: 1,
#         dos: 2,
#         tres: 3}

# puts hash.group_by{|k, v| v} #>>>>>{1=>[[:one, 1], [:uno, 1]], 2=>[[:two, 2], [:dos, 2]],
                                    #3=>[[:three, 3], [:tres, 3]]}

array_two = ["a", "b", "c", "d", "e", "f"]
puts array_two.group_by{rand(3)}    >>>>>>>>>> #{0=>["a", "c"], 1=>["b", "d", "f"], 2=>["e"]}
                                    >>>>>>>>>> #{0=>["a", "f"], 1=>["b", "d"], 2=>["c", "e"]}
                                    >>>>>>>>>> #{0=>["a", "c", "e"], 1=>["b", "f"], 2=>["d"]}

