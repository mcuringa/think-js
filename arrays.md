Array
=====

A **array** is an ordered collection of values. The values that make up an array
are called its **elements**, or its **items**.

We will use the term `element` or `item` to mean the same thing. Arrays are
similar to strings, which are ordered collections of characters, except that the
elements of an array can be of any type. Arrays and strings --- and other collections
that maintain the order of their items --- are called **sequences** or **lists**.

Array values
------------

There are several ways to create a new array; the simplest is to enclose the
elements in square brackets (``[`` and ``]``):

~~~~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines}
let ps = [10, 20, 30, 40];
let qs = ["spam", "bungee", "swallow"];
let empty = [];
~~~~~~~~~~~~~~~~~~~~~~~

The first array contains four numbers. The second contains an array of three
strings. The third is an **empty array** --- it's waiting for us to add
elements. The elements of an array don't have to be the same type. The following
array contains a string, a number, and (amazingly) another array:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines}
let zs = ["hello", 5, [10, 20]];
~~~~~~~~~~~~~~~~~~~~~~~

An array within another array is said to be **nested**.

We have already seen that we can assign array values to variables or pass arrays
as parameters to functions:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ let vocabulary = ["apple", "cheese", "dog"];
⠕ let numbers = [17, 123];
⠕ let anEmptyList = [];
⠕ console.log(vocabulary, numbers, an_empty_list)
[ 'apple', 'cheese', 'dog' ] [ 17, 123 ] []
~~~~~~~~~~~~~~~~~~~~~~~

Accessing elements
------------------

The syntax for accessing the elements of an array is the same as the syntax for
accessing the characters of a string --- the index operator: ``[]`` (not to
be confused with an empty array). The expression inside the brackets specifies
the index. Remember that the indices start at 0 and can be integers up to
`length - 1`:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ numbers[0];
=> 17
~~~~~~~~~~~~~~~~~~~~~~~

Any expression evaluating to an integer can be used as an index:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ numbers[9-8];
=> 123
⠕ numbers["1"]
=> undefined
~~~~~~~~~~~~~~~~~~~~~~~

If you try to access an element that does not exist, Javascript
returns `undefined`:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ numbers[5];
=> undefined
~~~~~~~~~~~~~~~~~~~~~~~

If you assign a value to an element that does not exist, Javascript will add
the value to the array at that index, and create empty elements in the
intervening indices.

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ numbers[5] = 22;
=> 22
⠕ numbers;
=> [ 17, 123, <3 empty items>, 22 ]
⠕ numbers[5];
=> 22
~~~~~~~~~~~~~~~~~~~~~~~

It is common to use a loop variable as a list index.

~~~~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines}
let horsemen = ["war", "famine", "pestilence", "death"];

for (let i = 0; i < horsemen.length; i++) {
  console.log(horsemen[i]);
}
~~~~~~~~~~~~~~~~~~~~~~~

Each time through the loop, the variable ``i`` is used as an index into the
array, printing the ``i``'th element. This pattern of computation is called a
**array traversal**.

Like strings, Javascript arrays have a `length` property that tells us how
many items are in the array. When we use `i < horsemen.length` as the loop
condition, our `for` loop stops when it accesses the last element of the array.

Array membership
---------------

Javascript arrays have an `includes` method which returns a Boolean
`true` or `false` to indicate membership of an item in an array.

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ let horsemen = ["war", "famine", "pestilence", "death"];
⠕ horsemen.includes("pestilence");
=> true
⠕ horsemen.includes("debauchery");
=> false
⠕ !horsemen.includes("debauchery");
true
~~~~~~~~~~~~~~~~~~~~~~~

Array methods
-------------

The array `concat` method combines two arrays into a new array by
concatenating an array to the end of another array:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ let a = [1, 2, 3];
⠕ let b = [4, 5, 6];
⠕ let c = a.concat(b);
⠕ c
=> [ 1, 2, 3, 4, 5, 6 ]
~~~~~~~~~~~~~~~~~~~~~~~

