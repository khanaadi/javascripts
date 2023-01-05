
import readline from 'readline-sync';


const CURRENT_AVAILABLE_TICKETS = 10;
console.log(`Current available tickets are = ${CURRENT_AVAILABLE_TICKETS}`);

const numberTicketsRequired = 15;


const canBuyTickets = numberTicketsRequired <= CURRENT_AVAILABLE_TICKETS;



let message = '';

if( canBuyTickets ) {
  message = `You're tickets are confirmed`
} else {
  message = `Tickets are not available`
}

console.log(message)