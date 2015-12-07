//used nodejs for the crypto library
//node day4p2.js

var crypto = require('crypto');
var count = -1;
var seed = 'ckczppom';

while(true){
	count++;
	if(crypto
			.createHash('md5')
			.update(seed + count)
			.digest("hex")
			.substring(0,6) == '000000'){
		break;
	}
	if(count % 1000000 == 0){
		console.log(count);
	}
}

console.log('final count: ' + count);