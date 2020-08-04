function alertKey(octave, num) {
    var string = 0;
    var fret = 0;
    var pianoSum = (octave * 12) + num - 4;
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