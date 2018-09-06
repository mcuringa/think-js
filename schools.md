Content Analysis of NY Times school-related articles
================================================================


Case Study: Dictionaries, tuples, lists & more
-----------------------------------------------

<aside id="teachers_clean" style="top: 420px;">
The first step to running this analysis is to prepare the
text. ``read_and_prep`` opens a file and reads the contents
into a string. From there, we call ``clean`` which, in turn,
calls ``strip_non_chars`` for each word in the text. Even
before the program opens the text has been manually groomed
in a text editor. Our analysis centers around counting words — 
punctuation and other non-alphanumeric characters throw off
our counts. Our approach is:

1. convert everything to lowercase
2. remove punctuation at the start and end of words
3. leave apostrophes and hyphenated words intact

</aside>

<aside id="teachers_while" style="top: 1083px;">
``strip_non_chars`` is applied to every word
in the text. Python's built-in ``strip`` function
removes spaces or other characters from the start
or end of strings, but, in this case, we know the
characters we want to keep, but not the ones we
want to strip—we want to keep the 26 lowercase
English letters and the digits 0-9. We remove any other
character found at the start or end of the word. We chose
to implement this using a **while loop**. Unlike like **for**
loops, while loops provide an _indefinite loop_—we do not
know who many iterations are needed. In this case, we continue the loop
until we find a valid character.

This function has 2 while loops. The first drops the first
character of the word (using the string slice syntax)
until the first character is valid. The second loop does the same,
but works from the last character.
</aside>

<aside id="teachers_freak" style="top: 1400px">
Counting word frequencies—the number of 
times a word occurs in the text—is the main
tool offered by this program to analyze text.
The algorithm in ``freq`` is familiar to us 
by now: iterate over a list of words in a for loop,
use unique words as **dictionary keys** and 
keep a **running total** of each word as the
dictionary **value**. The word frequency map
return allows quick and easy access to the frequency
of every word in the text.
</aside>


<aside id="teachers_freak_sort" style="top: 1715px">
Dictionaries are great for keyed access to items—in
our case, looking up word counts based on the word—but
they are inherently **unsorted**. This means
that we need to take extra steps to see the most common
or least common words in a text, or to even display
the words in alphabetical order. Previously we have seen
how to display the contents of a dictionary by doing a
**for loop** over the ``sorted(map.keys())``. This makes
sense for some data, but here we are more interested in
sorting on the values, not the dict keys.

``freq_list`` solves this problem by sorting the dictionary
items based on the word count. It expects a list of **tuples**
with element-zero holding the word and item-1 holding the count.
Luckily, this is the tuple list we get when we call ``items()``
on our word frequency map. Python offers many flexible ways
of doing custom sorts on data. We choose a method here that
builds on programming skills we have already learned:

1. swap the tuples from (word, count) using a for loop
2. sort them using the ``sort`` method which is part of the **list object**
3. use the optional ``reverse=True`` parameter to ``sort`` so that we
   get the most popular words at the ``head`` of our list
4. swap the items back into a list of (word, count) tuples 
   and return that, pretending nothing ever happened (actually, this is
   a type of abstraction, where we can later change the way we choose to sort the
   items without changing the **interface** to our function)

</aside>

<aside id="teachers_common" style="top: 2342px;"> Depending on the 
analysis, sometimes it is important to consider the use of common 
words. This may be useful to identify authorial patterns, such as 
identifying authorship, or characteristics of the author. Often 
though, common words are not germane to the analysis. 
``common_filter`` works on lists of words and creates a new sub-list 
that filters out all of the common words. The variable 
``commonWords`` is defined as a list of strings containing 500 
common English words is declared as an internal variable within the 
function. Because our analysis is primarily concerned with word 
frequency counts, ``common_filter`` takes a list of **tuples**
—``items``—as a parameter, rather than a list of strings. This 
allows clients of this function to pass in lists that contain words 
and word counts. The function expects the first item in the tuple to 
be the word.
</aside>

<aside id="teachers_neighbors" style="top: 2600px;">
``neighbors`` helps us examine co-occurances of words in the text. This
function defines three **parameters**: ``words`` is the list
of tuples to analyze, ``targetWords`` is a sub-list of words we
will run our neighbor analysis on, and the **int** ``n`` indicates
how for away from our target word we want to investigate. if ``n == 1``,
we will only count co-locations of words contiguous with our target word. For
more on ``neighbors`` please see the example below the code listing.
</aside>

