Preface to previous edition
===========================

By Jeffrey Elkner

This book owes its existence to the collaboration made possible by the Internet
and the free software movement. Its three authors---a college professor, a high
school teacher, and a professional programmer---never met face to face to work
on it, but we have been able to collaborate closely, aided by many other folks
who have taken the time and energy to send us their feedback.

We think this book is a testament to the benefits and future possibilities of
this kind of collaboration, the framework for which has been put in place by
Richard Stallman and the Free Software Foundation.


How and why I came to use Python
--------------------------------

In 1999, the College Board's Advanced Placement (AP) Computer Science exam was
given in C++ for the first time. As in many high schools throughout the
country, the decision to change languages had a direct impact on the computer
science curriculum at Yorktown High School in Arlington, Virginia, where I
teach. Up to this point, Pascal was the language of instruction in both our
first-year and AP courses. In keeping with past practice of giving students two
years of exposure to the same language, we made the decision to switch to C++
in the first year course for the 1997-98 school year so that we would be in
step with the College Board's change for the AP course the following year.

Two years later, I was convinced that C++ was a poor choice to use for
introducing students to computer science. While it is certainly a very powerful
programming language, it is also an extremely difficult language to learn and
teach. I found myself constantly fighting with C++'s difficult syntax and
multiple ways of doing things, and I was losing many students unnecessarily as
a result. Convinced there had to be a better language choice for our first-year
class, I went looking for an alternative to C++.

I needed a language that would run on the machines in our GNU/Linux lab as well
as on the Windows and Macintosh platforms most students have at home. I wanted
it to be free software, so that students could use it at home regardless of
their income. I wanted a language that was used by professional programmers,
and one that had an active developer community around it. It had to support
both procedural and object-oriented programming. And most importantly, it had
to be easy to learn and teach. When I investigated the choices with these goals
in mind, Python stood out as the best candidate for the job.

I asked one of Yorktown's talented students, Matt Ahrens, to give Python a try.
In two months he not only learned the language but wrote an application called
pyTicket that enabled our staff to report technology problems via the Web. I
knew that Matt could not have finished an application of that scale in so short
a time in C++, and this accomplishment, combined with Matt's positive
assessment of Python, suggested that Python was the solution I was looking for.


Finding a textbook
------------------

Having decided to use Python in both of my introductory computer science
classes the following year, the most pressing problem was the lack of an
available textbook.

Free documents came to the rescue. Earlier in the year, Richard Stallman had
introduced me to Allen Downey. Both of us had written to Richard expressing an
interest in developing free educational materials. Allen had already written a
first-year computer science textbook, *How to Think Like a Computer Scientist*.
When I read this book, I knew immediately that I wanted to use it in my class.
It was the clearest and most helpful computer science text I had seen. It
emphasized the processes of thought involved in programming rather than the
features of a particular language. Reading it immediately made me a better
teacher.

*How to Think Like a Computer Scientist* was not just an excellent book, but it
had been released under the GNU public license, which meant it could be used
freely and modified to meet the needs of its user.  Once I decided to use
Python, it occurred to me that I could translate Allen's original Java version
of the book into the new language. While I would not have been able to write a
textbook on my own, having Allen's book to work from made it possible for me to
do so, at the same time demonstrating that the cooperative development model
used so well in software could also work for educational materials.

Working on this book for the last two years has been rewarding for both my
students and me, and my students played a big part in the process. Since I
could make instant changes whenever someone found a spelling error or difficult
passage, I encouraged them to look for mistakes in the book by giving them a
bonus point each time they made a suggestion that resulted in a change in the
text. This had the double benefit of encouraging them to read the text more
carefully and of getting the text thoroughly reviewed by its most important
critics, students using it to learn computer science.

For the second half of the book on object-oriented programming, I knew that
someone with more real programming experience than I had would be needed to do
it right. The book sat in an unfinished state for the better part of a year
until the open source community once again provided the needed means for its
completion.

I received an email from Chris Meyers expressing interest in the book.  Chris
is a professional programmer who started teaching a programming course last
year using Python at Lane Community College in Eugene, Oregon. The prospect of
teaching the course had led Chris to the book, and he started helping out with
it immediately. By the end of the school year he had created a companion
project on our Website at <http://openbookproject.net> (*Python for Fun*)[http://openbookproject.net/py4fun>]
and was working with some of my most advanced students as a master teacher, guiding
them beyond where I could take them.


Introducing programming with Python
-----------------------------------

The process of translating and using *How to Think Like a Computer Scientist*
for the past two years has confirmed Python's suitability for teaching
beginning students. Python greatly simplifies programming examples and makes
important programming ideas easier to teach.