Notice that `a` and `b` remain unchanged;

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ a
=> [ 1, 2, 3 ]
⠕ b
=> [ 4, 5, 6 ]
~~~~~~~~~~~~~~~~~~~~~~~

 `push` adds elements to the end of an array and returns the new
 length of the array. You can pass more than one argument to `push`
 and it will create a new element at the end of the array for each
 parameter.

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ a
=> [ 1, 2, 3 ]
⠕ a.push(4);
=> 4
⠕ a
[ 1, 2, 3, 4 ]
⠕ a.push(3, 2, 1);
=> 7
⠕ a
[ 1, 2, 3, 4, 3, 2, 1 ]
~~~~~~~~~~~~~~~~~~~~~~~

`pop()` returns the last element in the array and removes that element
from the array. When `pop` is called on an empty array, `undefined` is returned.

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ a = [ 1, 2, 3, 4 ];
⠕ a.pop();
=> 4
⠕ a
[ 1, 2, 3]
~~~~~~~~~~~~~~~~~~~~~~~

`shift` and `unshift` are equivalent to `pop` and `push` except they work
on the beginning of an array. `a.unshift(-1, 0)` puts `-1` in the 0'th element
and `0` in the 1'th element. `shift` returns the 0'th element of the array
and removes it from the array. All other elements are shifted to the left. like
`pop`, `shift` returns `undefined` when called on an empty array.

There are many other useful array methods that you can
[read about in the documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

Array slices
------------

The `slice()` method of an array returns a new sub-array. `slice` is similar to the
`substring()` method of strings.

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ let t = ["a", "b", "c", "d", "e", "f"];
⠕ t.slice(1, 3);
=> [ 'b', 'c' ]
⠕ t.slice(3);
=> [ 'd', 'e', 'f' ]
⠕ t.slice();
[ 'a', 'b', 'c', 'd', 'e', 'f' ]
~~~~~~~~~~~~~~~~~~~~~~~

The `begin` and `end` arguments are optional. If only `begin` is supplied, as
in `t.slice(3);`, `slice` returns all elements from `begin` to the end of the
array. If no arguments are provided (`t.slice()`) a copy of the entire
array is returned.

Arrays are mutable
------------------

Unlike strings, arrays are **mutable**, which means we can change their
elements. Using the index operator on the left side of an assignment, we can
update one of the elements:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ let fruit = ["banana", "apple", "quince"];
⠕ fruit[0] = "pear";
⠕ fruit[2] = "orange";
⠕ fruit
[ 'pear', 'apple', 'orange' ]
~~~~~~~~~~~~~~~~~~~~~~~

The bracket operator applied to an array can appear anywhere in an expression.
When it appears on the left side of an assignment, it changes one of the
elements in the array, so the first element of ``fruit`` has been changed from
``"banana"`` to ``"pear"``, and the last from ``"quince"`` to ``"orange"``. An
assignment to an element of an array is called **item assignment**. Item
assignment does not work for strings:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ let myString = "TEST";
⠕ myString[2] = "X";
=> 'X'
⠕ myString
=> 'TEST'
~~~~~~~~~~~~~~~~~~~~~~~

Javascript just ignores the illegal assignment and we see that `myString`
remains unchanged. This is not the case for arrays:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ let myCharArray = ["T", "E", "S", "T"];
⠕ myCharArray[2] = "X";
⠕ myCharArray
=> [ 'T', 'E', 'X', 'T' ]
~~~~~~~~~~~~~~~~~~~~~~~

With the `splice` method (not to be confused with `slice`), we can update,
insert, or delete multiple array elements with a single function call.

`shift` and `pop` remove single items from the beginning or end of an array.
`splice` is a more flexible (and complicated) method that can return and delete
items from any array index, as well as insert or replace multiple items.
`splice` can operate on more than one element. Here are a few ways to use `splice`.
The syntax for `splice` is `splice(index, numDelete, newItems...)` where
`index` indicates where the deletion or insertion should begin, `numDelete` (optionally)
indicates how many items to remove. The remaining `newItems` can be any
number of arguments to be inserted in the array at `index`.

Delete multiple items from an index:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ let chars = ["a", "b", "c", "d", "e", "f"];
⠕ let removedChars = chars.splice(1, 2);
⠕ removedChars
=> [ 'b', 'c' ]
⠕ chars
=> [ 'a', 'd', 'e', 'f' ]
~~~~~~~~~~~~~~~~~~~~~~~

Because the `numDelete` argument is zero, this inserts items
in the middle of an array:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ let numbers = [10, 20, 30, 40];
⠕ numbers.splice(2, 0, 21, 22);
⠕ numbers
=> [ 10, 20, 21, 22, 30, 40 ]
~~~~~~~~~~~~~~~~~~~~~~~

By passing in the number of items to delete, we can _replace_ multiple
array elements with `splice`:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ numbers = [10, 20, 30, 40];
⠕ numbers.splice(1, 2, 9, 8);
⠕ numbers
=> [ 10, 9, 8, 40 ]
~~~~~~~~~~~~~~~~~~~~~~~

Objects and references
----------------------

After we execute these assignment statements

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
let a = "banana";
let b = "banana";
~~~~~~~~~~~~~~~~~~~~~~~

we know that ``a`` and ``b`` will refer to a string object with the letters
``"banana"``. But we don't know yet whether they point to the *same* string object.

There are two possible ways the Javascript interpreter could arrange its memory:

![](figs/list1.png)

In one case, ``a`` and ``b`` refer to two different objects that have the same
value. In the second case, they refer to the same object.

When we use the equality operator on strings, tells us if they hold the same
value:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ a === b
=> true
~~~~~~~~~~~~~~~~~~~~~~~

We cannot tell if they refere to the same object or not. Since strings are
*immutable*, Javascript can optimize resources by making two names that refer to
the same string value refer to the same object.

This is not the case with arrays:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ let a = [1, 2, 3];
⠕ let b = [1, 2, 3];
⠕ a === b
=> false
~~~~~~~~~~~~~~~~~~~~~~~

The state snapshot here looks like this:

![](figs/mult_references2.png "State snapshot for equal different lists")

``a`` and ``b`` have the same value but do not refer to the same object.

Aliasing
--------

Since variables refer to objects, if we assign one variable to another, both
variables refer to the same object:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ let a = [1, 2, 3];
⠕ let b = a;
⠕ a === b
=> true
~~~~~~~~~~~~~~~~~~~~~~~

In this case, the state snapshot looks like this:

![](figs/mult_references3.png "State snapshot for multiple references (aliases) to a list ")

Because the same array has two different names, ``a`` and ``b``, we say that it
is **aliased**. Changes made with one alias affect the other:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ b[0] = 5
⠕ a
=> [ 5, 2, 3 ]
~~~~~~~~~~~~~~~~~~~~~~~

Although this behavior can be useful, it is sometimes unexpected or
undesirable. In general, it is safer to avoid aliasing when you are working
with mutable objects (i.e. arrays at this point in our textbook, but we'll
meet more mutable objects as we cover classes and objects). Of course, for
immutable objects (i.e. strings), there's no problem --- it is just
not possible to change something and get a surprise when you access an alias
name. That's why Javascript is free to alias strings (and any other immutable
kinds of data) when it sees an opportunity to economize.

