const readline = require('readline-sync');

//console.log(`users ${Middle_Name} Details!`);

const first_Name = prompt('First_Name:')
const Middle_Name = prompt('middle_name:')
const Last_Name = prompt('last_name:')
const Lable = prompt('Designation:')
const email = prompt('email:')
const phone = prompt('phone:')
const url = prompt('website:')

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