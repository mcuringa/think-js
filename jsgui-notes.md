Code Listing: JS GUI Demo {.codeListing}
-------------------------------------------------

### Complex compositions with containers

Web pages, like software programs, can be made more flexible using
the **decomposition** strategy of breaking the problem (the page layout)
into smaller parts. HTML offers a number of **block elements** that
contain other elements (including blocks). Using Javascript, we can write
functions that return a group of elements in one of these containers.
We can make our code more abstract, where functions
can use the same layout for different content. Alternatively, we can
make functions that are re-usable, such as returning headers, footers,
and navigation elements that can be used across several web pages.

The examples in this code listing use many, but not all of the
layout features of JS GUI.

- [View the "JS GUI Demo" repl](https://repl.it/@mcuringa/JSGuiDemo)
- [View the "JS GUI Demo" website](https://jsguidemo.mcuringa.repl.co/)

### Case Study: JSGUI Demo {.jsguidemo .codeNotes}

<aside data-line-number="4">

`import` the JS GUI module (aka package or library) into a variable
called `jsgui`. We could call this something else. Perhaps a shorter
name like `gui` or even `g` would also make sense, since we use
the package name in so many nested calls below. `"./lib/jsgui.js"`
tells JS to look for the library in a **directory** (folder) called
`lib` and a file named `jsgui.js`.

</aside>

<aside data-line-number="11">

The `animalDetail()` function creates a consistent
layout of all of the content passed in to its parameters.
The `<div>` element created with `div()` is a generic
HTML container.

</aside>

<aside data-line-number="21">

Create a `<section>` container, `sec` to hold
all of the elements in the cats and dogs section.

</aside>

<aside data-line-number="19">

Create images for the cat and dog pictures. The first argument
to `img()` is the path or url of the image file. Web images should be
of type png, gif, or svg. Types like psd, bmp, tiff, might not show up
on the web.

We call `animalDetail()` twice, with different arguments.

</aside>


<aside data-line-number="32">

`grid()` makes a special grid layout container. A grid can have
between 1-12 columns. Add elements to a specific grid column with
`addToGrid(grid, colNumber, ...items)`

After creating the grid, we append all of the items to our section
container and then return it.

</aside>

<aside data-line-number="50">

First, we create `animalsOnScreen`, a regular Javascript array with a set of
data. Each item of the array is an array (of strings).

Call `table(data, cols)`: `animalsOnScreen[1-4]` are the data
and `animalsOnScreen[0]` contains the column header information.

</aside>

<aside data-line-number="69">

A `<header>` is a type of HTML container that typically
contains the content for a page or section header.

</aside>


<aside data-line-number="79">

`about` is a string that contains special formatting marks in a format
called **markdown**. Markdown allows us to easily turn plain text into
Javascript. `jsgui` converts a markdown formatted string to html with
`md()` [Learn how to write markdown here](https://guides.github.com/features/mastering-markdown/).

</aside>


<aside data-line-number="88">

``main`` pulls all of our sections together in the order they will be displayed
on the page. `add()` takes multiple arguments of elements to display, separated
by commas (kind of like the built in `console.log()`)

</aside>
