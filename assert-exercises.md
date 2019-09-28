Unit testing exercises
----------------------

For each of these problems, write the unit test **first**, then write the
function. Make sure that it passes the test.

1. **Tbs to cups**. There are 16 tablespoons in a cup. Write a function that converts
   Tbs to cups. It should take the number of tablespoons as an argument and return
   the number of cups.

2. **Kilos (kg) to pounds (lbs)**. Write a function that converts kilograms to pounds.
    Use the conversion rate of 2.2 pounds for each kilogram.

3. **Weight of water**. 1 liter of water weighs exactly 1 kilogram. Write a function
   that has a parameter for the volume of water in liters returns the weight of
   water _in pounds_, something like this: `function litersOfWaterInLbs(liters)`

4. **Format currency.** Write a function `fmtCurrency(amount, symbol)` that
   takes a currency amount as a real number and returns a string, with the currency
   symbol at the start followed by the amount rounded to 2 decimal
   places (using `toFixed`).

5. **Making pizza.** You make pizzas. When you make the sauce, if you only use
   1 can of tomatoes, it's not enough for the whole pie. You need 1.5 cans per
   pizza. When you are making a lot of pizzas (and a big pot of sauce),
   you want a function that tells you how many cans of tomatoes to buy. Of
   course, you can't buy half a can of tomatoes, so you must round up if
   there's a half can. To "round up", use Javascript's built in
   [`Math.round` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil).


### Rounding numbers (optional challenge)
Javascript's built-in `Math.round(n)` rounds any real number to the closest
integer. Write a more flexible function, `round(n, p)` that rounds a number `n`
to the number of decimal places specified by `p`.

Examples:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ round(2.457, 2);
=> 2.46
⠕ round(3.98746144, 4)
=> 3.9875
⠕ round(3.98746144, 0)
=> 4
⠕ round(52, -1)
=> 50
⠕ round(55, -1)
=> 60
⠕ round(542, -2)
=> 540
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

_Your tests should test all of these examples._
