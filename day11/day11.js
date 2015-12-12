var input = 'ghijklmn';

function charIncrement(input){
	var carry = false;
	return input.split('').reverse()
		.reduce(function(prev, next, ind){
			if(ind == 1 && prev.substr(-1) != 'z'){//first value
				//no carry
				prev = String.fromCharCode(prev.charCodeAt()+1);
				//unused letters
				if(prev == 'i' || prev == 'o' || prev == 'l') prev = String.fromCharCode(prev.charCodeAt()+1);
			}else if((ind == 1 && prev.substr(-1) == 'z') || carry){//with carry
				prev = prev.substr(0, prev.length-1) + 'a';
				if(next != 'z'){
					next = String.fromCharCode(next.charCodeAt()+1);
					carry = false;
				}else{
					next = 'a';
					carry = true;
				}
			}
			if(next == 'i' || next == 'o' || next == 'l') next = String.fromCharCode(next.charCodeAt()+1);
			if(ind == input.length-1 && carry){//last character has carry
				next = next + 'a';
			}
			return prev + next;
		}).split('').reverse()
		.reduce(function(prev, next){return prev + next;});
}
var kloop = true;
while(kloop){
	input = charIncrement(input);
	if(input.search(/((.)\2).*?((.)\4)/gi) != -1){// && input.search(/[ilo]/gi) == -1){//at least two non overlapping pairs, no ilo chars
		for(var i = 0; i < input.length - 2; i++){
			if(input[i].charCodeAt() == input[i+1].charCodeAt()-1 && input[i].charCodeAt() == input[i+2].charCodeAt()-2){
				console.log('found password: \t' + input);
				kloop = false;
				break;
			}
		}
	}
}