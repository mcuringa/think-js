Objects & Maps
==============

So far we have looked at sequential data types --- strings and arrays ---
which use integers as indices to access  the values they contain.

**Maps** are yet another kind of compound type. It is conventional to use
Objects as the **mapping type** in Javascript, as we have seen in the
_School Data_ case study. Javascript also offers a built-in [Map data type]
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
that we will investigate at the end of this chapter.

Mapped data types map **keys** to **values**, which can be any type
(heterogeneous), just like the elements of an array. Sometimes maps are called
_associative arrays_ since they associate a key with a value. When using
objects as maps (as we will for most of this chapter), _keys_ should be strings.
The ``Map`` object in Javascript allows keys to be of any type.

As an example, we will create a map to translate English words into
Spanish. For this map, the keys are strings.

One way to create a map is to start with the empty object and add
**key:value pairs**. The empty object is denoted by ``{}``:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ let eng2sp = {};
⠕ eng2sp["one"] = "uno";
⠕ eng2sp["two"] = "dos";
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The first assignment creates a map named ``eng2sp``; the other
assignments add new key:value pairs to the map. We can print the current
value of the map in the usual way:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ console.log(eng2sp);
{ one: 'uno', two: 'dos' }
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The key:value pairs of the map are separated by commas. Each pair
contains a key and a value separated by a colon.

<aside id="hashing">

**Hashing**

The order of the pairs may not be what was expected. Javascript  object don't
guarantee the that keys are returned in the same order they're inserted
(``Maps``'s do, however). Javascript uses complex algorithms, designed for very
fast access, to determine where the key:value pairs are stored in a map. For our
purposes we can think of this ordering as unpredictable.

You also might wonder why we use maps at all when the same
concept of mapping a key to a value could be implemented using an array
of arrays with key:value pairs:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ let eng2spArray = [];
⠕ eng2sp[0] = ["one", "uno"];
⠕ eng2sp[1] = ["two", "dos"];
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this example, the zeroeth element of the nested arrays contains the key
and the first element contains the value. We could retrieve the key:value
pair by iterating through the array and searching for a key.

Maps provide very fast lookup by keys by implementing a
technique called hashing, which allows us to access a value very
quickly. By contrast, the array of arrays implementation above is slow. If
we wanted to find a value associated with a key, we would have to
iterate over every element, checking the 0th element. What if the key
wasn't even in the list? We would have to get to the end of it to
find out.

</aside>

Another way to create a map is to provide a list of key:value pairs
using the same syntax as the previous output:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ let eng2sp = {"one": "uno", "two": "dos", "three": "tres"};
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

It doesn't matter what order we write the pairs. The values in a map are
accessed with keys, not with indices, so there is no need to care about
ordering.

Here is how we use a key to look up the corresponding value:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ console.log(eng2sp["two"]);
dos
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The key ``"two"`` yields the value ``"dos"``.

Arrays and strings have been called *sequences*, because their items
occur in order. The map is the first compound type that we've
seen that is not a sequence, so we can't index or slice a map.

Map operations
--------------

The ``delete`` statement removes a key:value pair from a map. For example,
the following map contains the names of various fruits and the number of
each fruit in stock:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ let inventory = {"apples": 430, "bananas": 312, "oranges": 525, "pears": 217};   
⠕ console.log(inventory);
{ apples: 430, bananas: 312, oranges: 525, pears: 217 }
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If someone buys all of the pears, we can remove the entry from the map:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ delete inventory["pears"];
⠕ console.log(inventory);
{ apples: 430, bananas: 312, oranges: 525 }
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Or if we're expecting more pears soon, we might just change the value
associated with pears:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ inventory["pears"] = 0;
⠕ console.log(inventory);
{ apples: 430, bananas: 312, oranges: 525, pears: 0 }
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A new shipment of bananas arriving could be handled like this:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ inventory["bananas"] += 200;
⠕ console.log(inventory);
inventory["bananas"] += 200
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Object utility functions
------------------------

The built in `Object` library contains many useful functions
for working with objects as map datatypes.

We can use ``Object.keys()`` to return an array of all of the keys
in a map. Using the keys, we can _iterate_ through the keys
and values in our map.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines}
let eng2sp = {"one": "uno", "two": "dos", "three": "tres"};
let keys = Object.keys(eng2sp);
for (let i = 0; i < keys.length; i++) {
  let k = keys[i];
  console.log("Got key", k, "which maps to value", eng2sp[k]);
}
console.log(keys);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This produces this output:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
Got key one which maps to value uno
Got key two which maps to value dos
Got key three which maps to value tres
[ 'one', 'two', 'three' ]
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

