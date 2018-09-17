<div class='listingSrcCode'>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines}
/**
 * tip-calulator.js
 * This example program helps the user
 * calculate the amount of tip to leave
 * on a restaurant bill.
 * by Matt Curinga
 * 15 Sep 2018 
 *
 */

/*
 Present the user with a welcome message.
*/
function welcome() {

  let msg = ```
-----------------------------------
   Welcome to the Tip Calculator   
-----------------------------------
```;

}

/*
  Calculate the tip on a bill, given the pct of the tip.
  Return the amount of the tip
*/
function calcTip(bill, pct) {
    // convert pct to a decimal and calculate
    let tip = bill * pct;
    
    // convert the tip to float with 2 decimal places
    tip = Number.parseFloat(tip);
    return tip;
}

/*
  Ask the user to enter the amount of the bill
  and return this amount as a <float>
*/
function askBillAmt() {
    let amt = window.prompt("How much was your total bill?");
    amt = Number.parseFloat(amt);

    return amt;
}

/*
  Allow the user to choose a tip amount from a menu.
*/
function askTipPct() {
  let pct = window.prompt("What percent tip do you want to leave?");
  // convert the pct from a whole number to a fraction
  pct /= 100;
  pct = Number.parseFloat(pct).toFixed(2);
  return pct;
}

function money(amt) {
  let dollars = "$" + Number.parseFloat(amt).toFixed(2);
  return dollars;
}

/*
  Prints a message to the user showing
  the result of the calculations.
*/    
function showResults(bill, tip, pct):
  let total = tip + bill;

  console.log("Bill amount: " + money(bill) );
  console.log("Tip percentage: " + pct + "%" );
  console.log("Tip amount due: " + money(tip) );
  console.log("Total with tip: " + money(total) );

  console.log(```
-----------------------------------
             GOOD BYE      
-----------------------------------
```);


/*
  Read in the basic information, calcualte the tip
  and the share, then dispaly the results to the user.
*/
function main() {
    
    welcome();
    let myBill = askBillAmt()
    let pct = askTipPct()
    let tip = calcTIp(myBill, pct)
    showResults(myBill, tip, pct)

}

main();
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
</div>
