//variable
var time = "10:15pm";
var bookPrice = 150;
var isItWhite = false;

//array
var partners = ['sajid', 'mojid', 'nojid', 'lajid'];
var elementCount = partners.length;
var nojidIndex = partners.indexOf('nojid');
partners.push('kajit');
partners.pop();

//conditionals

if (bookPrice < 120) {
    console.log('I will buy this book')
}
else {
    console.log('mama, kisu discount den')
}

//loop

var i = 0;
while (i <= 17) {
    i++;
}
for (i = 0; i <= 17; i++) {
    //do some work
}

//function

function isMoonUp(time) {
    if (time >= 19 && time <= 5) {
        return true;
    }
    return true;
}

var moonStatus = isMoonUp();
