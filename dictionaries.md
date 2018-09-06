 Dictionaries
============

All of the compound data types we have studied in detail so far --- strings,
lists, and tuples --- are sequence types, which use integers as indices to access
the values they contain within them.

**Dictionaries** are yet another kind of compound type. They are Python's
built-in **mapping type**. They map **keys**, which can be any immutable type,
to values, which can be any type (heterogeneous), just like the elements
of a list or tuple. In other languages, they are called _associative
arrays_ since they associate a key with a value.

As an example, we will create a dictionary to translate English words into
Spanish. For this dictionary, the keys are strings.

One way to create a dictionary is to start with the empty dictionary and add
**key:value pairs**. The empty dictionary is denoted ``{}``:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python}
>>> eng2sp = {}
>>> eng2sp["one"] = "uno"
>>> eng2sp["two"] = "dos"
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The first assignment creates a dictionary named ``eng2sp``; the other
assignments add new key:value pairs to the dictionary. We can print the current
value of the dictionary in the usual way:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python}
>>> print(eng2sp)
{"two": "dos", "one": "uno"}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The key:value pairs of the dictionary are separated by commas. Each pair
contains a key and a value separated by a colon.

<aside id="hashing">

**Hashing**

The order of the pairs may not be what was expected. Python uses
complex algorithms, designed for very fast access, to determine
where the key:value pairs are stored in a dictionary. For our
purposes we can think of this ordering as unpredictable.

You also might wonder why we use dictionaries at all when the same
concept of mapping a key to a value could be implemented using a
list of tuples:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python}
>>> {"apples": 430, "bananas": 312, "oranges": 525, "pears": 217}
{'pears': 217, 'apples': 430, 'oranges': 525, 'bananas': 312}

>>> [('apples', 430), ('bananas', 312), ('oranges', 525), ('pears', 217)]
[('apples', 430), ('bananas', 312), ('oranges', 525), ('pears', 217)]
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The reason is dictionaries are very fast, implemented using a
technique called hashing, which allows us to access a value very
quickly. By contrast, the list of tuples implementation is slow. If
we wanted to find a value associated with a key, we would have to
iterate over every tuple, checking the 0th element. What if the key
wasn't even in the list? We would have to get to the end of it to
find out.

</aside>

Another way to create a dictionary is to provide a list of key:value pairs
using the same syntax as the previous output:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python}
>>> eng2sp = {"one": "uno", "two": "dos", "three": "tres"}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

It doesn't matter what order we write the pairs. The values in a dictionary are
accessed with keys, not with indices, so there is no need to care about
ordering.

Here is how we use a key to look up the corresponding value:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python}
>>> print(eng2sp["two"])
'dos'
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The key ``"two"`` yields the value ``"dos"``.

Lists, tuples, and strings have been called *sequences*, because their items
occur in order.  The dictionary is the first compound type that we've
seen that is not a sequence, so we can't index or slice a dictionary. 

### Practice problems

1. Modify the ``eng2sp`` dictionary declaration above so that
   ``eng2sp`` contains all of the numbers, 0-5.

Dictionary operations
---------------------

The ``del`` statement removes a key:value pair from a dictionary. For example,
the following dictionary contains the names of various fruits and the number of
each fruit in stock:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python}
>>> inventory = {"apples": 430, "bananas": 312, "oranges": 525, "pears": 217}
>>> print(inventory)
{'pears': 217, 'apples': 430, 'oranges': 525, 'bananas': 312}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If someone buys all of the pears, we can remove the entry from the dictionary:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python}
>>> del inventory["pears"]
>>> print(inventory)
{'apples': 430, 'oranges': 525, 'bananas': 312}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Or if we're expecting more pears soon, we might just change the value
associated with pears:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python}
>>> inventory["pears"] = 0
>>> print(inventory)
{'pears': 0, 'apples': 430, 'oranges': 525, 'bananas': 312}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A new shipment of bananas arriving could be handled like this:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python}
>>> inventory["bananas"] += 200
>>> print(inventory)
{'pears': 0, 'apples': 430, 'oranges': 525, 'bananas': 512}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The ``len`` function also works on dictionaries; it returns the number
of key:value pairs:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python}
>>> len(inventory)
4
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Dictionary methods
------------------

Dictionaries have a number of useful built-in methods.

