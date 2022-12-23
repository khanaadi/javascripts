console.log("My Functions....");
console.log( 56 * 99 );
console.log(true === false);

var a = 10; // number
let b = "20"; // string
const c = true; // boolean

console.log( a + b + c );


const user = {
  firstname: "Aadil",
  lastname: "Khan",
  company: "trangla",
  city: "guntur"
}

const friends = ['Sameer', "Razak", 'Afroz'];

const adil = {
  firstname: 'Aadil',
  lastname: 'Khan',
  company: 'SAP',
  city: 'Ongole'
}

var name = "Adil";

             
function createUserDetails(userFirstName, lastName, companyName, cityName) {
  const user = {
    firstname: userFirstName,
    lastName: lastName,
    company: companyName,
    city: cityName
  }

  return user;
}

const salary = 10000;
const hike = salary + 5000; 

const newUser = createUserDetails('Aadil', "Khan", 'SAP', 'Hyderabad'); 
console.log(newUser);

