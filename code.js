function alertKey(octave, num) {
    var string = 0;
    var fret = 0;
    var pianoSum = (octave * 12) + num - 4;

    //accounts for the highest string
    if ((octave == 2 && num > 8) || octave > 2) {
	string = 5;
	fret = ((octave - 2) * 12) + num - 4;
    } else if (octave == 1 && num == 11) {
	string = 4;
	fret = 0;
    } else if (octave == 2) { // use hardcoding to account for 3rd string's only going up to 3rd fret
	if (num < 4) {
	    string = 4;
	    fret = (pianoSum % 5) + 1;
	} else if (num == 4) {
	    string = 5;
	    fret = 0;
	} else if (num > 4) {
	    string = 5;
	    fret = (pianoSum % 5) + 1;
	}
    } else {
	string = Math.floor(pianoSum / 5);
	fret = pianoSum % 5;
    }

    //alert("octave: " + octave + "   num: " + num + "\n"
    //+ "corresponding string: " + string + "    corresponding fret: " + fret);
    var output = string + ", " + fret;
    //alert(output);
    return output;
}

/*
function getWX1(numb) {
    var x1 = 94 + (numb * 45);
    alert("this was called");
    //return 321 + ",163," + 366 + ",294";
    return x1;
}
*/

/*
function getWX2(numb) {
    var x2 = 139 + (numb * 45);
    //return num.toString((139 + (numb * 45)));
}
*/

// changes the visibility attribute of the circle pngs from hidden to visible
function toggleButton(octave, num) {
    id = alertKey(octave, num);
    button = document.getElementById(id);
    if (button.getAttribute("state") == 1) {   // if state = 1, the circle is currently visible
	button.style.visibility = "hidden";
	button.setAttribute("state", 0);
    } else {
	button.style.visibility = "visible"; // if state = 0, the circle is currently hidden
	button.setAttribute("state", 1);
    }
    playSound(octave, num);
}

// spaceCircles() is called on page load to space out green circles and set them to "hidden"
function spaceCircles(className) {
    
    var circleArr = document.getElementsByClassName(className);
    var space = 0;
    //alert("space!");
    for (var i = 0; i < circleArr.length; i++) {
	
	circleArr[i].style.visibility = "hidden";

	if (i == 0) {
	    space = 0;
	} else if (i == 1) {
	    space = 3.8;
	} else if (i == 2) {
	    space = 10.75;
	} else if (i == 3) {
	    space = 17;
	} else if (i == 4) {
	    space = 22.7;
	} else if (i == 5) {
	    space = 28.35;
	} else if (i == 6) {
	    space = 33.5;
	} else if (i == 7) {
	    space = 38.5;
	} else if (i == 8) {
	    space = 43.15;
	} else if (i == 9) {
	    space = 47.5;
	} else if (i == 10) {
	    space = 51.5;
	} else if (i == 11) {
	    space = 55.25;
	} else if (i == 12) {
	    space = 59.1;
	} else if (i == 13) {
	    space = 62.6;
	} else if (i == 14) {
	    space = 65.75;
	} else if (i == 15) {
	    space = 68.77;
	} else if (i == 16) {
	    space = 71.52;
	} else if (i == 17) {
	    space = 74.18;
	} else if (i == 18) {
	    space = 76.72;
	} else if (i == 19) {
	    space = 79.25;
	} else if (i == 20) {
	    space = 81.53;
	} else if (i == 21) {
	    space = 83.55;
	} else if (i == 22) {
	    space = 85.35;
	} else if (i == 23) {
	    space = 87.05;
	} else if (i == 24) {
	    space = space = 88.8;
	}

	//var spaceStr = num.toString(space);
	circleArr[i].style.left = space + "vw";
    }
}

function spaceAllCircles() {
    spaceCircles("string0");
    spaceCircles("string1");
    spaceCircles("string2");
    spaceCircles("string3");
    spaceCircles("string4");
    spaceCircles("string5");
}

function playSound(octave, num) {
    var audio = new Audio("Audio/" + octave + "," + num + ".mp3");
    audio.play();
}