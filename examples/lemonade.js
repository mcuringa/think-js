/**
 * A solution to the lemonade calculator
 * lab problem.
 * This program estimates 
 */

/**
 * print out a welcome message to start the program
 */
function welcome() {
  console.log(`
--------------------------------------
  Welcome to the lemonade estimator
--------------------------------------
  `);
}

/**
 * prompt the user for input according to `msg`
 * and return the answer converted to a float
 */
function promptFloat(msg) {
  let x = window.prompt(msg);
  return Number.parseFloat(x);
}

/**
 * Converts a float, `amt`, into
 * a string with a dollar sign ($)
 * and returns the string.
 */
function money(amt) {
  let dollars = "$" + Number.parseFloat(amt).toFixed(2);
  return dollars;
}

/**
 * This function asks for all of
 * expenses that go into selling
 * 1 cup of lemonade.
 */
function getExpensePerCup() {
  let msg = `
GATHERING EXPENSE DATA
Enter how much it costs you for one (1) of these items.
Click <OK> to continue.

`;
  
  window.prompt(msg);
  let cupCost = promptFloat("How much do you pay for 1 new cup?");
  let lemonCost = promptFloat("How much do you pay  for 1 lemon?");
  
  // for each cup of lemonade we need 1 cup and 3 lemons
  return cupCost + lemonCost * 3;
}

/**
 * prints profits and expenses given
 * for a given quantity of lemonade sold
 */
function resultForQty(qty, cupPrice, cupCost) {

  let cost = qty * cupCost;
  let revenue = qty * cupPrice;
  let profit = revenue - cost;

  console.log();
  console.log("if you sell " + qty + " cups of lemonade at " + money(cupPrice) + " per cup");
  console.log("expenses: " + money(cost));
  console.log("revenues: " + money(revenue));
  console.log("  PROFIT: " + money(profit));
  console.log("-------------------------");
 
}

/**
 * Show the user expenses and profits at various levels of sales
 */
function showResults(cupCost, cupPrice) {

  console.log();
  console.log("------- DISPLAYING RESULTS -------");

  resultForQty(20, cupPrice, cupCost);
  resultForQty(50, cupPrice, cupCost);
  resultForQty(100, cupPrice, cupCost);
  resultForQty(500, cupPrice, cupCost);

}

/**
 * start the program and control the flow
 */
function main() {

  let cupCost = getExpensePerCup();
  let cupPrice = promptFloat("How much do you charge for a cup of lemonade?");
  showResults(cupCost, cupPrice);
}

main();
