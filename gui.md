Web GUIs
========

GUI: Graphical User Interface
-----------------------------

A GUI or _graphical user interface_ is the main way that most of us
interact with computers most of the time. The standards for graphical
computing are well known: clicking buttons and icons, scrolling windows,
reading images and text, etc. When we created our Turtle programs, we
were programming GUIs.

Most of the examples in this text, however have used _text interfaces_
or Command Line Interfaces (CLI). With a CLI, the user receives computer
output through text on the screen, and sends input to the program by
entering text. In this chapter, we introduce a Javascript-based library
for creating GUIs web applications.

How the web works (the super brief version)
-------------------------------------------

There are three computer languages that form the base for any web page.
They are HTML, CSS, and Javascript. Hypertext markup language (HTML)
describes the type of content on a web page. HTML describes many different types of content. You are familiar with most of them:
- text: titles, paragraphs, lists, etc
- media: images, videos, audio, animation graphics
- links: that allow navigation to different areas of the web
- form elements: buttons, input boxes, checkboxes, and other elements that users to input information
- tables: that display grids of information

Other HTML elements are more structural, they divide web pages into sections (like headers and footers).

Cascading style sheets (CSS), control the layout of the content described by the
HTML. CSS can be used to change the font or text size, add background images to
elements, space and size different containers, and, generally create useful and
aesthetic interfaces. A single HTML document can work with different CSS styles,
allowing it to adapt to different use cases. One set of styles can control
layout for mobile phones, another for laptops, and yet another for print.

Javascript is the only **programming language** of the three languages discussed
here. It's the only of the group that uses variables and controls the flow of
execution with loops and Boolean conditions. At this point in the book, we are
familiar with many of the programming aspects of Javascript. For the web,
Javascript can interact with user input, and dynamically change the content and
HTML structure on a page. While some, small websites are **static** --- meaning
that all of the content and HTML is written by hand in a text editor like the
one in repl.it --- most website pull the content from databases or other data
files. We have begun to see how Javascript can interact with larger sets of
data, now we will see how Javascript can be used to display this data on the
web, to create **dynamic** websites that change when the data is changed.

JS GUI
------

JS GUI is a Javascript library or module that is being written to accompany
the examples in this book. There are many powerful Javascript frameworks,
like React (developed by Facebook) and Angular (developed by Google), used
by professional software developers to create complex, interactive web
applications. However, these professional frameworks aren't necessarily
the best or easiest to start with.

To use JS GUI, you need the following:

- a website [like this demo repl](https://repl.it/@mcuringa/JSGuiDemo)
- an html page that runs your Javascript file (e.g. `index.html`)
- a local version of the `jsgui.js` library

The following code examples assume such a set-up.

Basic Elements
--------------

JS GUI provides a series of functions for creating and adding
graphical elements to a web page. After importing the library,
you can easily start adding elements. The following code creates
a web site with the text, _Hello, world_.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines}
import gui from "./lib/jsgui.js";

gui.add("Hello, world");
~~~~~~~~~~~~~~~~~~~~~~~~~~~~


JS GUI provides functions to create titles, (level 1-6), images,
and paragraphs of text. New lines can be created with `br()` and
horizontal rules with `hr()`. This code uses titles, text, images,
breaks, and rules.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.javascript .numberLines}
import gui from "./lib/jsgui.js";

let catPic = gui.img("cat.jpg", "a black cat");
let dogPic = gui.img("dog.jpg", "a shaggy Newfoundland dog");

gui.add(gui.h1("Cats and Dogs"));
gui.add(gui.p("Do you prefer cats or dogs?"));

gui.add(gui.h4("Cat people"));
gui.add(catPic);
gui.add(gui.br());
gui.add("Some people like cats. Cats are quiet, playful, soft, and sweet.");

gui.add(gui.br());
gui.add(gui.hr());
gui.add(gui.br());

gui.add(gui.h4("Dog people"));
gui.add(dogPic);
gui.add(gui.br());
gui.add("Some people like dogs. Dogs are loyal friends and companions, sad to see you leave and ecstatic when you get home.");

~~~~~~~~~~~~~~~~~~~~~~~~~~~~
