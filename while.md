While loops
============

The `while` statement
-----------------------

Here is a fragment of code that demonstrates the use of the `while` statement:

~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines}
/**
 * Return the sum of 1+2+3 ... n
 */
function sumTo(n) {
  let total = 0;
  let v = 1;
  while (v <= n) {
    total += v;
    v++;
  }
  return total;
}

console.log("sumTo(4) => 10", sumTo(4) === 10);
console.log("sumTo(1000) =>500500 ", sumTo(1000) === 500500);
~~~~~~~~~~~~~~~~~~~~

You can almost read the `while` statement as if it were English. It means, while
`v` is less than or equal to `n`, continue executing the body of the loop.
Within the body, each time, increment `v`. When `v` passes `n`, return your
accumulated sum.

More formally, here is precise flow of execution for a `while` statement:

* Evaluate the condition at line 4, yielding a value which is either `false` or `true`.
* If the value is `false`, exit the `while` statement and continue
  execution at the next statement (line 8 in this case).
* If the value is `true`, execute each of the statements in the body (lines 6 and 7) and
  then go back to the `while` statement at line 5.

The body consists of all of the statements indented below the `while` keyword. 

Notice that if the loop condition is `false` the first time we test it, the
statements in the body of the loop are never executed.

The body of the loop should change the value of one or more variables so that
eventually the condition becomes `false` and the loop terminates. Otherwise the
loop will repeat forever, which is called an **infinite loop**. An endless
source of amusement for computer scientists is the observation that the
directions on shampoo, "lather, rinse, repeat", are an infinite loop.

In the case here, we can prove that the loop terminates because we
know that the value of `n` is finite, and we can see that the value of `v`
increments each time through the loop, so eventually it will have to exceed `n`. In
other cases, it is not so easy, even impossible in some cases,
to tell if the loop will ever terminate. 

What you will notice here is that the `while` loop is more work for you — the
programmer — than the equivalent `for` loop. When using a `while` loop you have
to manage the loop variable yourself: give it an initial value, test for
completion, and then make sure you change something in the body so that the loop
terminates. By comparison, here is an equivalent function that uses `for`
instead:

~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines}
// Return the sum of 1+2+3 ... n
function sumTo(n) {
  let ss  = 0;
  for (let v = 1; v <= n; v++) {
    ss = ss + v;
  }
  return ss;
}
~~~~~~~~~~~~~~~~~~~~

So why have two kinds of loop if `for` looks easier?  This next
example shows a case where we need the extra power that we get from
the `while` loop.


The Collatz 3n + 1 sequence
---------------------------

Let's look at a simple sequence that has fascinated and foxed
mathematicians for many years. They still cannot answer even quite
simple questions about this. 

The "computational rule" for creating the sequence is to start from
some given `n`, and to generate the next term of the sequence from
`n`, either by halving `n`, (whenever `n` is even), or else by
multiplying it by three and adding 1. The sequence terminates when
`n` reaches 1.

This Javascript function captures that algorithm:

