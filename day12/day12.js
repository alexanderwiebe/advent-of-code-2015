var matches = input.match(/-*\d+/g);
var answer = matches.reduce(function(prev, next){ return parseInt(prev) + parseInt(next);});