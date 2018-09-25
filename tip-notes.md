Code Listing 1: The Tip Calculator {.codeListing}
-------------------------------------------------

### Refactoring

Now that we have fruitful functions, we can focus our attention on 
reorganizing our code so that it fits more nicely into our mental chunks.  
This process of rearrangement is called **refactoring** the code.  
 
With our Tip Calculator we need to find the amount 
of the tip and show the results to the user. In the example below, 
we separate the various functions of the program to make a more 
complete tip calculator. As you'll see, we're starting to build code 
that is useful. Using functions allows us to make changes to one 
part of a program without affecting other parts of the program. For 
example, we can change the welcome message without worrying about 
breaking our calculations.

The trick about refactoring code is to anticipate which things we 
are likely to want to change each time we call the function: these 
should become the parameters, or changeable parts, of the functions 
we write.

[View the "Tip Calculator" repl](https://repl.it/@mcuringa/tip-calculator)

### Case Study: Tip Calculator {.tipCalculator}

<aside data-line-number="1">

Brief header **comments** at the top of the **source file** 
identify basic information about the program and the file.
Comments are messages for programmers who read the **source
code** --- they do not affect the execution of the program.

</aside>

<aside data-line-number="14">

``welcome`` is a very simple **function** --- it does not accept
any data in the form of **function parameters** and it does not
**return** any data using a **return statement**. It simply prints out a
message to the console.

</aside>


<aside data-line-number="30">

The ``calcTip`` function defines 2 **parameters**:
`bill` and `pct`. These parameters become
variables within the **function body**. Line 30 uses
**arithmetic operators** (multiplication here) to
calculate a new value and store it in the `tip` **variable**.
`tip` is converted to a float using the **built-in function**
`Number.parseFloat`. Finally, the rounded tip amount is returned.


</aside>

<aside data-line-number="43">

``askBillAmt`` is a **fruitful function** because
it has a **return statement**. It uses the
**built-in function** `window.prompt` to ask for data from the
user of the program. When this function is called, it returns
the amount of the bill as a float, because it represents money.

</aside>

<aside data-line-number="61">

``money`` is a small helper function that we
wrote to re-use the task of formatting numbers
as currency with a dollar sign and two decimal places.
It is called 3 times in ``showResults`` with
different **arguments**.

</aside>




<aside data-line-number="70">

``showResults`` defines 3 **parameters** which are used
to pass in all of the data needed to show the results
of the tip calculation. Notice that the `console.log` statements
use the **+ operator** to <abbr title="join together">concatenate</abbr>
strings. Because we are joining **string literals** with variables of
type `number`. The ``+`` operator automatically converts the numbers to strings.

</aside>

<aside data-line-number="90">

``main`` is the first function **called** for
this program. It maintains the executive control of the
program, calling other functions in sequence and passing
data between functions. All of the other functions have
been defined, but are waiting to be called.

</aside>
