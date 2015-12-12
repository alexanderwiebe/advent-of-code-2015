var input = '3113322113';
console.log(input);
for(var count = 0; count < 50; count++){
  input = input.match(/(\d)\1*/g).map(function(el){return el.length + el[0]}).reduce(function(prev, next){ return prev + next; });
}
copy(input);