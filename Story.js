function storyProgression(){
	switch(roomLoc) {
		case 0: starting_Room();
			break;
		case 1: center_Room();
			break; 
		case 2: metaldoor_Room();
			break;
		case 3: computer_Room();
			break;
		case 4: lounge_Room();
			break;
		case 5: medical_Room();
			break;
		case 6: elevator_Room();
			break;
		case 7: cage_Room();
		default: desc = "Default: How did you get her WTF.";
	}
}

function starting_Room(){
	var msg = "South: Your re-enter the room you were dazed and confused in, only to find nothing interesting."
	textMessage(msg)
}

function center_Room(){
	var msg = "Center: You enter a room with four doors going in different directions."
	textMessage(msg)
}

function metaldoor_Room(){
	var msg = "East: You enter the room to the east to find a metal door."
	textMessage(msg)
}

function computer_Room(){
	var msg = "North: You go through the door to find a room full of computers."
	textMessage(msg)
}

function lounge_Room(){
	var msg = "West: You enter a lounge room absent of life."
	textMessage(msg)
}

function medical_Room(){
	var msg = "SouthWest: You find a medical room full of cabinets and surgery tools."
	textMessage(msg)
}

function elevator_Room(){
	var msg = "NorthWest: You find an elevator that seems to go to the surface."
	textMessage(msg)
}

function cage_Room(){
	var msg = "FarEast: You enter the metal door to find a pitch dark room unable to see anything."
	textMessage(msg)
}


function textMessage(msg){
	var targetMainTextArea = document.getElementById("taMain");
	targetMainTextArea.value = msg + "\n\n" + targetMainTextArea.value
}