<aside id="teachers_compare" style="top: 2800px;">
``compare`` offers a comparison of two word frequency
dictionaries to find which words have the greatest 
disparity in occurrences. In this function we see
a new Python _data structure_, **set**. "A set is 
an unordered collection with no duplicate elements"
[*](http://docs.python.org/3.3/tutorial/datastructures.html#sets).
In this case we use **set** to make a unique set of keys from
both dictionaries. We create the set from the ``keys``
in dictionary ``a`` on line 188 and then add any missing ``keys``
from dict ``b`` on line 189 by calling sets ``update`` method.
In our loop (lines 193-197) we add tuples to a new list, in the format
(word, difference in counts between a & b). We use the built-in ``abs``
function, because, here, we care about the difference, not _which_
dict had the greater count. Once this list of differences is created,
we sort it by counts using the ``list_freqs`` function we already defined.
</aside>


~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python .numberLines}
# schools_analysis.py
# by: mxc
"""
This example code shows how to use
some basic content analysis techniques
such as finding word frequencies
and counting neighboring words to 
provide a basic analysis of differences 
in New York Times articles from 1983
and 2013.

Key Concepts: functions, dictionaries, 
              lists, tuples, string operations
New Concepts: while loop

"""

def read_and_prep(fileName):
    """
        Open a file, read the content,
        and prepare it for analysis.
        Return a list of words from the
        file.
    """
    f = open(fileName,"r")
    text = f.read()
    words = clean(text)
    f.close()
    return words


def clean(text):
    """
        Prepare our text for analysis by
        removing non-alphanumeric
        characters like punctuations and
        formatting marks line em and en
        dashes. This function assumes
        ascii not UTF-8 or other
        encodings.
    """

    text = text.lower()
    # replace -- with a space
    text = text.replace("--", " ")
    words = text.split()
    cleanWords = []

    for word in words:
        word = strip_non_chars(word)
        if len(word) > 0:
            cleanWords.append(word)

    return cleanWords

def strip_non_chars(word):
    """
        Use index notation to make sure that the first
        and last character of the word is one of our
        valid characters
    """

    valid = "abcdefghijklmnopqrstuvwxyz1234567890"

    while len(word) > 0 and word[0] not in valid:
        word = word[1:]

    while len(word) > 0 and word[len(word) - 1] not in valid:
        word = word[0: len(word) - 1]

    return word


def freq(words):
    """
        Take words--a list of words--and
        break it down into a word
        frequency map where each unique
        word in the text is a key and
        with the number of occurrences
        as the value. Return the map.
    """
    freqMap = {}

    for word in words:
        if word in freqMap:
            freqMap[word] += 1
        else:
            freqMap[word] = 1
    return freqMap


def freq_list(items):
    """
        Create a sorted list from map items
        from a word frequency dictionary.
        The items must be 2-tuples in the format
        (word, count). Return a list of 2-tuples
        in (word, frequency) order, sorted with
        the most frequent words at the start
        of the list.
    """

    freqList = []
    for word, count in items:
        freqList.append( (count, word) )

    freqList.sort(reverse=True)

    # now swap it back to word,count order in our tuples
    swapped = []
    for count,word in freqList:
        swapped.append( (word,count) )

    return swapped

def common_filter(items):
    """
        Filter out the most common
        English words from from a list
        of 500 common words. ``items``
        is a list of tuples where the
        first element is the word.
        Returns a new list of items,
        without the common words.
    """

    # 500 common English words, in frequency order
    # edited here for brevity
    commonWords = ['the', 'of', 'and', 'a', 'in'] #...

    filtered = []
    for item in items:
        word = item[0]
        if word not in commonWords:
            filtered.append( item )

    return filtered


