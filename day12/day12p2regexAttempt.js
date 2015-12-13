//first remeove objects with attribute red
//formatted json with sublime text than used:
//regex
//find
// (?s)((    )\2*)\{.*?\"red".*?\1\}
//(?s) >> this makes . match newline characters
//((    )\2*)\{ >> this matches a number of tabs
//.*?\"red".*?
//\1\}

//replace with nothing
// 
//...found edge cases this didn't work 