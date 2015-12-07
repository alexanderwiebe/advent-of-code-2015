//just using chrome dev tools to run this

var totalWrappingPaper = 0;
for(var present in input){
	var dims = input[present].split('x')
       .map(function(element){return parseInt(element);})
       .sort(function(a, b){return a-b;});
	totalWrappingPaper += (2*dims[0]*dims[1]) + (2*dims[0]*dims[2]) + (2*dims[1]*dims[2])
	totalWrappingPaper += dims[0] * dims[1];
}
console.log(totalWrappingPaper);  