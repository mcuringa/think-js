<aside id="coding-style">

**Coding Style**

Now that you are about to write longer, more complex pieces of Python,
it is a good time to talk about coding style. Most languages can be
written (or more concise, formatted) in different styles; some are more
readable than others. Making it easy for others to read your code is
always a good idea, and adopting a nice coding style helps tremendously
for that.

For Python, PEP 8 has emerged as the style guide that most projects
adhere to; it promotes a very readable and eye-pleasing coding style.
Every Python developer should read it at some point; here are the most
important points extracted for you:

- Use 4-space indentation, and no tabs.
- 4 spaces are a good compromise between small indentation (allows
  greater nesting depth) and large indentation (easier to read). Tabs
  introduce confusion, and are best left out.
- Wrap lines so that they don’t exceed 79 characters.
- This helps users with small displays and makes it possible to have
  several code files side-by-side on larger displays.
- Use blank lines to separate functions and classes, and larger blocks
  of code inside functions.
- When possible, put comments on a line of their own.
- Use docstrings.
- Use spaces around operators and after commas, but not directly inside
  bracketing constructs: a = f(1, 2) + g(3, 4).
- Name your classes and functions consistently; the convention is to use
  CamelCase for classes and lower_case_with_underscores for functions and
  methods. Always use self as the name for the first method argument (see
  A First Look at Classes for more on classes and methods).
- Don’t use fancy encodings if your code is meant to be used in
  international environments. Python’s default, UTF-8, or even plain ASCII
  work best in any case.
- Likewise, don’t use non-ASCII characters in identifiers if there is
  only the slightest chance people speaking a different language will read
  or maintain the code.

</aside>
