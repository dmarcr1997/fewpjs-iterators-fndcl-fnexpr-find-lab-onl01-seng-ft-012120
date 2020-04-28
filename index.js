const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(teams){
  let win = teams.find( function(t){ return t.result === "W"});
  
  if (win !== undefined){
    return win.year;
  }
  else{
    return win;
  }
}