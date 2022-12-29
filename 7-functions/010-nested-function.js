const TAX_AMOUNT = 30;



const shopping = function(amount) { 

  const DISCOUNT_AMOUNT = 40;

 
  const calculateTax = () => {
    return amount + TAX_AMOUNT;
  }
 
  function getDiscountAmount() {
    return DISCOUNT_AMOUNT;
  }  
   
  const total = calculateTax() - getDiscountAmount();
  return total;
}


const billAmount = shopping(100); // ? 
console.log(`Bill Amount = ${billAmount}`);




function shoppingDetails(amount) {
  const DISCOUNT_AMOUNT = 25;

  function calculateTaxAmount() {
    const taxAmount = amount + TAX_AMOUNT;
    return taxAmount;
  }

  function getDiscountAmount() {
    const total = calculateTaxAmount();
    const amountWithDiscount = total - DISCOUNT_AMOUNT;
    return amountWithDiscount;
  }

  const actualBill = getDiscountAmount();
  return {
    amount: amount,
    billAmount: actualBill,
    discount: DISCOUNT_AMOUNT,
    amountWithTax: calculateTaxAmount() 
  }
}

const userAmount = 456;
const details = shoppingDetails(userAmount);
console.log(details);