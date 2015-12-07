var input = ''; //day1input
var floor = 0;
var charIndex = 0;

for(var i in input){
	if(input[i] == '('){
		floor++;
	}else if(input[i] == ')'){
		floor--;
	}
	if(floor == -1 && charIndex == 0){
		charIndex = i;
		charIndex++;
		break;
	}
}
console.log(charIndex);