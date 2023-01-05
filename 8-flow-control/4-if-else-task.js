
import readline from 'readline-sync';
// import chalk from 'chalk';

const Starters = ["France", "Apollo Fish", "Chicken Lolly Pop"];
const Briyani = ["Chicken Briyani", "Mutton Briyani", "Veg Briyani"];
const Drinks = ["Sprit", "Slice", "Mazaa"];

let Items = readline.question('items ='); // startes
// let question = Items
// Items = Items.toLowerCase();
// console.log(chalk.bgCyan(`items Availale is = ${Items}`));

if ( Items === 'Starters') { 
  console.log(`Starters Items = ${Starters}`);
} else if (Items  === 'Briyani') {
  console.log(`Briyani Items = ${Briyani}`);
} else if (Items === 'Drinks') 
  console.log(`drinks = ${Drinks}`)
// } else {
//   console.log(`Light values should be Red, Green, Yellow`);
// }

