/***START From Day 9***/
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
permutate(peeps, peeps.length);
/***END From Day 9***/
var maxHappiness = 0;
for(var route in uniqueRoutes){
  var curHappiness = 0;
  for(var i = 0; i < uniqueRoutes[route].length; i++){
    var currentSeat = uniqueRoutes[route][i];
    var leftSeat = '';
    var rightSeat = '';
    if (i == 0) {
      leftSeat = uniqueRoutes[route][uniqueRoutes[route].length-1];
      rightSeat = uniqueRoutes[route][i+1];
    }else if (i == uniqueRoutes[route].length-1){
      leftSeat = uniqueRoutes[route][i-1];
      rightSeat = uniqueRoutes[route][0];
    }else{
      leftSeat = uniqueRoutes[route][i-1];
      rightSeat = uniqueRoutes[route][i+1];
    }
    curHappiness += input[currentSeat][leftSeat];
    curHappiness += input[currentSeat][rightSeat]; 
  }
  console.log('peep:\t' + route + '\tcurHapiness\t' + curHappiness);
  if(curHappiness > maxHappiness){ maxHappiness = curHappiness; }
}
console.log(maxHappiness)