The ``keys`` method returns what Python 3 calls a **view** of its underlying keys.  
A view object has some similarities to the ``range`` object we saw earlier ---
it is a lazy promise, to deliver its elements when they're needed by the 
rest of the program.  We can iterate over the view, or turn the view into a 
list like this:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python .numberLines}
for k in eng2sp.keys():   # The order of the k's is not defined
   print("Got key", k, "which maps to value", eng2sp[k])     
   
ks = list(eng2sp.keys())
print(ks)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This produces this output:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python}
Got key three which maps to value tres
Got key two which maps to value dos
Got key one which maps to value uno
['three', 'two', 'one']
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

It is so common to iterate over the keys in a dictionary that we can
omit the ``keys`` method call in the ``for`` loop --- iterating over
a dictionary implicitly iterates over its keys:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python .numberLines}
for k in eng2sp:     
   print("Got key", k)     
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The ``values`` method is similar; it returns a view object which can be turned
into a list:  

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python}
>>> list(eng2sp.values())
['tres', 'dos', 'uno']
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The ``items`` method also returns a view, which promises a list of tuples --- one 
tuple for each key:value pair:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python}
>>> list(eng2sp.items())
[('three', 'tres'), ('two', 'dos'), ('one', 'uno')]
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Tuples are often useful for getting both the key and the value at the same
time while we are looping:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python .numberLines}
for (k,v) in eng2sp.items():
    print("Got",k,"that maps to",v)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This produces:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python}
Got three that maps to tres
Got two that maps to dos
Got one that maps to uno  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The ``in`` and ``not in`` operators can test if a key is in the dictionary:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python}
>>> "one" in eng2sp
True
>>> "six" in eng2sp
False
>>> "tres" in eng2sp    # Note that 'in' tests keys, not values.
False
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This method can be very useful, since looking up a non-existent key in a
dictionary causes a runtime error:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python}
>>> eng2esp["dog"]
Traceback (most recent call last):
  ...
KeyError: 'dog'
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Aliasing and copying
--------------------

As in the case of lists, because dictionaries are mutable, we need 
to be aware of aliasing.  Whenever two variables refer to the same 
object, changes to one affect the other.

If we want to modify a dictionary and keep a copy of the original, use the
``copy`` method. For example, ``opposites`` is a dictionary that contains pairs
of opposites:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python}
>>> opposites = {"up": "down", "right": "wrong", "yes": "no"}
>>> alias = opposites
>>> copy = opposites.copy()  # Shallow copy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

``alias`` and ``opposites`` refer to the same object; ``copy`` refers to a
fresh copy of the same dictionary. If we modify ``alias``, ``opposites`` is
also changed:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python}
>>> alias["right"] = "left"
>>> opposites["right"]
'left'
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If we modify ``copy``, ``opposites`` is unchanged:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python}
>>> copy["right"] = "privilege"
>>> opposites["right"]
'left'
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Counting letters
----------------

In the exercises in Chapter 8 (Strings) we wrote a function that 
counted the number of occurrences of a letter in a string. A more 
general version of this problem is to form a frequency table of the 
letters in the string, that is, how many times each letter appears.

Such a frequency table might be useful for compressing a text file. 
Because different letters appear with different frequencies, we can 
compress a file by using shorter codes for common letters and longer 
codes for letters that appear less frequently.

Dictionaries provide an elegant way to generate a frequency table:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python}
>>> letter_counts = {}
>>> for letter in "Mississippi":
...     letter_counts[letter] = letter_counts.get(letter, 0) + 1
...
>>> letter_counts
{'M': 1, 's': 4, 'p': 2, 'i': 4}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We start with an empty dictionary. For each letter in the string, we find the
current count (possibly zero) and increment it. At the end, the dictionary
contains pairs of letters and their frequencies. Note that we access
the letter using the dictionary's ``get`` method (rather than the
index notation which would read ``letter_counts[letter]``) because
``get`` allows us to pass in the default vaule, as the second parameter,
in the event that the key is not yet in our dictionary.

It might be more appealing to display the frequency table in alphabetical order. We
can do that with the ``items`` and ``sort`` methods:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python}
>>> letter_items = list(letter_counts.items())
>>> letter_items.sort()
>>> print(letter_items)
[('M', 1), ('i', 4), ('p', 2), ('s', 4)]
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Notice in the first line we had to call the type conversion function ``list``.
That turns the promise we get from ``items`` into a list, a step that is 
needed before we can use the list's ``sort`` method. 

Word Frequencies
-----------------------------------------

