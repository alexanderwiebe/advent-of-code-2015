var input = [
	['Tristram', 'AlphaCentauri', 34],
	['Tristram', 'Snowdin', 100],
	['Tristram', 'Tambi', 63],
	['Tristram', 'Faerun', 108],
	['Tristram', 'Norrath', 111],
	['Tristram', 'Straylight', 89],
	['Tristram', 'Arbre', 132],
	['AlphaCentauri', 'Snowdin', 4],
	['AlphaCentauri', 'Tambi', 79],
	['AlphaCentauri', 'Faerun', 44],
	['AlphaCentauri', 'Norrath', 147],
	['AlphaCentauri', 'Straylight', 133],
	['AlphaCentauri', 'Arbre', 74],
	['Snowdin', 'Tambi', 105],
	['Snowdin', 'Faerun', 95],
	['Snowdin', 'Norrath', 48],
	['Snowdin', 'Straylight', 88],
	['Snowdin', 'Arbre', 7],
	['Tambi', 'Faerun', 68],
	['Tambi', 'Norrath', 134],
	['Tambi', 'Straylight', 107],
	['Tambi', 'Arbre', 40],
	['Faerun', 'Norrath', 11],
	['Faerun', 'Straylight', 66],
	['Faerun', 'Arbre', 144],
	['Norrath', 'Straylight', 115],
	['Norrath', 'Arbre', 135],
	['Straylight', 'Arbre', 127]
];

var locations = ['Straylight', 'Norrath', 'Faerun', 'Tambi', 'Snowdin', 'AlphaCentauri', 'Tristram', 'Arbre'];

var uniqueRoutes = [];
//implementation of heap's algorithm
//https://en.wikipedia.org/wiki/Heap%27s_algorithm
function permutate(arr, n){
  if(n == 1){
    uniqueRoutes.push(JSON.parse(JSON.stringify(arr)));
  }else{
  	for(var i = 0; i < n -1; i++){
  		permutate(arr, n-1);
  		if( n % 2 == 0){
  			var swap = arr[i];
  			arr[i] = arr[n-1];
  			arr[n-1] = swap;
  		}else{
  			var swap = arr[0];
  			arr[0] = arr[n-1];
  			arr[n-1] = swap;
  		}
  	}
  	permutate(arr, n-1);
  }
}
permutate(locations, locations.length);
var longestRoute = 0;

for(var route in uniqueRoutes){//each unique route
	var length = 0;
	for(var i = 0; i < locations.length-1; i++){//for each location pair
		for(var find in input){//find the distance between them
			if((input[find][0] === uniqueRoutes[route][i] && input[find][1] === uniqueRoutes[route][i+1]) ||
			   (input[find][0] === uniqueRoutes[route][i+1] && input[find][1] === uniqueRoutes[route][i])){
				length += input[find][2];
				break;
			}

		}
	}
	if(length > longestRoute){
		longestRoute = length;
	}
	//console.log(route + ' : ' + length + ' \t:\t' + longestRoute);
}
console.log(longestRoute);