Cloning arrays
--------------

If we want to modify an array and also keep a copy of the original, we need to be
able to make a copy of the array itself, not just the reference. This process is
sometimes called **cloning**, to avoid the ambiguity of the word copy.

The easiest way to clone an array is to call the `slice` method with zero arguments:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ let a = [1, 2, 3];
⠕ let b = a.slice();
⠕ b
=> [ 1, 2, 3 ]
⠕ a === b
=> false
~~~~~~~~~~~~~~~~~~~~~~~

Calling `slice` always creates a new array. In this case the slice happens to
consist of the whole array. So now the relationship is like this:

![](figs/mult_references2.png "State snapshot for equal different lists ")

Now we are free to make changes to ``b`` without worrying that we'll inadvertently be
changing ``a``:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ b[0] = 5
⠕ a
[ 1, 2, 3 ]
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Array parameters
----------------

Passing an array as an argument actually passes a **reference** to the array, not a
copy or clone of the array. So parameter passing creates an alias for you: the caller
has one variable referencing the array, and the called function has an alias, but there
is only one underlying array object.

For example, the function below takes an array as an
argument and multiplies each element in the array by 2:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines}
/**
 * Overwrite each element in `t` with double its value
 */
function doubleStuff (t) {
  for (let i = 0; i < t.length; i++) {
    t[i] = t[i] * 2;
  }
}
~~~~~~~~~~~~~~~~~~~~~~~

