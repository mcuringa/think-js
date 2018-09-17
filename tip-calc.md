Code Listing 1: The Tip Calculator
----------------------------------

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

[View the "Tip Calculator" repl](examples/tip2.py)

### Case Study: Tip Calculator {.tipCalculator}

<aside data-line-number="1">

Brief header **comments** at the top of the **source file** 
identify basic information about the program and the file.
Comments are messages for programmers who read the **source
code** --- they do not affect the execution of the program.

</aside>

<aside data-line-number="14">

**welcome** is a very simple **function** --- it does not accept
any data in the form of **function paramters** and it does not
**return** any data using a **return statement**. It simply prints out a
message to the console.

</aside>
