% Think Javascript
% Matthew X. Curinga
  Peter Wentworth
  Jeffrey Elkner
  Allen B. Downey
  and Chris Meyers

The Adelphi University Mod of _Think Python_ ports to Javascript the [_Learning with Python 3 (RLE)_ edition by Peter Wentworth](http://openbookproject.net/thinkcs/python/english3e/).

**Copyright Notice**

Copyright (C) 2018. Matthew X. Curinga.

Permission is granted to copy, distribute and/or modify this document
under the terms of the GNU Free Documentation License, Version 1.3
or any later version published by the Free Software Foundation;
with Invariant Sections being Foreword, Preface, and Contributor List, no
Front-Cover Texts, and no Back-Cover Texts. A copy of the license is
included in the section entitled "GNU Free Documentation License".

Forward
=======

A very brief forward to the Javascript edition
----------------------------------------------

In the Ed Tech department at Adelphi, we have switched our introductory
programming courses from Python to Javascript. Javascript has many of the
features we like about Python, but also offers easy congiguration and
a path to developing web and mobile apps without introducing additional
programming languages. Most of the text is a straight port of the Python
text, with some details to the specific Javascript features. The chapters
are augmented with video tutorials and large code samples that focus
on unstructured problem solving.


Foreword to Learning with Python 3 (RLE)
----------------------------------------

By David Beazley

As an educator, researcher, and book author, I am delighted to see the
completion of this book. Python is a fun and extremely easy-to-use programming
language that has steadily gained in popularity over the last few years.
Developed over ten years ago by Guido van Rossum, Python's simple syntax and
overall feel is largely derived from ABC, a teaching language that was
developed in the 1980's. However, Python was also created to solve real
problems and it borrows a wide variety of features from programming languages
such as C++, Java, Modula-3, and Scheme. Because of this, one of Python's most
remarkable features is its broad appeal to professional software developers,
scientists, researchers, artists, and educators.

Despite Python's appeal to many different communities, you may still wonder why
Python? or why teach programming with Python? Answering these questions is no
simple task---especially when popular opinion is on the side of more
masochistic alternatives such as C++ and Java.  However, I think the most
direct answer is that programming in Python is simply a lot of fun and more
productive.

When I teach computer science courses, I want to cover important concepts in
addition to making the material interesting and engaging to students.
Unfortunately, there is a tendency for introductory programming courses to
focus far too much attention on mathematical abstraction and for students to
become frustrated with annoying problems related to low-level details of
syntax, compilation, and the enforcement of seemingly arcane rules. Although
such abstraction and formalism is important to professional software engineers
and students who plan to continue their study of computer science, taking such
an approach in an introductory course mostly succeeds in making computer
science boring. When I teach a course, I don't want to have a room of
uninspired students. I would much rather see them trying to solve interesting
problems by exploring different ideas, taking unconventional approaches,
breaking the rules, and learning from their mistakes. In doing so, I don't want
to waste half of the semester trying to sort out obscure syntax problems,
unintelligible compiler error messages, or the several hundred ways that a
program might generate a general protection fault.

One of the reasons why I like Python is that it provides a really nice balance
between the practical and the conceptual. Since Python is interpreted,
beginners can pick up the language and start doing neat things almost
immediately without getting lost in the problems of compilation and linking.
Furthermore, Python comes with a large library of modules that can be used to
do all sorts of tasks ranging from web-programming to graphics. Having such a
practical focus is a great way to engage students and it allows them to
complete significant projects. However, Python can also serve as an excellent
foundation for introducing important computer science concepts. Since Python
fully supports procedures and classes, students can be gradually introduced to
topics such as procedural abstraction, data structures, and object-oriented
programming --- all of which are applicable to later courses on Java or C++.
Python even borrows a number of features from functional programming languages
and can be used to introduce concepts that would be covered in more detail in
courses on Scheme and Lisp.

In reading Jeffrey's preface, I am struck by his comments that Python allowed
him to see a higher level of success and a lower level of frustration and that
he was able to move faster with better results.  Although these comments refer
to his introductory course, I sometimes use Python for these exact same reasons
in advanced graduate level computer science courses at the University of
Chicago. In these courses, I am constantly faced with the daunting task of
covering a lot of difficult course material in a blistering nine week quarter.
Although it is certainly possible for me to inflict a lot of pain and suffering
by using a language like C++, I have often found this approach to be
counterproductive---especially when the course is about a topic unrelated to
just programming. I find that using Python allows me to better focus on the
actual topic at hand while allowing students to complete substantial class
projects.

Although Python is still a young and evolving language, I believe that it has a
bright future in education. This book is an important step in that direction.
David Beazley University of Chicago Author of the *Python Essential Reference*

Contributor List
----------------

To paraphrase the philosophy of the Free Software Foundation, this book is free
like free speech, but not necessarily free like free pizza. It came about
because of a collaboration that would not have been possible without the GNU
Free Documentation License. So we would like to thank the Free Software
Foundation for developing this license and, of course, making it available to
us.

We would also like to thank the more than 100 sharp-eyed and thoughtful readers
who have sent us suggestions and corrections over the past few years. In the
spirit of free software, we decided to express our gratitude in the form of a
contributor list.  Unfortunately, this list is not complete, but we are doing
our best to keep it up to date. It was also getting too large to include
everyone who sends in a typo or two. You have our gratitude, and you have the
personal satisfaction of making a book you found useful better for you and
everyone else who uses it. New additions to the list for the 2nd edition will
be those who have made on-going contributions.

If you have a chance to look through the list, you should realize that each
person here has spared you and all subsequent readers from the confusion of a
technical error or a less-than-transparent explanation, just by sending us a
note.

Impossible as it may seem after so many corrections, there may still be errors
in this book. If you should stumble across one, we hope you will take a minute
to contact us. The email address (for the Python 3 version of the book) 
is <p.wentworth@ru.ac.za>. Substantial changes made due to your suggestions will add you to the next
version of the contributor list (unless you ask to be omitted). Thank you!


### Second Edition
* An email from Mike MacHenry set me straight on tail recursion. He not only
  pointed out an error in the presentation, but suggested how to correct it.
* It wasn't until 5th Grade student Owen Davies came to me in a Saturday
  morning Python enrichment class and said he wanted to write the card game,
  Gin Rummy, in Python that I finally knew what I wanted to use as the case
  study for the object oriented programming chapters.
* A *special* thanks to pioneering students in Jeff's Python Programming class
  at [GCTAA](http://www.arlington.k12.va.us/1540108115320583/blank/browse.asp?A=383&BMDRN=2000&BCOB=0&C=59085>) during the 2009-2010 school year: Safath
  Ahmed, Howard Batiste, Louis Elkner-Alfaro, and Rachel Hancock.  Your
  continual and thoughtfull feedback led to changes in most of the chapters of
  the book.  You set the standard for the active and engaged learners that will
  help make the new Governor's Academy what it is to become.  Thanks to you
  this is truly a *student tested* text.
* Thanks in a similar vein to the students in Jeff's Computer Science
  class at the HB-Woodlawn program during the 2007-2008 school year: James
  Crowley, Joshua Eddy, Eric Larson, Brian McGrail, and Iliana Vazuka.
* Ammar Nabulsi sent in numerous corrections from Chapters 1 and 2.
* Aldric Giacomoni pointed out an error in our definition of the Fibonacci
  sequence in Chapter 5.
* Roger Sperberg sent in several spelling corrections and pointed out a twisted 
  piece of logic in Chapter 3.
* Adele Goldberg sat down with Jeff at PyCon 2007 and gave him a list of
  suggestions and corrections from throughout the book.
* Ben Bruno sent in corrections for chapters 4, 5, 6, and 7.
* Carl LaCombe pointed out that we incorrectly used the term commutative in
  chapter 6 where symmetric was the correct term.
* Alessandro Montanile sent in corrections for errors in the code examples and
  text in chapters 3, 12, 15, 17, 18, 19, and 20.
* Emanuele Rusconi found errors in chapters 4, 8, and 15.
* Michael Vogt reported an indentation error in an example in chapter 6, and
  sent in a suggestion for improving the clarity of the shell vs.  script
  section in chapter 1.


### First Edition

* Lloyd Hugh Allen sent in a correction to Section 8.4.
* Yvon Boulianne sent in a correction of a semantic error in Chapter 5.
* Fred Bremmer submitted a correction in Section 2.1.
* Jonah Cohen wrote the Perl scripts to convert the LaTeX source for this book
  into beautiful HTML.
* Michael Conlon sent in a grammar correction in Chapter 2 and an improvement
  in style in Chapter 1, and he initiated discussion on the technical aspects
  of interpreters.
* Benoit Girard sent in a correction to a humorous mistake in Section 5.6.
* Courtney Gleason and Katherine Smith wrote `horsebet.py`, which was used as a 
  case study in an earlier version of the book. Their program can now be found
  on the website.
* Lee Harr submitted more corrections than we have room to list here, and
  indeed he should be listed as one of the principal editors of the text.
* James Kaylin is a student using the text. He has submitted numerous
  corrections.
* David Kershaw fixed the broken `catTwice` function in Section 3.10.
* Eddie Lam has sent in numerous corrections to Chapters 1, 2, and 3.  He also
  fixed the Makefile so that it creates an index the first time it is run and
  helped us set up a versioning scheme.
* Man-Yong Lee sent in a correction to the example code in Section 2.4.
* David Mayo pointed out that the word unconsciously in Chapter 1 needed to be
  changed to subconsciously .
* Chris McAloon sent in several corrections to Sections 3.9 and 3.10.
* Matthew J. Moelter has been a long-time contributor who sent in numerous
  corrections and suggestions to the book.
* Simon Dicon Montford reported a missing function definition and several typos 
  in Chapter 3. He also found errors in the `increment` function in Chapter 13.
* John Ouzts corrected the definition of return value in Chapter 3.
* Kevin Parks sent in valuable comments and suggestions as to how to improve
  the distribution of the book.
* David Pool sent in a typo in the glossary of Chapter 1, as well as kind words 
  of encouragement.
* Michael Schmitt sent in a correction to the chapter on files and
  exceptions.
* Robin Shaw pointed out an error in Section 13.1, where the printTime function 
  was used in an example without being defined.
* Paul Sleigh found an error in Chapter 7 and a bug in Jonah Cohen's Perl
  script that generates HTML from LaTeX.
* Craig T. Snydal is testing the text in a course at Drew University.
  He has contributed several valuable suggestions and corrections.
* Ian Thomas and his students are using the text in a programming course. They
  are the first ones to test the chapters in the latter half of the book, and
  they have make numerous corrections and suggestions.
* Keith Verheyden sent in a correction in Chapter 3.
* Peter Winstanley let us know about a longstanding error in our Latin in
  Chapter 3.
* Chris Wrobel made corrections to the code in the chapter on file I/O and
  exceptions.
* Moshe Zadka has made invaluable contributions to this project. In addition to 
  writing the first draft of the chapter on Dictionaries, he provided continual 
  guidance in the early stages of the book.
* Christoph Zwerschke sent several corrections and pedagogic
  suggestions, and explained the difference between *gleich* and
  *selbe*.
* James Mayer sent us a whole slew of spelling and typographical
  errors, including two in the contributor list.
* Hayden McAfee caught a potentially confusing inconsistency between two
  examples.
* Angel Arnal is part of an international team of translators working on the
  Spanish version of the text. He has also found several errors in the English
  version.
* Tauhidul Hoque and Lex Berezhny created the illustrations in Chapter 1 and
  improved many of the other illustrations.
* Dr. Michele Alzetta caught an error in Chapter 8 and sent some interesting
  pedagogic comments and suggestions about Fibonacci and Old Maid.
* Andy Mitchell caught a typo in Chapter 1 and a broken example in Chapter 2.
* Kalin Harvey suggested a clarification in Chapter 7 and caught some typos.
* Christopher P. Smith caught several typos and is helping us prepare to update 
  the book for Python 2.2.
* David Hutchins caught a typo in the Foreword.
* Gregor Lingl is teaching Python at a high school in Vienna, Austria.  He is
  working on a German translation of the book, and he caught a couple of bad
  errors in Chapter 5.
* Julie Peters caught a typo in the Preface.