The first example from the text illustrates this point. It is the traditional
hello, world program, which in the Java version of the book looks like this:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.java}
class Hello
{
    public static void main (String[] args)
    {
        System.out.println ("Hello, world.");
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

in the Python version it becomes:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python}
print("Hello, World!")
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Even though this is a trivial example, the advantages of Python stand out.
Yorktown's Computer Science I course has no prerequisites, so many of the
students seeing this example are looking at their first program. Some of them
are undoubtedly a little nervous, having heard that computer programming is
difficult to learn. The Java version has always forced me to choose between two
unsatisfying options: either to explain the `class Hello`,
`public static void main`, `String[] args`, `{`, and `}`, statements and risk
confusing or intimidating some of the students right at the start, or to tell
them, Just don't worry about all of that stuff now; we will talk about it
later, and risk the same thing. The educational objectives at this point in the
course are to introduce students to the idea of a programming statement and to
get them to write their first program, thereby introducing them to the
programming environment. The Python program has exactly what is needed to do
these things, and nothing more.

Comparing the explanatory text of the program in each version of the book
further illustrates what this means to the beginning student.  There are
seven paragraphs of explanation of Hello, world! in the Java version; in the
Python version, there are only a few sentences. More importantly, the missing
six paragraphs do not deal with the big ideas in computer programming but with
the minutia of Java syntax. I found this same thing happening throughout the
book.  Whole paragraphs simply disappear from the Python version of the text
because Python's much clearer syntax renders them unnecessary.

Using a very high-level language like Python allows a teacher to postpone
talking about low-level details of the machine until students have the
background that they need to better make sense of the details. It thus creates
the ability to put first things first pedagogically. One of the best examples
of this is the way in which Python handles variables. In Java a variable is a
name for a place that holds a value if it is a built-in type, and a reference
to an object if it is not. Explaining this distinction requires a discussion
of how the computer stores data. Thus, the idea of a variable is bound up with
the hardware of the machine. The powerful and fundamental concept of a variable
is already difficult enough for beginning students (in both computer science
and algebra).  Bytes and addresses do not help the matter. In Python a variable
is a name that refers to a thing. This is a far more intuitive concept for
beginning students and is much closer to the meaning of variable that they
learned in their math courses. I had much less difficulty teaching variables
this year than I did in the past, and I spent less time helping students with
problems using them.

Another example of how Python aids in the teaching and learning of programming
is in its syntax for functions. My students have always had a great deal of
difficulty understanding functions. The main problem centers around the
difference between a function definition and a function call, and the related
distinction between a parameter and an argument. Python comes to the rescue
with syntax that is nothing short of beautiful. Function definitions begin with
the keyword ``def``, so I simply tell my students, When you define a function,
begin with ``def``, followed by the name of the function that you are defining;
when you call a function, simply call (type) out its name. Parameters go with
definitions; arguments go with calls. There are no return types, parameter
types, or reference and value parameters to get in the way, so I am now able to
teach functions in less than half the time that it previously took me, with
better comprehension.

Using Python improved the effectiveness of our computer science program for all
students. I saw a higher general level of success and a lower level of
frustration than I experienced teaching with either C++ or Java. I moved faster
with better results. More students left the course with the ability to create
meaningful programs and with the positive attitude toward the experience of
programming that this engenders.


Building a community
--------------------

I have received email from all over the globe from people using this book to
learn or to teach programming. A user community has begun to emerge, and many
people have been contributing to the project by sending in materials for the
companion Website at <http://openbookproject.net/pybiblio>.

__With the continued growth of Python, I expect the growth in the user community
to continue and accelerate. The emergence of this user community and the
possibility it suggests for similar collaboration among educators have been the
most exciting parts of working on this project for me. By working together, we
can increase the quality of materials available for our use and save valuable
time. I invite you to join our community and look forward to hearing from you.
Please write to me at [jeff@elkner.net](mailto:jeff@elkner.net>)__.

Jeffrey Elkner\
Governor's Career and Technical Academy in Arlington\
Arlington, Virginia\


    
The Rhodes Local Edition (RLE) (Version of August, 2012)
--------------------------------------------------------

By Peter Wentworth

<aside>
**A word of thanks ...**
 
We switched from Java to Python in our introductory courses in 2010.
So far we think the results look positive. More time will tell.

This predecessor to this book was a great starting point for us, 
especially because of the liberal permission
to change things.  Having our own in-house course notes or handouts
allows us to adapt and stay fresh, rearrange, see what works, 
and it gives us agility.  We can also ensure that every student in the course 
gets a copy of the handouts --- something that doesn't always happen if we prescribe
costly textbooks. 

Many thanks to all the contributors and the authors for making their hard 
work available to the Python community and to our students.
</aside>

A colleague and friend, Peter Warren, once made the remark that
learning introductory programming is as much about the environment
as it is about the programming language. 

I'm a big fan of IDEs (Integrated Development Environments).  
I want help to be integrated into my editor, as a first-class citizen,
available at the press of a button. I want syntax highlighting.
I want immediate syntax checking, and sensible autocompletion. I'd like
an editor that can fold function bodies or regions of code away, 
because it promotes and encourages how we build mental abstractions.

I'm especially keen on having a single-stepping debugger and 
breakpoints with code inspection built in.  We're trying to
build a conceptual model of program execution in the 
student's mind, so I find most helpful for teaching to 
have the call stack and variables explicitly visible, 
and to be able to immediately inspect the result of executing a statement.

My philosophy, then, is not to look for a language to teach, but
to look for a combination of IDE and language that are packaged
together, and evaluated as a whole. 

I've made some quite deep changes to the original book to reflect
this (and various other opinionated views that I hold), and I have no doubt
that more changes will follow as we mature our course.  

Here are some of the key things I've approached differently:

* Our local situation demands that we have a large number of service course
  students in an introductory course of just 3 weeks, and then we get
  another semester of teaching with those going into our mainstream program.
  So the book is in two parts: we'll do the first five chapters in the
  big "get your toes wet" course, and the rest of the material in a separate
  semester. 
* We're using Python 3.  It is cleaner, more object oriented, and has fewer
  ad-hoc irregularities than earlier versions of Python. 
* We're using PyScripter as our IDE, on Windows.  And it is hardwired into
  parts of these notes, with screenshots, etc. 
* I've dropped GASP. 
* For graphics we start with the Turtle module.  
  As things move along, we use PyGame for more advanced graphics. 
* I've introduced some event-driven programming using the turtle.  
* I have tried to push more object-oriented notions earlier, without asking
  students to synthesize objects or write their own classes.  So, for example,
  in the chapter about the turtle, we create multiple instances of turtles, 
  talk about their attributes and state (color, position, etc), and we favour 
  method-call style to move them around, i.e.  ``tess.forward(100)``.  Similarly,
  when we use random numbers, we avoid the "hidden singleton generator"
  in the random module --- we prefer to create an instance of a generator, and 
  invoke methods on the instance.
* The ease of constructing lists and the ``for`` loop seem to be winners in Python,
  so rather than use the traditional command-line ``input`` for data, I've 
  favoured using loops and lists right up front, like this:
  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python .numberLines}
