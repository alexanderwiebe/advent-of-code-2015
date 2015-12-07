//just using chrome dev tools to run this
var floor = 0;
var charIndex = 0;

for(var i in input){
	if(input[i] == '('){
		floor++;
	}else if(input[i] == ')'){
		floor--;
	}
}
console.log(floor);