~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines}
// Print the 3n+1 sequence from n,
// terminating when it reaches 1.
function seq3np1 (n) {

  let sequence = "";
  while (n !== 1) {
    sequence += n + ", ";
    if (n % 2 === 0) {    // n is even
      n = Math.floor(n/2);
    }
    else {               // n is odd
      n = n * 3 + 1;
    }

  }
  console.log(sequence + 1 + ".");
}
~~~~~~~~~~~~~~~~~~~~
<caption>See [Collatz repl](https://repl.it/@mcuringa/Collatz)</caption>

First, note that we use the accumulator pattern that we introduced in the
last chapter to concatenate our output to the (initially empty) string,
`sequence`. Not until we complete the `while` loop do we print `sequence`
to the console.

The condition for continuing with this loop is `n !== 1`, so the loop will
continue running until it reaches its termination condition, (i.e. `n === 1`).

Each time through the loop, the program joins the value of `n` to `sequence` and
then checks whether it is even or odd. If it is even, the value of `n` is
divided by 2 (and then rounded down using `Math.floor`). If it is odd, the value is
replaced by `n * 3 + 1`. Because of the logic for how the loop variable (`n`) changes
in each iteration, this algorithm cannot be easily implemented with a `for` loop,
because the `for` loop finalization statement cannot handle the boolean logic
of deciding how to modify `n`. In this case, `while` is more suitable.

Here are some examples:

~~~~~~~~~~~~~~~{.javascript}
⠕ seq3np1(3)
3, 10, 5, 16, 8, 4, 2, 1.
⠕ seq3np1(19)
19, 58, 29, 88, 44, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1.
⠕ seq3np1(21)
21, 64, 32, 16, 8, 4, 2, 1.
⠕ seq3np1(16)
16, 8, 4, 2, 1.
~~~~~~~~~~~~~~~

Since `n` sometimes increases and sometimes decreases, there is no obvious
proof that `n` will ever reach 1, or that the program terminates. For some
particular values of `n`, we can prove termination. For example, if the
starting value is a power of two, then the value of `n` will be even each
time through the loop until it reaches 1. The previous example ends with such a
sequence, starting with 16.

See if you can find a small starting number that needs more than a
hundred steps before it terminates.

Particular values aside, the interesting question was first posed by a German
mathematician called Lothar Collatz: the _Collatz conjecture_ (also known as
the *3n + 1 conjecture*), is that this sequence terminates for *all* positive
values of `n`. So far, no one has been able to prove it *or* disprove it!  
(A conjecture is a statement that might be true, but nobody knows for sure.)

Think carefully about what would be needed for a proof or disproof of the conjecture
_"All positive integers will eventually converge to 1 using the Collatz rules"_. 
With fast computers we have been able to test every integer up to very
large values, and so far, they have all eventually ended up at 1. 
But who knows? Perhaps there is some as-yet untested number which does not reduce to 1.

You'll notice that if you don't stop when you reach 1, the sequence gets into
its own cyclic loop:  1, 4, 2, 1, 4, 2, 1, 4 ... So one possibility is that there might
be other cycles that we just haven't found yet. 

[Wikipedia has an informative article about the Collatz
conjecture.](https://en.wikipedia.org/wiki/Collatz_conjecture) The sequence
also goes under other names (Hailstone sequence, Wonderous numbers, etc.),
and you'll find out just how many integers have already been tested by
computer, and found to converge!

<aside id="for-or-while">

**Choosing between `for` and `while`**

Use a `for` loop if you know, before you start looping,
the maximum number of times that you'll need to execute the body. 
For example, if you're traversing a list of elements, you know that the maximum
number of loop iterations you can possibly need is "all the elements in the list".
Or if you need to print the 12 times table, we know right away how many times
the loop will need to run.

So any problem like "iterate this weather model for 1000 cycles", or "search this
list of words", "find all prime numbers up to 10000" suggest that a `for` loop is best.

By contrast, if you are required to repeat some computation until some condition is
met, and you cannot calculate in advance when (or if) this will happen,
as we did in this 3n + 1 problem, you'll need a `while` loop.

We call the first case **definite iteration** — we know ahead of time some definite bounds for
what is needed. The latter case is called **indefinite iteration** — we're not sure
how many iterations we'll need — we cannot even establish an upper bound!

</aside>


Tracing a program
-----------------

To write effective computer programs, and to build a good conceptual
model of program execution, a programmer needs to develop the ability
to **trace** the execution of a computer program. Tracing involves becoming the
computer and following the flow of execution through a sample program run,
recording the state of all variables and any output the program generates after
each instruction is executed.

To understand this process, let's trace the call to `seq3np1(3)` from the
previous section. At the start of the trace, we have a variable, `n`
(the parameter), with an initial value of 3. Since 3 is not equal to 1, the
`while` loop body is executed. 3 is printed and `3 % 2 === 0` is evaluated.
Since it evaluates to `false`, the `else` branch is executed and
`3 * 3 + 1` is evaluated and assigned to `n`.

To keep track of all this as you hand trace a program, make a column heading on
a piece of paper for each variable created as the program runs and another one
for output. Our trace so far would look something like this:

~~~~~~~~~~~~~~~~~~~~
n         output printed so far
--        ---------------------
3         3,
10
~~~~~~~~~~~~~~~~~~~~

Since `10 !== 1` evaluates to `true`, the loop body is again executed,
and 10 is printed. `10 % 2 === 0` is true, so the `if` branch is
executed and `n` becomes 5. By the end of the trace we have:

~~~~~~~~~~~~~~~~~~~~
n         output printed so far
--        ---------------------
3         3,
10        3, 10,
5         3, 10, 5,
16        3, 10, 5, 16,
8         3, 10, 5, 16, 8,
4         3, 10, 5, 16, 8, 4,
2         3, 10, 5, 16, 8, 4, 2,
1         3, 10, 5, 16, 8, 4, 2, 1.
~~~~~~~~~~~~~~~~~~~~

Tracing can be a bit tedious and error prone (that's why we get computers to
do this stuff in the first place!), but it is an essential skill for a
programmer to have. From this trace we can learn a lot about the way our code
works. We can observe that as soon as `n` becomes a power of 2, for example,
the program will require ${\log_2}(n)$ executions of the loop body to
complete. We can also see that we don't reach the final 1
within the body of the loop, which is why we concatenate `1` after our `while`
loop terminates.

In this function, we just store all of the values of the Collatz sequence in a
single string. As we learn a bit more Javascript, we'll be able to show you
how to generate a list of values to hold the sequence, rather concatenating
them to a string.

Counting digits
---------------

The following function counts the number of decimal digits in a positive
integer:

~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines}
function numDigits(n) {
  let count = 0;
  while (n != 0) {
    count++;
    n = Math.floor(n / 10);
  }
  return count;
}
~~~~~~~~~~~~~~~~~~~~

A call to `console.log(numDigits(710))` will print `3`. Trace the execution of
this function call (using `console.log` or just a piece of paper) to convince
yourself that it works.

This function demonstrates an important pattern of computation called a
**counter**. The variable `count` is initialized to 0 and then incremented
each time the loop body is executed. When the loop exits, `count` contains the
result — the total number of times the loop body was executed, which is the
same as the number of digits.

If we wanted to only count digits that are either 0 or 5, adding a conditional
before incrementing the counter will do the trick:

~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines}
function numZeroAndNumFiveDigits(n) {
  let count = 0;
  while( n > 0) {
    let digit = n % 10;
    if (digit === 0 || digit === 5) {
      count = count + 1
    }
    n = Math.floor(n / 10);
  }
  return count;
}
~~~~~~~~~~~~~~~~~~~~

