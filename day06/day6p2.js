//setup light grid
var lightGrid = new Array(1000);
for(var x = 0; x < 1000; x++){
	lightGrid[x] = new Array(1000);
	for(var y = 0; y < 1000; y++){
		lightGrid[x][y] = 0;
	}
}

//cycle through commands
for(var command in input){
	console.log('command: ' + command);
	var commands = input[command].split(/[ \,]/g);
	
	if(commands[0] == 'toggle'){
		for(var x = parseInt(commands[1]); x <= parseInt(commands[4]); x++){
			for(var y = parseInt(commands[2]); y <= parseInt(commands[5]); y++){
				lightGrid[x][y] = lightGrid[x][y] + 2;
			}
		}
	}else if(commands[1] == 'on'){
		for(var x = parseInt(commands[2]); x <= parseInt(commands[5]); x++){
			for(var y = parseInt(commands[3]); y <= parseInt(commands[6]); y++){
				lightGrid[x][y] = lightGrid[x][y] + 1;
			}
		}
	}else if(commands[1] == 'off'){
		for(var x = parseInt(commands[2]); x <= parseInt(commands[5]); x++){
			for(var y = parseInt(commands[3]); y <= parseInt(commands[6]); y++){
				if(lightGrid[x][y] > 0){
					lightGrid[x][y] = lightGrid[x][y] - 1;
				}
			}
		}
	}
	console.log(lightGrid);
}

//count the lights that are on
var lightBrightnessCount = 0;
for(var x = 0; x < 1000; x++){
	for(var y = 0; y < 1000; y++){
		lightBrightnessCount = lightBrightnessCount + lightGrid[x][y];
	}
}
console.log(lightOnCount);
console.log(lightGrid);