friends = ["Zoe", "Joe", "Bill"]
for f in friends:
    invitation = "Hi " + f + ".  Please come to my party on Saturday!"
    print(invitation)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        
This also means that I bumped ``range`` up for early exposure.  
I envisage that over time we'll see more opportunities to exploit "early
lists, early iteration" in its most simple form. 

* I dumped ``doctest``: it is too quirky for my liking.  For example,
  it fails a test if the spacing between list elements is not precisely the same
  as the output string, or if Python prints a string with single quotes, but
  you wrote up the test case with double quotes. 
  Cases like this also confused students (and instructors) quite badly: 
  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.python .numberLines}

def addlist(xs):
    """
    >>> xs = [2,3,4]
    >>> addlist(xs)
    9
    """
    return
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you can explain the difference in scope rules and lifetimes 
between the parameter ``xs`` and the doctest variable ``xs`` elegantly, 
please let me know.  Yes, I know doctest creates its own scope behind
our back, but it is exactly this black magic that we're trying to avoid.  
From the usual indentation rules, also looks like the doctests are nested
inside the function scope, but they are not. 
Students thought that the parameter
had been given its value by the assignment to ``xs`` in the doctest!    

I also think that keeping the test suite separate from the functions under test
leads to a cleaner relationship between caller and callee, and gives a better
chance of getting argument passing / parameter concepts taught accurately.  

There is a good unit testing module in Python, (and PyScripter offers integrated
support for it, and automated generation of skeleton test modules), but it
looked too advanced for beginners, because it requires multi-module concepts.  

So I've favoured my own test scaffolding in Chapter 6 (about 10 lines of code) 
that the students must insert into whatever file they're working on.
  
* I've played down command-line input / process / output where possible.  Many
  of our students have never seen a command-line shell, and it is arguably
  quite intimidating.     

* We've gone back to a more "classic / static" approach to writing our own classes 
  and objects. Python (in company with languages like Javascript, Ruby, Perl,
  PHP, etc.) don't really emphasize notions of "sealed" classes or "private" members, 
  or even "sealed instances".  
  
  So one teaching approach is to allocate each instance as an empty container,
  and subsequently allow the external clients of the class to poke new members 
  (methods or attributes) into different instances as they wish to.  
  It is a very dynamic approach, but perhaps not one that encourages thinking in 
  abstractions, layers, contracts, decoupling, etc. 
  It might even be the kind of thing that one could write one of 
  those *"x,y,z ... considered harmful"* papers about. 
  
  In our more conservative approach, we put an initializer into every class,
  we determine at object instantiation time what members we want, and we initialize 
  the instances from within the class.  So we've moved closer in philosophy 
  to C# / Java on this one.
  
* We're moving towards introducing more algorithms earlier into the course.  Python
  is an efficient teaching language --- we can make fast progress.  But the gains
  we make there we'd like to invest into deeper problem solving, and more complex 
  algorithms with the basics, rather than cover "more Python features". Some
  of these changes have started to find their way in this version, 
  and I'm sure we'll see more in future.

* We're interested in issues around teaching and learning. Some research indicates
  that "intellectual playfulness" is important.  The study referenced in the Odds-and-ends
  workbook at the end just didn't seem to have anywhere sensible to go in the book, yet
  I wanted it included.  It is quite likely that we'll allow more issues like this to
  creep into the book, to try to make it more than just about programming in Python.   