Confirm that `numZeroAndNumFiveDigits(1055030250) === 7`.

Notice, however, that `numDigits(0) === 0`. Explain why. Do you
think this is a bug in the code, or a bug in the specifications, or our
expectations, or the tests?

Newton's method for finding square roots
----------------------------------------

Loops are often used in programs that compute numerical results by starting
with an approximate answer and iteratively improving it.

For example, before we had calculators or computers, people needed to
calculate square roots manually. Newton used a particularly good method
(there is some evidence that this method was known many years before).
Suppose that you want to know the square root of `n`. If you start  with
almost any approximation, you can compute a better approximation (closer to
the actual answer) with the following formula:

~~~~~~~~~~~~~~~~~~~~{.bash}
better = (approx + n/approx)/2
~~~~~~~~~~~~~~~~~~~~

Repeat this calculation a few times using your calculator. Can you see why
each iteration brings your estimate a little closer?  One of the amazing
properties of this particular algorithm is how quickly it converges to an
accurate answer — a great advantage for doing it manually.

By using a loop and repeating this formula until the better approximation gets
close enough to the previous one, we can write a function for computing the
square root. (In fact, this is how your calculator finds square roots — it may
have a slightly different formula and method, but it is also based on
repeatedly improving its guesses.)

This is an example of an `indefinite` iteration problem: we cannot predict in
advance how many times we'll want to improve our guess — we just want to keep
getting closer and closer. Our stopping condition for the loop will be when
our old guess and our improved guess are "close enough" to each other.

Ideally, we'd like the old and new guess to be exactly equal to each other
when we stop. But exact equality is a tricky notion in computer arithmetic
when real numbers are involved. Because real numbers are not represented
absolutely accurately (after all, a number like pi or the square root of two
has an infinite number of decimal places because it is irrational), we need to
formulate the stopping test for the loop by asking "is `a` close enough to
`b`"? This stopping condition can be coded like this:

~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines}
if (Math.abs(a-b) < 0.001) {  // Make this smaller for better accuracy
  break
}
~~~~~~~~~~~~~~~~~~~~
Notice that we take the absolute value of the difference between `a` and `b`.

~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines}
function sqrt(n) {
  let approx = n/2;   // Start with some or other guess at the answer
  let better = (approx + n/approx)/2;
  while (Math.abs(approx - better) > .001) {
    approx = better;
    better = (approx + n/approx)/2.0;
  }
  return better;
}

