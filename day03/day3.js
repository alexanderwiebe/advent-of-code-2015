var grid = []; //list of places visited
var position = {'x':0, 'y':0}; //starting cords
var presents = 1; //first house

function matchCoords(element){
  if(element.x == currentPosition.x && element.y == currentPosition.y){
    return true;
  }else{
    return false;
  }
}

grid.push(position);
for(var index in input){
  var currentPosition = JSON.parse(JSON.stringify(position));
  if(input[index] == '<'){
    //left
    currentPosition.x--;
  }else if(input[index] == '>'){
    //right
    currentPosition.x++;
  }else if(input[index] == '^'){
    //up
    currentPosition.y++;
  }else if(input[index] == 'v'){
    //down
    currentPosition.y--;
  }
  if(!grid.find(matchCoords)){
    grid.push(currentPosition);
    presents++;
  }
  position = currentPosition;
}

console.log(presents);