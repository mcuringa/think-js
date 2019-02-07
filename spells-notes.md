# React Web Programming
Code Listing: SpellCaster {.codeListing}
-------------------------------------------------

### Reacting to user interaction

This code listing steps through the process of making a moderately complex
web user interface that _reacts_ to user actions. It presents a list of
spells and allows the user to _filter_ the list by checking/unchecking
a series of checkbox form elements. The code must keep track of which
boxes are checked in the React Object **state**. The list of spells must
update dynamically when changes are detected. This is what we mean
by a _reactive interface_.

- [View the SpellBook repl](https://repl.it/@mcuringa/SpellBookv2)
- [View the SpellBook live website](https://spellbookv2--mcuringa.repl.co/)

### Case Study: SpellCaster Spells {.jsguidemo .codeNotes}

<aside data-line-number="1">

We see a new `import` here from the `lodash` library. [lodash](https://lodash.com/docs/4.17.11)
has many useful functions for working with arrays, maps, collections,
objects, and functions. In this code, we are going to use it primarily
for _sorting_ our data more easily.

</aside>

<aside data-line-number="11">

An objects **constructor** is called once, when the object is first created
or _instantiated_. For `React Component` objects, we call `super()` to
trigger the generic `Component` constructor, then initialize our default
values for the **state**.

`filters` will let us know which spells to display, based on the character
classes that are active (e.g. show only spells that clerics and druids can use).
All of the items are `true` to start so that all spells are shown.

</aside>

<aside data-line-number="29">

Our objects methods (aka member functions) share data and communicate with each other
through the special `this` object. `this` refers to this instance of `SpellTable`.
If we don't `bind()` this to each of our functions, those functions can't
access object data such as `state`, `props`, or other methods.

</aside>

<aside data-line-number="34">

The `componentWillMount()` method is inherited from React `Component`. It is called before the component is displayed. It's the
best place to load the data that our component will need. Here we take the
spell objects that we imported from `"./data/spells.json"` and we sort
them by level. We call the `setState()` function that is part of `React Component`
in order to update the state and trigger our `render()` function if needed.

</aside>


<aside data-line-number="39">

`toggleFilter()` gets called when one of our filter checkboxes is
checked or unchecked. It changes the `state` of the entry in the `filters` map
to `true` or `false` (the logical opposite of whatever it currently is).

</aside>

<aside data-line-number="45">

`clearFilters()` sets all of the filters to `false`. No spells will be shown,
but it makes it easier for the user to select just one character class.

</aside>

<aside data-line-number="53">

`allCharClasses()` sets all of the filters to `true` so that all spells are shown.

</aside>

<aside data-line-number="61">

All React Components _must_ define a `render()` method. This returns the JSX/string
component that is rendered to the screen (or `null` if nothing is to be displayed.)
Our render method is building an HTML table (with Bootstrap css classes) that
shows all of the spells that are active. It defines `th()` as an internal
function to map html `th` elements to an array of strings. This creates the
table header.

</aside>


<aside data-line-number="75">

We look up the list of active filters from the `state` and then call
`filterSpellsByCharClass()` (see below) to find the `spells` which should be active.
We map those spells to `SpellRow` components calling `spells.map()`
</aside>


<aside data-line-number="85">

We have two buttons that make it easier to _clear_ or _check all_ of the
filters. They call `this.clearFilters()` and `this.allCharClasses()` (see above).

We call the `IconCheckBox` Component function (below) to create a checkbox for each D&D
character class. When any of these boxes are changed (checked or unchecked),
passing `toggleFilter()`, the active status, and the character class as properties.

</aside>

<aside data-line-number="100">
Finally, we display the HTML table, with headers and rows.

</aside>


<aside data-line-number="108">
On line 108 we close `SpellTable`, the only React class Component in
this code.
</aside>


<aside data-line-number="111">
`filterSpellsByCharClass()` is a plain old filter function (and a pure one at that),
which follows our well-known pattern from the Arrays and Maps sections of this
textbook. It takes the entire list of spells and the list of active character
classes as inputs and returns the filtered list of spells that belonging to
one of the active character classes.
</aside>

<aside data-line-number="135">
`IconCheckBox()` is a reusable React component function that returns a form
checkbox element the corresponding character class icon. The inner function,
`toggle()` _wraps_ the `onChange` property function and passes the correct
character class string argument so `onChange` knows which class to toggle.
</aside>

<aside data-line-number="151">
`SpellRow()` is a reusable React component function that returns the JSX
for an HTML table row. Note that `SpellRow` doesn't use a `properties` function parameter,
but rather takes the `spell` data object as its only argument. This makes it easier
to use with `Array.map()`.

The inner `check()` function returns the `ClassIcon`
for a character class, or `null` if this spell isn't available to the class.
</aside>

<aside data-line-number="186">
The `SpellTable` is exported so it can be used as a Route component by
the navigation system (see the full code from the link above).
</aside>
