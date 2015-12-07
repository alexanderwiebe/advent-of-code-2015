//regex remove ab, cd, pq, or xy
(^.*?ab.*?$\n)|(^.*?cd.*?$\n)|(^.*?pq.*?$\n)|(^.*?xy.*?$\n)
//regex find 3 or more vowels
^.*?([aeiou].*?){3,}
//regex to find double character
(.)\2
//how to combine them both
(?=^.*?([aeiou].*?){3,})(.)\2

//remove rows without 

//here's the regexs
//part 1
(?=.*?(.)\1)
(?=^.*?([aeiou].*?){3,})
(?!(^.*?ab.*?$\n)|(^.*?cd.*?$\n)|(^.*?pq.*?$\n)|(^.*?xy.*?$\n))

//part 2
(?=^.*?(..).*?\1)(?=^.*?(.).\2)^.*$