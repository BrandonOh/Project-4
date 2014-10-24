var roomLoc = 0
var room1_Points = 0
var room2_Points = 0
var room3_Points = 0
var room4_Points = 0
var room5_Points = 0
var room6_Points = 0
var totalPoints = 0

function myNorthFunction(){
	var targetPointTextArea = document.getElementById("pointScreen");
	if(roomLoc === 0){
		roomLoc = 1
		enable(false,false,false,false)
		storyProgression()
		if(room1_Points === 0){
			totalPoints += 5
			room1_Points = 1
			targetPointTextArea.value = "total points: " + totalPoints
		}
	}else if(roomLoc === 1){
		roomLoc = 3
		enable(true,false,true,false)
		storyProgression()
		if(room3_Points === 0){
			totalPoints += 5
			room3_Points = 1
			targetPointTextArea.value = "total points: " + totalPoints
		}
	}else{
		wrongWay()
	}
}
function mySouthFunction() {
	if(roomLoc === 3){
		roomLoc = 1
		enable(false,false,false,false)
		storyProgression()
	}else if(roomLoc === 1){
		roomLoc = 0
		enable(false,true,true,false)
		storyProgression()
	}else{
		wrongWay()
	}
}
function myEastFunction(){
	var targetPointTextArea = document.getElementById("pointScreen");
	if(roomLoc === 1){
		roomLoc = 2
		enable(true,true,true,false)
		storyProgression()
		if(room2_Points === 0){
			totalPoints += 5
			room2_Points = 1
			targetPointTextArea.value = "total points: " + totalPoints
		}
	}else if(roomLoc === 5){
		roomLoc = 0
		enable(false,true,true,false)
		storyProgression()
	}else if(roomLoc === 6){
		roomLoc = 3
		enable(true,false,true,false)
		storyProgression()
	}else if(roomLoc === 4){
		roomLoc = 1
		enable(false,false,false,false)
		storyProgression()
	}else{
		wrongWay()
	}
}
function myWestFunction(){
	var targetPointTextArea = document.getElementById("pointScreen");
	if(roomLoc === 1){
		roomLoc = 4
		enable(true,true,false,true)
		storyProgression()
		if(room4_Points === 0){
			totalPoints += 5
			room4_Points = 1
			targetPointTextArea.value = "total points: " + totalPoints
		}
	}else if(roomLoc === 0){
		roomLoc = 5
		enable(true,true,false,true)
		storyProgression()
		if(room5_Points === 0){
			totalPoints += 5
			room5_Points = 1
			targetPointTextArea.value = "total points: " + totalPoints
		}
	}else if(roomLoc === 3){
		roomLoc = 6
		enable(true,true,false,true)
		storyProgression()
		if(room6_Points === 0){
			totalPoints += 5
			room6_Points = 1
			targetPointTextArea.value = "total points: " + totalPoints
		}
	}else if(roomLoc === 2){
		roomLoc = 1
		enable(false,false,false,false)
		storyProgression()
	}else{
		wrongWay()
	}
}

function enable(N,S,E,W) {
	document.getElementById("mySouthBtn").disabled = S
	document.getElementById("myNorthBtn").disabled = N
	document.getElementById("myEastBtn").disabled = E
	document.getElementById("myWestBtn").disabled = W
}

function storyProgression(){
	var targetMainTextArea = document.getElementById("taMain");
	var desc = " "
	switch(roomLoc) {
		case 0: desc = "South: Your re-enter the room you were dazed and confused in, only to find nothing interesting.\n\n";
			break;
		case 1: desc = "Center: You enter a room with four doors going in different directions.\n\n";
			break; 
		case 2: desc = "East: You enter the room to the east to find a metal door.\n\n";
			break;
		case 3: desc = "North: You go through the door to find a room full of computers.\n\n";
			break;
		case 4: desc = "West: You enter the room to the west to find a lounge empty of all life.\n\n";
			break;
		case 5: desc = "SouthWest: You find a medical room full of cabinets and surgery tools.\n\n";
			break;
		case 6: desc = "NorthWest: You find an elevator that seems to go to the surface.\n\n";
			break;
		default: desc = "Default: How did you get her WTF.\n\n";
	}
	targetMainTextArea.value = desc + targetMainTextArea.value
}

function help(){
var targetMainTextArea = document.getElementById("taMain");
targetMainTextArea.value = "commands that are valid are:\n\nTo go South = S, s, South, south\n\nTo go North = N, n, North, north\n\nTo go East = E,e,East,east\n\nTo go West = W,w,West,west"

}

function btnGo_click(){
	var targetMainTextArea = document.getElementById("taMain");
	var input = document.getElementById("txtCommand").value;
	if (input === "n" || input === "N" || input === "north" || input === "North"){
		myNorthFunction()
	}else if (input === "s" || input === "S" || input === "south" || input === "South"){
		mySouthFunction()
	}else if (input === "e" || input === "E" || input === "east" || input === "East"){
		myEastFunction()
	}else if (input === "w" || input === "W" || input === "west" || input === "West"){
		myWestFunction()
	}else if (input === "help" || input === "Help"){
		help()
	}else{
		targetMainTextArea.value = "I do not understand that action " + input + ". Please type Help for possible actions. \n\n" + targetMainTextArea.value
	}
}

function wrongWay(){
	var targetMainTextArea = document.getElementById("taMain");
	targetMainTextArea.value = "There is no door that way.\n\n" + targetMainTextArea.value
}
