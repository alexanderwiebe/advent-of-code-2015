var total = 0;

function iter(x){
  for(var mem in x){
    if(Array.isArray(x[mem])){
    	iter(x[mem]);
    }else if(typeof(x[mem]) == 'object'){
    	//check for 'red'
    	var hasRed = false;
    	for(var check in x[mem]){
    		if(x[mem][check] == "red"){
    			hasRed = true;
    		}
    	}
    	if(!hasRed){
    		iter(x[mem]);
    	}
    }else if(typeof(x[mem]) == 'number'){
    	total += x[mem];
    }
  }
}

iter(input);
console.log(total);