
var myName;

myName = "Pathan Aadil Khan";



var fullName = 'Pathan Aadil Khan';


var firstName = 'Pathan';
var middleName = 'Aadil';
var lastName = 'khan';


var myFullname = firstName + middleName + lastName;

var fullName = "firstName" + "middleName" + "lastName";

//var myName = firstName + " " + middleName + " " + lastName;
var myName = `${firstName} ${middleName}, ${lastName}`


var city = 'Guntur';
var state = "AP";
var country = "India";

var address = `${city}, ${state} ${country}`;

// lowercase (small letter) x
var x = 200 * 99;

// uppercase (Capital letter) X
var X = 89 * 78 / 10;

// '5' + 10 -> '510'
// `${ '5' + 10 }`

var output = `${'5' + 10}`; // '510'
var outputOne = `${Number('5') + 10}`; // '15'
var outputTwo = `${+'5' + 10}`; // '15'
