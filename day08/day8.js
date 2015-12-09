/***
* this problem was just a lot of regex.var
* BASIC: input line to array 
* FIND: ^(.*?)$ 
* REPLACE: '$1',
* then just find replace stuff like \" with just a single character or two or w/e
***/

var codeCount = 0;
var charCount = 0;
//using day8input_mod2.txt

for(var word in input){
	codeCount += input[word].length;
}
console.log(codeCount);//6202

//using day8input_mod3.txt
//4860
