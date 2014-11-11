var painkiller = 0
var memo = 0
var msg = ""

function btnGo_click(){
	var input = document.getElementById("txtCommand").value;
	input = input.toLowerCase();
	if (input === "n" || input === "north"){
		myNorthFunction()
	}else if (input === "s" || input === "south"){
		mySouthFunction()
	}else if (input === "e" || input === "east"){
		myEastFunction()
	}else if (input === "w" || input === "west"){
		myWestFunction()
	}else if (input === "help"){
		help()
	}else if (input === "examine"){
		examine()
	}else if (input === "take memo" || input === "take medicine"){
		take()
	}else if (input === "use painkiller" || input === "use pill"){
		takePainkiller()
	}else{
		msg = "I do not understand that action " + input + ". Please type help for possible actions."
	}
	textMessage(msg)
	document.getElementById("txtCommand").value = ""
}


function takePainkiller(){
	if (painkiller === 1 && pain === 5){
		pain = 0
		msg = "you take a painkiller and your body feels better."
	}else{
		msg = "you dont think thats a good idea."
	}
}

function take(){
	if (roomLoc === 4){
		if (memo === 0){
			msg = "you take the memo."
			memo = 1
		}else if(memo === 1){
			msg = "you already have taken the memo."
		}
	}else if (roomLoc === 5){
		if (painkiller === 0){
			msg = "you take the medicine to find they are painkillers."
			painkiller = 1 
		}else if(painkiller === 1){
			msg = "you check the medicine cabinet but find nothing."
		}
	}
}

function examine(){
	if (roomLoc === 5){
		msg = "A basic medical bay, you search around and you see medicine in the cabinets." 
	}
}

function help(){
	if (painkiller === 1){
		msg = "Commands that are valid are:\n\nTo go South = s or south\n\nTo go North = n or north\n\nTo go East = e or east\n\nTo go West = w or west\n\nTo examine the room you are in = examine\n\nTo take objects = take ______\n\nTo take a painkiller = use painkiller or use pill\n\nCommands are not case sensitive."
	}else{
		msg = "Commands that are valid are:\n\nTo go South = s or south\n\nTo go North = n or north\n\nTo go East = e or east\n\nTo go West = w or west\n\nTo examine the room you are in = examine\n\nTo take objects = pick up\n\nCommands are not case sensitive."	
	}
}