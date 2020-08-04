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