If we add the following onto our script:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines}
let things = [2, 5, 9];
doubleStuff(things);
console.log(things);
~~~~~~~~~~~~~~~~~~~~~~~

When we run it we'll get:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
[ 4, 10, 18 ]
~~~~~~~~~~~~~~~~~~~~~~~

In the function above, the parameter ``t`` and the variable ``things`` are
aliases for the same object. So changes to `t` or `things` are reflected in
both `t` _and_ `things`.

Pure functions and modifiers
----------------------------

Functions which take arrays as arguments and change them during execution are
called **modifiers** and the changes they make are called **side effects**.

A **pure function** does not produce side effects. It communicates with the
calling program only through parameters, which it does not modify, and a return
value. Here is ``doubleStuff`` written as a pure function:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines}
/**
 * Double the value of each element in array `t`
 * and return a new array with the doubled values
 */
function doubleStuff (t) {
  let tt = [];
  for (let i = 0; i < t.length; i++) {
    tt[i] = t[i] * 2;
  }
  return tt;
}
~~~~~~~~~~~~~~~~~~~~~~~

This version of ``doubleStuff`` does not change its arguments:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ let things = [2, 5, 9];
⠕ let xs = doubleStuff(things);
⠕ things
=> [ 2, 5, 9 ]
⠕ xs
=> [ 4, 10, 18 ]
~~~~~~~~~~~~~~~~~~~~~~~

An early rule we saw for assignment said "first evaluate the right hand side, then
assign the resulting value to the variable". So it is quite safe to assign the function
result to the same variable that was passed to the function:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ let things = [2, 5, 9];
⠕ things = doubleStuff(things);
⠕ things
=> [ 4, 10, 18 ]
~~~~~~~~~~~~~~~~~~~~~~~

<aside id="pure-functions">

**Which style is better?**

Anything that can be done with modifiers can also be done with pure functions.
In fact, some programming languages only allow pure functions. There is some
evidence that programs that use pure functions are faster to develop and less
error-prone than programs that use modifiers. Nevertheless, modifiers are
convenient at times, and in some cases, functional programs are less efficient.

In general, we recommend that you write pure functions whenever it is
reasonable to do so and resort to modifiers only if there is a compelling
advantage. This approach might be called a *functional programming style*.

</aside>


Functions that produce arrays
-----------------------------

The pure version of ``doubleStuff`` above made use of an
important **pattern** for your toolbox. Whenever you need to
write a function that creates and returns an array, the pattern is
usually:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
initialize a result variable to be an empty array
loop
   create a new element
   append it to result
return the result
~~~~~~~~~~~~~~~~~~~~~~~

Let us show another use of this pattern. Assume you already have a function
``isPrime(x)`` that can test if x is prime. Write a function
to return an array of all prime numbers less than n:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines}
/**
 * Return an array of all prime numbers less than n.
 */
function primesLessThanN(n) {
   let result = [];
   for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
       result.push(i);
     }
   }
   return result;
 }
 ~~~~~~~~~~~~~~~~~~~~~~~


Strings and arrays
------------------

Two of the most useful methods on strings involve conversion to
and from arrays of substrings.  
The ``split`` method (which we've already seen)
breaks a string into an array of words. We have been using the
simple regular expression `/\s/` to split strings at the
whitespace pattern.

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ let song = "The rain in Spain...";
⠕ let words = song.split(/\s/);
⠕ words
=> [ 'The', 'rain', 'in', 'Spain...' ]
~~~~~~~~~~~~~~~~~~~~~~~

In this example the whitespace regex is the **delimiter** --- the toke used to
specify which string to use as the boundary marker between substrings. The
following example uses the string ``ai`` as the delimiter:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ song.split("ai");
=> [ 'The r', 'n in Sp', 'n...' ]
~~~~~~~~~~~~~~~~~~~~~~~

Notice that the delimiter doesn't appear in the result.

The inverse of the ``split`` method is ``join``.  You choose a
desired **separator** string, (often called the _glue_)
and join the array with the glue between each of the elements:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ let glue = ";";
⠕ let s = words.join(glue);
⠕ s
=> 'The;rain;in;Spain...'
~~~~~~~~~~~~~~~~~~~~~~~

The array that you glue together (``words`` in this example) is not modified. Also, as these
next examples show, you can use empty glue or multi-character strings as glue:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ words.join(" --- ");
=> 'The --- rain --- in --- Spain...'
⠕ words.join("");
=> 'TheraininSpain...'
~~~~~~~~~~~~~~~~~~~~~~~

Counting words
---------------

Using the`split` method of strings, we can write an elegant solution to
counting words in a text by looping through the array of words. In  the code
below we look at section [Martin Luther King Jr's 1963 "I have a dream ..." speech]
(https://www.archives.gov/files/press/exhibits/dream-speech.pdf)
in order to count the number of times the word _dream_ occurs.

~~~~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines}
let text = `I say to you today, my friends, so even
though we face the difficulties of today and tomorrow,
I still have a dream. It is a dream deeply rooted in
the American dream. I have a dream that one day this
nation will rise up and live out the true meaning of
its creed: “We hold these truths to be self-evident:
that all men are created equal.” I have a dream that
one day on the red hills of Georgia the sons of former
and the sons of former slave owners will be able to
sit down together at the table of brotherhood.`;

let words = text.split(/\s/);

let counter = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i].includes("dream")) {
    counter++;
  }
}

