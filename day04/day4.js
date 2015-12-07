var crypto = require('crypto');
var count = -1;
var seed = 'ckczppom';

while(true){
	count++;
	if(crypto
			.createHash('md5')
			.update(seed + count)
			.digest("hex")
			.substring(0,5) == '00000'){
		break;
	}
}

console.log(count);