Like the letter frequencies above, dictionaries are
good **data structures** to hold word frequency tables. In
the example below, we do some basic analysis of newspaper articles
by using ``dicts`` to count words. In the word frequency table 
or map, the dictionary **key** is the word and the **value** is
the number of times that word appears in the text.

[Download and run the sample code here](examples/snowden-case-study.tar)

### Case Study: Snowden Content Analysis


<aside id="snowden_read_file" style="top: 280px;">

**read_file** uses the **buil-in function** `open()` to
read a plain text file into a **file object**. The function **returns**
the text as a `string`.

</aside>


<aside id="snowden_word_map" style="top: 365px;">

The **word_map function** uses a Python `dict` to
map the key words identified in the parameter `find`
to the number of times they occur in the text.
The text is passed in as an argument to this
function as a `list` of `words`.

This function uses `list` and `dict`
**data structures**. Line 23 initializes and empty `dict`
called wordMap. The `find` parameter is a `list` that let's the
function know which words to count. The first `for` loop
on line 25 iterates over the words in `find` and
adds a new **key** to wordMap with the **value** zero. We use the String
function `lower()` to force all keys to lowercase. The
second loop (29) iterates through the words in the text. For each word
in the list we use the **string function** `strip()` to remove punctation.
The **string module** was **imported** on line 9, so that we can access its
list of punctation characters here, on line 30.

The body of the second loop uses the `in` operator to test
if a word from the text is in our list of words to find. If the word is
found, we **increment** the value for that word in our `dict`. Finally, 
the function returns a map of **key-value pairs** where the keys are the
words that were found. The values are `ints` indicating the number of times
the word was found in the text (0.._n_). The function **returns** this
word frequency map.

</aside>

<aside id="snowden_describe" style="top: 794px;">

The **describe** function presents the results to the user
by printing information to the console. This function is
not very **abstract** --- it can only be used to analyze the
Snowden news reports.

</aside>


~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python .numberLines}
# snow.py
# by: mxc
"""
This program runs a simple analysis of new articles
related to Edward Snowden and his leak of NSA and
other government surveillance programs.
"""

import string

def read_file(fileIn):
    f = open(fileIn)
    text = f.read()
    f.close()
    return text

def word_map(words, find):
    """
    Return a word map holding the
    number of occurrences of each word in
    the `find` list.
    """
    wordMap = {}
    # initialize the wordmap
    for word in find:
        wordMap[word.lower()] = 0

    #count the words in our list of words
    for w in words:
        w = w.strip(string.punctuation)
        if w in find:
            wordMap[w] += 1

    return wordMap

def describe(total, map):

    head = """
==================================
   Snowden News Report Analysis
==================================

This program analyzed the full text
of 874 English language news reports
that were published between June 24, 2013
and October 20, 2013.

News reports were sourced from a Lexis-Nexis
Academic search of "Major World Newspapers"
on the keyword "Snowden". Results were
filtered for duplicates and downloaded as
a single text file. This file was used
to run the analysis here.
------------------------------------
"""
    print(head)
    print("total words:", total)

    whistle = map["whistleblower"]
    traitor = map["traitor"]

    print("whistelblower:", whistle)
    print("traitor:", traitor)


def main():
    text = read_file("snowden.txt")
    words = text.split()
    total = len(words)
    wordsToCount = ["whistleblower","traitor"]
    map = word_map(words, wordsToCount)

    describe(total,map)

main()

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Glossary
--------

dictionary
  ~ A collection of key:value pairs that maps from keys to values. The keys
    can be any immutable value, and the associated value can be of any type.

immutable data value
  ~ A data value which cannot be modified.  Assignments to elements or
    slices (sub-parts) of immutable values cause a runtime error.

key
  ~ A data item that is *mapped to* a value in a dictionary. Keys are used
    to look up values in a dictionary. Each key must be unique
    across the dictionary.

key:value pair
  ~ One of the pairs of items in a dictionary. Values are looked up in a
    dictionary by key.
  
mapping type
  ~ A mapping type is a data type comprised of a collection of keys and
    associated values. Python's only built-in mapping type is the
    dictionary.  Dictionaries implement the
    [associative array](http://en.wikipedia.org/wiki/Associative_array)
    abstract data type.

memo
  ~ Temporary storage of precomputed values to avoid duplicating the same computation.

mutable data value
  ~ A data value which can be modified. The types of all mutable values 
    are compound types.  Lists and dictionaries are mutable; strings
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

