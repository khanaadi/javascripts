const readline = require('readline-sync');

//console.log(`users ${Middle_Name} Details!`);

const first_Name = readline.question('First_Name:')
const Middle_Name = readline.question('middle_name:')
const Last_Name = readline.question('last_name:')
const Lable = readline.question('Designation:')
const email = readline.question('email:')
const phone = readline.question('phone:')
const url = readline.question('website:')

console.log(`users ${Middle_Name} Details!`);
const resume = {
    basics: {
        first_Name   :first_Name,
        Middle_Name  :Middle_Name,
        Last_Name    :Last_Name,
        Lable        :Lable,
        email_Name   :email,
        phone_num    :phone,
        url_Name     :url
    }
}

console.log(resume)