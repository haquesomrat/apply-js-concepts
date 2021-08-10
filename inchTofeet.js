function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;

}


var myInches = 132;
var feet = inchToFeet(myInches);
console.log('myInches in feet ', feet);

var yourInches = 144;
var feet = inchToFeet(yourInches);
console.log('yourInches in feet ', feet);

var hisInches = 156;
var feet = inchToFeet(hisInches);
console.log('hisInches in feet ', feet);

var herInches = 72;
var feet = inchToFeet(herInches);
console.log('herInches in feet ', feet);