console.log(`The speech has ${words.length} words.
We found "dream" ${counter} times.`);
~~~~~~~~~~~~~~~~~~~~~~~

**code walk through**

<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/CySJma9dBJU?rel=0" allowfullscreen></iframe>
</div>

Play with the code live at <https://repl.it/@mcuringa/DreamWordCount>

Nested arrays
-------------

A nested array is an array that appears as an element in another array. In this
array, the element with index 3 is a nested array:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines}
⠕ let nested = ["hello", 2.0, 5, [10, 20]];
~~~~~~~~~~~~~~~~~~~~~~~

If we output the element at index 3, we get:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ console.log(nested[3]);
=> [10, 20]
~~~~~~~~~~~~~~~~~~~~~~~

To extract an element from the nested array, we can proceed in two steps:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ elem = nested[3];
⠕ elem[0]
=> 10
~~~~~~~~~~~~~~~~~~~~~~~

Or we can combine them:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ nested[3][1]
=> 20
~~~~~~~~~~~~~~~~~~~~~~~

Bracket operators evaluate from left to right, so this expression gets the
3'th element of ``nested`` and extracts the 1'th element from it.

Matrices
--------

Nested arrays are often used to represent matrices. For example, the matrix:

![](figs/matrix2.png)

might be represented as:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ let mx = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
~~~~~~~~~~~~~~~~~~~~~~~

``mx`` is an array with three elements, where each element is a row of the
matrix. We can select an entire row from the matrix in the usual way:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ mx[1]
=> [4, 5, 6]
~~~~~~~~~~~~~~~~~~~~~~~

Or we can extract a single element from the matrix using the double-index form:

~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ mx[1][2]
=> 6
~~~~~~~~~~~~~~~~~~~~~~~

The first index selects the row, and the second index selects the column.
Although this way of representing matrices is common, it is not the only
possibility.

Glossary
--------

aliases
  ~ Multiple variables that contain references to the same object.

array
  ~ A collection of values, each in a fixed position within the array.

clone
  ~ To create a new object that has the same value as an existing object.
  Copying a reference to an object creates an alias but doesn't clone the
  object.

delimiter
  ~ A character or string (sometimes called a token) used to indicate where a string should be split.

element
  ~ One of the values in an array (or other sequence). The bracket operator
  selects elements of an array.  Also called *item*.

immutable data value
  ~ A data value which cannot be modified.

index
  ~ An integer value that indicates the position of an item in an array.
  Indexes start from 0.

item
  ~ See *element*.

array traversal
  ~ The sequential accessing of each element in an array.

modifier
  ~ A function which changes its arguments inside the function body. Only
  mutable types can be changed by modifiers.

mutable data value
  ~ A data value which can be modified. The types of all mutable values
  are compound types. Arrays are mutable; strings are not.

nested array
  ~ An array which is an element of another array.

object
  ~ A thing to which a variable can refer.

pattern
  ~ A sequence of statements, or a style of coding something that has
  general applicability in a number of different situations. Part of
  becoming a mature Computer Scientist is to learn and establish the
  patterns and algorithms that form your toolkit. Patterns often
  correspond to your "mental chunking".

pure function
  ~ A function which has no side effects. Pure functions only make changes
  to the calling program through their return values.

