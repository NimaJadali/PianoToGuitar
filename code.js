function alertKey(octave, num) {
    var string = 0;
    var fret = 0;
    var pianoSum = (octave * 12) + num - 4;

    // accounts for the highest string
    if ((octave == 2 && num > 8) || octave > 2) {
	string = 5;
	fret = ((octave - 2) * 12) + num - 4;
    } else {
	string = Math.floor(pianoSum / 5);
	fret = pianoSum % 5;
    }

    alert("octave: " + octave + "   num: " + num + "\n"
    + "corresponding string: " + string + "    corresponding fret: " + fret);
    var output = string + ", " + fret;
    //alert(output);
    return output;
}

function getWX1(numb) {
    var x1 = 94 + (numb * 45);
    alert("this was called")
    //return num.toString((94 + (numb * 45)));
    return x1;
}

function getWX2(numb) {
    var x2 = 139 + (numb * 45);
    //return num.toString((139 + (numb * 45)));
}

// changes the visibility attribute of the circle pngs from hidden to visible
function toggleImage(octave, num) {
    id = alertKey(octave, num);
    img = document.getElementById(id);

    if (img.getAttribute("state") == 1) {   // if state = 1, the circle is currently visible
	img.style.visibility = "hidden";
	img.setAttribute("state", 0);
    } else {
	img.style.visibility = "visible"; // if state = 0, the circle is currently hidden
	img.setAttribute("state", 1);
    }
}

// spaceCircles() is called on page load to space out green circles and set them to "hidden"
function spaceCircles() {
    
    var circleArr = document.getElementsByClassName("front");
    var space = 0;
    //alert("space!");
    for (var i = 0; i < circleArr.length; i++) {
	circleArr[i].style.visibility = "hidden";

	if (i <= 2) {
	    space = 50 + (85 * i);
	} else if (i < 4) {   // as the frets move up the neck, the spacing increment needs to decrease since the frets get smaller
	    space = 220 + (70 * (i - 2));
	}
	//var spaceStr = num.toString(space);
	circleArr[i].style.left = space + "px";
    }
}