//just using chrome dev tools to run this

var totalRibbon = 0;
for(var present in input){
	var dims = input[present].split('x').map(function(element){return parseInt(element);}).sort(function(a, b){return a-b;});
	totalRibbon += (2*dims[0]) + (2*dims[1]);
	totalRibbon += dims[0] * dims[1] * dims[2];
	console.log(dims);
}
console.log(totalRibbon);