sequence
  ~ Any of the data types that consist of an ordered collection of elements, with
  each element identified by an index.

side effect
  ~ A change in the state of a program made by calling a function. Side
  effects can only be produced by modifiers.

step size
  ~ The interval between successive elements of a linear sequence. The
  third (and optional argument) to the ``range`` function is called the
  step size.  If not specified, it defaults to 1.

Array Examples
--------------

### Example 1: oddCount

Write a function to count how many odd numbers are in an array.

<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/6OXpp8sV7rs?rel=0" allowfullscreen></iframe>
</div>

### Example 2: sumEvens

Sum up all the even numbers in an array.

<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/PW0don64C0Y?rel=0" allowfullscreen></iframe>
</div>


### Example 3: findNegatives

Return an array with all of the negative numbers in an array. Do not modify
the original array (i.e. write a pure function).

<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Ik3ruxUXcZY?rel=0" allowfullscreen></iframe>
</div>

### Example 4: sumUpToEven

Sum all the elements in an array up to but not including the first
even number. (What if there is no even number?)

<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/X9zaB18o2-g?rel=0" allowfullscreen></iframe>
</div>

### Example 5: olympicScores

Write a function that takes an array of numbers and returns the an
array of numbers with the highest and lowest scores removed. Do not
modify the original array parameter.

<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/a_2M9uZ37L0?rel=0" allowfullscreen></iframe>
</div>

**Check out the live code here: <https://repl.it/@mcuringa/Array-Examples>**

Array Exercises
---------------

1. Write a function called ``filterWord`` which takes an array of strings
   and a ``word`` to filter as arguments and returns a new array with
   all instances of ``word`` removed. This function should not modify
   the original array.
2. Count how many words in an array have length 5 (i.e. are 5 characters long).
3. Write a function that finds and returns the average of an array of numbers.
4. Write a function called ``removeDuplicates`` that takes an array and returns a new
   array with only the unique elements from the original. _Hint:_ they don’t have to
   be in the same order. _Hint hint:_ remember the `includes` method of array.
5. Write a function called ``combine`` that takes 2 arrays of strings
   as parameters and returns a new array of strings which concatenates
   the items from the first array with the item from the second.
   If the array are not equal in length, the new array will end
   with the item from the longer array. For example:

   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
   ⠕ let a = ["cat", "dog", "bird"];
   ⠕ let b = ["lion", "wolf", "eagle"];
   ⠕ let c = combine(a, b);
   ⠕ console.log(c);
   ["catlion", "dogwolf", "birdeagle"]
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

6. Write a function called ``isSorted`` which takes an array (of number)
   as a parameter. It should return ``true`` if the array is already
   sorted (ascending order) or ``false`` if the array is not sorted.

   You can use this function to test your code:

   ~~~~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines}
   function test_isSorted() {

     let n1 = [4, 77, 2, 4567, 12];
     console.assert(!isSorted(n1), "n1 is not sorted, isSorted(n1) failed");
     let n2 = [1, 2, 3, 4, 5];
     console.assert(isSorted(n2), "n2 is not sorted, isSorted(n2) failed");
   }
   test_isSorted();
   ~~~~~~~~~~~~~~~~~~~~~~~

Array Lab
---------

**Sentiment Analysis** is a technique in computer science text analysis which
tries to determine the sentiment or _mood_ expressed in a text. Some "sentiments"
are easy to detect. Given the text "I love dogs so much!", we can confidently
say it is **positive**. "I hate you and never want to talk to you again" is
clearly **negative**. "The car is silver." would express a **neutral** sentiment.

Unfortunately, language is often much trickier to classify. Consider,
"I have too much homework" (negative) and "I don't have too much homework" (positive).

For this lab, you are going to write the best sentiment function that you can.
It won't handle all cases, but try to handle as many as you can think of. You
should use the string and array functions that we have been working with in
the last two chapters.

Your function has a single string parameter, and returns `1` for
a positive sentiment, `-1` for a negative sentiment, and `0` for
a neutral sentiments.

Use this repl to get started: <https://repl.it/@mcuringa/Sentiment>

You can read the [Wikipedia article on sentiment analysis](https://en.wikipedia.org/wiki/Sentiment_analysis)
to get a better sense of this lab.
