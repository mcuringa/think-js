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
        w = w.strip(string.punctuation + string.whitespace)
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