It is so common to iterate over the keys in a map that
Javascript provides a special syntax for this loop.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines}
for (let k in eng2sp) {
  console.log("Got key", k);
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The ``Object.values()`` function is similar to `keys()`; it returns an array
containing all of the map's objects:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ Object.values(eng2sp);
=> [ 'uno', 'dos', 'tres' ]
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The ``Object.entries()`` function returns an array of
key:value pair arrays.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ Object.entries(eng2sp);
[ [ 'one', 'uno' ], [ 'two', 'dos' ], [ 'three', 'tres' ] ]
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Combining `Object.entries()` with a Javascript syntax for
[destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment),
we can easily iterate over the keys and values of a map.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines}
for (let [k, v] of Object.entries(eng2sp)) {
  console.log(k, v);
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This produces:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
one uno
two dos
three tres
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This simple example introduces two new Javascript structures. **Destructuring**
takes the values of an array on the right hand of the assignment operator
and assigns them to multiple individual variables on the left hand side
of the operation. `let [a, b] = [1, 2]` creates two new  variables, `a` and `b`
with the values `1` and `2` respectively.

We also use the special **for...of** syntax for this loop. This is a compact
form of our usual array iteration loop, however we don't use a loop index. Other
than iterating through key:value pairs of maps, we will use the standard for
loop for array iteration.
[You can read more about for...of in the docs.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

If we try to access a key that isn't in our map, Javascript yields the special
`undefined` value.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ eng2sp["one"]
'uno'
⠕ "six" in eng2sp
undefined
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Later in the chapter we will see some examples where we use this technique
to determine if we should update an existing entry in a map or create a new
entry.

Aliasing and copying
--------------------

As in the case of arrays, because maps are mutable, we need
to be aware of aliasing. Whenever two variables refer to the same
object, changes to one affect the other.

If we want to modify a map and keep a copy of the original, use the
``copy`` method. For example, ``opposites`` is a map that contains pairs
of opposites:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ let opposites = {"up": "down", "right": "wrong", "yes": "no"};
⠕ let alias = opposites;
⠕ let copy = Object.assign(opposites);  // a shallow copy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

``alias`` and ``opposites`` refer to the same object; ``copy`` refers to a
fresh copy of the same map. If we modify ``alias``, ``opposites`` is
also changed:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ alias["right"] = "left";
⠕ opposites["right"];
'left'
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If we modify ``copy``, ``opposites`` is unchanged:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
⠕ copy["right"] = "privilege";
⠕ opposites["right"];
'left'
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Counting letters
----------------

In the exercises in in the Strings chapter, we wrote a function that
counted the number of occurrences of vowels in a string. A more
general version of this problem is to form a frequency table of the
letters in the string, that is, how many times each letter appears.

Such a frequency table might be useful for compressing a text file.
Because different letters appear with different frequencies, we can
compress a file by using shorter codes for common letters and longer
codes for letters that appear less frequently.

Maps provide an elegant way to generate a frequency table:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines}
let letterCounts = {};
let word = "Mississippi";
word = word.toLowerCase();
for(let i = 0; i < word.length; i++) {
  let letter = word[i];
  if(letterCounts[letter]) {
    letterCounts[letter]++;
  }
  else {
    letterCounts[letter] = 1;
  }
}
console.log(letterCounts);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Outputs:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript}
{ M: 1, i: 4, s: 4, p: 2 }
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We start with an empty map. For each letter in the string, we find the
current count (possibly zero) and increment it. At the end, the map
contains pairs of letters and their frequencies. We use a Boolean `if`/`else`
to determine if the key exists in our map. _If the key exists_ we increment
the count, _else_ we assign an initial value of 1 to that key. Note that we
call `toLowerCase()` on our string because keys, as you should expect, are
_case-sensitive_.

It might be more appealing to display the frequency table in alphabetical order. We
can do that with the ``Object.keys()`` function in the Object library
and then calling ``sort()`` on our array of keys. We can add this code
to our example above in order to print out the frequency map of letters
in alphabetical order.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines startFrom="15"}
let keys = Object.keys(letterCounts);
keys.sort();
for(let i = 0; i < keys.length; i++) {
  let letter = keys[i];
  console.log(`${letter}: ${letterCounts[letter]}`);
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

See the interactive example online at
<https://repl.it/@mcuringa/MapLetterFrequency>.

Glossary
--------

map
  ~ A collection of key:value pairs that maps from keys to values. The keys
    should be a string, and the associated value can be of any type.

immutable data value
  ~ A data value which cannot be modified. Assignments to elements or
    slices (sub-parts) of immutable values cause a runtime error.

key
  ~ A data item that is *mapped to* a value in a map. Keys are used
    to look up values in a map. Each key must be unique
    across the map.

key:value pair
  ~ One of the pairs of items in a map. Values are looked up in a
    map by key.

mapping type
  ~ A mapping type is a data type comprised of a collection of keys and
    associated values. Javascript's objects are used as mapping types
    in this chapter. Objects implement the
    [associative array](http://en.wikipedia.org/wiki/Associative_array)
    abstract data type.

mutable data value
  ~ A data value which can be modified. The types of all mutable values
    are compound types. Lists and dictionaries are mutable; strings
    and tuples are not.

Exercises
---------

#. Write a program that reads a string and returns a
   table of the letters of the alphabet in alphabetical order which occur in
   the string together with the number of times each letter occurs. Case should
   be ignored. A sample output of the program when the user enters the data
   "ThiS is String with Upper and lower case Letters", would look this this:

       a  2
       c  1
       d  1
       e  5
       g  1
       h  2
       i  4
       l  2
       n  2
       o  1
       p  2
       r  4
       s  5
       t  5
       u  1
       w  2

#. Write a program called ``alice_words.py`` that creates a text file named
   ``alice_words.txt`` containing an alphabetical listing of all the words, and the
   number of times each occurs, in the text version of `Alice's Adventures in Wonderland`.
   (You can obtain a free plain text version of the book, along with many others, from
   http://www.gutenberg.org.) The first 10 lines of your output file should look
   something like this:

        Word              Count
        =======================
        a                 631
        a-piece           1
        abide             1
        able              1
        about             94
        above             3
        absence           1
        absurd            2

   How many times does the word ``alice`` occur in the book?

#. What is the longest word in Alice in Wonderland? How many characters does it have?