def neighbors(words, targetWords, n):
    """
        This function takes a list of
        words and returns a dict with
        each word as the key, and a
        sorted list of frequency
        2-tuples in the form (word,
        freq) with all of the words in
        the text within ``n`` spaces
        either before or after the word.
    """

    neighborMap = {}

    #initialize our dict with empty lists
    for target in targetWords:
        neighborMap[target] = []

    for i in range(len(words)):
        # current word
        word = words[i]
        if word in targetWords:
            
            # use max to guard against 
            # going beyond end of list
            start = max(0,i-n)

            # use min to make sure
            # we don't go below zero
            end = min(len(words)-1, i+n)

            neighborList = neighborMap[word]
            neighborList.extend(words[start:i] + words[i+1:end+1])
            neighborMap[word] = neighborList

    for key in neighborMap.keys():
        neighborMap[key] = freq(neighborMap[key])

    return neighborMap

def compare(a, b):
    """
        Compare the word frequency dictionaries
        ``a`` and ``b`` by created a new sorted list
        of 2-tuples in the format 
        (word, difference in counts).
    """
    wordSet = set(a.keys())
    wordSet.update(b.keys())

    freqDifList = []

    for word in wordSet:
        aCount = a.get(word, 0)
        bCount = b.get(word, 0)
        dif = abs(aCount - bCount)
        freqDifList.append( (word, dif) )

    sortedDifs = freq_list(freqDifList)
    return sortedDifs


def analyze(fName, targets):
    """
        Analyze the texts along several lines:
          - split into words
          - create a frequency map for the document
          - analyze neighbors for the 
            list of ``target`` words
        Return the results as a tuple:
        (list of all words, freq map, freq map for neighbors)
    """
 
    words = read_and_prep(fName)
    frequencies = freq(words)
    neigh = neighbors(words, targets, 2)
    return words, frequencies, neigh

def print_counts(freqList):
    """
        Takes a list of tuples in the format (word, count)
        and prints the result in a table.
    """

    col = 20

    print("word".ljust(col) + "  count")
    print("-" * col + "  " + "---------")

    for word, count in freqList:
        print(str(word.rjust(col)) + "  " + str(count))


def print_targets(neigh, count=10):
    for target in neigh.keys():
        print(target)
        print("==========================================")
        com = freq_list(neigh[target].items())
        com = common_filter(com)
        show = min(count, len(com)-1 )
        print_counts(com[0:show])
        print()
        print()

def report(header, words, freqList, neighborList):
    """
        Print a generic report with the analysis.
    """
    print("RUNNING ANALYSIS FOR:", header)
    print("==========================================")
    print()
    print("Total words:", len(words))
    uncommon = common_filter(freqList)
    print_counts(uncommon[0:100])
    print_targets(neighborList)


def print_compare(compared, a, b):
    """
        Print out a table comparing two
        dictionaries. ``Compared`` is the
        ordered list of keys-freq to compare.
        ``a`` and ``b`` are the two word
        frequency dictionaries to compare.
    """

    col = 20
    print("word".ljust(col) + "  a list  b list")
    print("-" * col + "  ------  ------")

    for word, dif in compared:
        print(word.rjust(col) + "  " + 
          str(a.get(word,0)).ljust(6) + "  " + 
          str(b.get(word,0)).ljust(6))

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Neighbor details
-----------------------

``neighbors`` is more complicated than other code we have looked at
because it calls one of our functions in a loop and it uses nested
**dictionaries** --- a dictionary that has more dictionaries as data.
To unpack the function a little bit, consider this example text:

<p style="color: gray; margin: .5em 2em;">While previously well <span style="color: 
blue">known in <span style="color: red">education</span> circles, 
she</span> gained a much broader audience after she publicly 
rejected almost everything she had once believed. In a surprise 2010 
best seller, "The Death and Life of the Great American School 
System," she openly declared that she had been wrong to <span 
style="color: blue">champion standardized <span style="color: 
red">testing</span>, charter schools</span> and vouchers. She says 
she is trying now to make up for past errors.</p>


If we run ``neighbors`` with ``targetWords=["testing", "education"], n=2``
we would create a dictionary that looks something like this:

key        value
---------  --------------------------------------------------------------
education  {"known": 1, "in": 1, "circles": 1, "she": 1}
testing    {"champion": 1, "standardized": 1, "charter": 1, "schools": 1}



Here are the actual results for this neighbors call against the
'teachers_2013.txt'; showing the top 3 neighbors for each word.

key          value
-----------  ---------
testing      {"standardized": 30, "high-stakes": 15, "students": 8}
education    {"department": 169, "board": 54, "higher": 52}