// Test cases
console.log(sqrt(25));
console.log(sqrt(49));
console.log(sqrt(81));
~~~~~~~~~~~~~~~~~~~~
<caption>See [Newton Square Root repl](https://repl.it/@mcuringa/Newton-Sqare-Root)</caption>

The output is:

~~~~~~~~~~~~~~~~~~~~~~~
5.000000000016778
7
9.000000000004924
~~~~~~~~~~~~~~~~~~~~~~~

See if you can improve the approximations by changing the stopping condition.
Also, step through the algorithm (perhaps by hand, using your calculator or by
adding a `count` variable to the loop) to see how many  iterations were needed
before it achieved this level of accuracy for `sqrt(25)`.

Algorithms
----------------------

Newton's method is an example of an **algorithm**: it is a mechanical process
for solving a category of problems (in this case, computing square roots).

Some kinds of knowledge are not algorithmic. For example, learning dates from
history or your multiplication tables involves memorization of specific
solutions.

But the techniques you learned for addition with carrying, subtraction with
borrowing, and long division are all algorithms. Or if you are an avid Sudoku
puzzle solver, you might have some specific set of steps that you always
follow.

One of the characteristics of algorithms is that they do not require any
intelligence to carry out. They are mechanical processes in which each step
follows from the last according to a simple set of rules. And they're
designed to solve a  general class or category of problems, not just a single
problem.

Understanding that hard problems can be solved by step-by-step algorithmic
processes (and having technology to execute these algorithms for us)  is one
of the major breakthroughs that has had enormous benefits. So while  the
execution of the algorithm may be boring and may require no intelligence,
algorithmic or computational  thinking — i.e. using algorithms and automation
as the basis for approaching problems —  is rapidly transforming our society.
Some claim that this shift towards algorithmic thinking and processes is going
to have even more impact on our society than the  invention of the printing
press.  And the process of designing algorithms is interesting,
intellectually challenging, and a central part of what we call programming.

Some of the things that people do naturally, without difficulty or conscious
thought, are the hardest to express algorithmically. Understanding natural
language is a good example. We all do it, but so far no one has been able to
explain *how* we do it, at least not in the form of a step-by-step mechanical
algorithm.

While Loop Exercises
--------------------

Some of these exercises work best with `while` loops, while others can be
solved more easily with `for` loops. Some of them will work better if you
write more than one function for the solution.

The most straightforward applications of loops, given what we have learned
so far, is working with numbers. Please review some basic terms and
concepts that will help you with these exercises. 

A **prime number** is a whole number greater than 1 that can only be evenly
divided by 1 and itself. **Factors** are number that multiply together produce
a number. 2 and 3 are factors of 6 because $2 x 3=6$. Is the result of **multiple**
multiplying a number. _18 is a multiple of 3 because $6 x 3 = 18$_.

The site _Math is Fun_ [offers a straightforward definition of multiples and
factors](https://www.mathsisfun.com/numbers/factors-multiples.html) with links
to other pages relevant to these problems.

**[You can get started by forking this repl with the function definitions](https://repl.it/@mcuringa/While-Loop-Exercises)**


1. **Sum range**

   Write a function `sumRange(start, end)` that sums (adds up) all of the
   numbers between `start` and `end`, including `start` and `end`. Return the
   sum (a number).

2. **Square Root Count**
   
   Revise the code above for Newton's method for calculating square roots.
   Instead of returning the square root, it should return the number of
   iterations required to find the square root.

3. **Sum of odds**

   `sumOfOdds(start, end)` calculates and returns the sum of all of the _odd_
   numbers in the range `start`..`end`. It includes `start` and `end` if they
   are odd numbers.

4. **Sum of Squares**
   
   Write a function that calculates and returns the sum of the squares of
   numbers in a range: `sumOfSquare(start, end)`. The range includes `start`
   and `end`.

5. **Greatest factor**

   Write a function `greatestFactor(start, end, n)` that returns the greatest
   (highest) factor of `n` in the range of numbers between `start` and `end`
   (including end).

- - - - -

6. **Greatest Common Factor**

   Write a function `gcm(a, b)` that returns the greatest (highest number)
   that is a factor of both `a` and `b`.


7. **Factorials**
   
   Write a function `fact(n)` which returns the factorial of `n` (_n!_). The
   **factorial** of a number is that number multiplied by all of the numbers
   between itself and 1, so the factorial of 4 is $4 x 3 x 2 x 1 = 24$. In
   Javascript, we'd say `fact(4) === 24`.

8. **[Fibonacci Sequence](https://www.mathsisfun.com/numbers/fibonacci-sequence.html)**

   Each term in the Fibonacci Sequence is calculated by adding the two
   previous numbers in the sequence together. The first two terms can by 0,
   and 1, so the next term is 1. The sequence begins 0, 1, 1, 2, 3, 5, 8, 13.
   Write a function `fib(n)` which returns the `n`th number in the sequence.
   So, `fib(0) === 0`, `fib(3) === 5` and so on.

9. **[Armstrong Numbers](https://en.wikipedia.org/wiki/Narcissistic_number)**

   An Armstrong Number is a number where the sum of the digits raised to the
   number of digits in the number, equal the number itself. 153 is an
   Armstrong Number. It has 3 digits, so $1^3 + 5^3 + 3^3 = 1 + 125 + 27 =
   153$ Write a function `isArmstrong(n)` that returns `true` if `n` is an
   Armstrong Number, or `false` if it isn't.


   




