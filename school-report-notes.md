Code Listing 2: School Test Data Report {.codeListing}
-------------------------------------------------

### New York City Schools Data

The New York City public school system, run by the NYC Department of Education
(DOE). Is the largest public school system in the United States, with over
1 million students in more than 2,000 schools. The schools are tasked with
educating a diverse population, with almost 75% of students coming from
economically disadvantaged families.

It is home to some of the best schools in the country, with selective schools
like Stuyvesant High School and Bronx Science, but also faces chronically
low performance in many of its schools. The schools face criticism and
controversy surrounding a variety of issues. Black and Latinx students
face the highest levels of segregation in the country; contributing to
significant inequity within schools in New York City and with other
New York State public schools in the wealthy suburbs that ring the city.

Some of the initiatives meant to address these challenges have proven
as controversial as the underlying problems. Charter schools --- public
schools with fewer restrictions, operated by private organizations ---
were introduced to address some of these issues by providing "school choice."
Charters, however, have been criticized for failing to meet students with
disabilities and English Language Learners; they are seen by some as more of
an attack on public unions than as education initiatives, and as fundamentally
flawed by pitting schools against each other.

Recent desegregation attempts in NYC's top performing schools has been
criticized for unfairly impacting Asian American students, who are well
represented in the top schools, but themselves often come from poorer, immigrant
families.

Data analysis, data science, and data-driven decision making has been gaining
momentum as one tool in improving the NYC educational system through greater
insight and accountability. As part of a larger open data initiative, the City
publishes a lot of data about its schools and its students. Among other data,
the City releases **school-level test results** for Math and English Language
Arts (ELA). These results can be analyzed for different demographic groups,
including by race/ethnicity, gender, income, students with disabilities, and
English Language Learners. The data analyzed in this case study reports on the
ELA test results for the years 2013-2017, for "all students", at the school
level. The results reported at New York State statewide assessments given in
grades 3-8 (to, generally, students age 8-13). The data file
(`ela-all-2013_18.js`) is based on [data released on the NYC DOE
website](https://infohub.nyced.org/reports-and-policies/citywide-information-and-data/test-results). The Math and ELA exams are aligned to the Common Core standards.
The ELA exam includes reading passages and multiple choice, short answer, and
extended answer (essay) responses. Student results are categorized as a 1, 2, 3, or 4
where 1 is the lowest result and 4 is the highest result. Students scoring 3 or
4 are considered proficient in the subject area.

Lastly, while the tests are administered to every student in the public schools
there has been a significant resistant to the tests in some schools and districts,
statewide, in the form of "opting out" where students and parents choose not to
participate in the testing due to concerns about how test results are used to
punish schools, teachers, and students; questions over the validity of the measures;
and beliefs that high stakes testing corrupts learning and siphons resources
from more authentic and valuable educational goals.

The functions annotated in `school-report.js` demonstrate some common
programming patterns for working with arrays of data, and array traversal ---
using a `for` loop to iterate over each item in an array. Notice that all of
the functions that work with the `testData` are **pure functions**. They
do not have **side effects** --- they don't modify any variables outside
of the function, only communicating through input function parameters and
output with the return statement. To make it easier to understand these
pure functions, each function has a comment header which indicates what
values and types of data are expected for the function parameters and
are returned by the return statement.

The set of reporting functions at the end of program, however, are not
pure functions. They provide user output using `console.log`. This
printing to the console is a side effect of the function.

[View the "School Data Report" repl](https://repl.it/@mcuringa/SchoolData)

### Case Study: school-report.js {.schoolReport .codeNotes}

<aside data-line-number="1">

The extensive header comment at the top of this program describes
the type of data that's being analyzed. The program analyzes an array
of objects, where each element in the array represents the test test
results for a single grade level, for a single school, in a given
school year. During **array traversal**, properties of the data object
are accessed with the **dot operator**. If the example data in the
header were accessed at element `i` of variable `data`, then
`data[i].name` would produce "P.S. 009 Teunis G. Bergen"

</aside>

<aside data-line-number="33">

This is our first introduction to creating our own
Javascript **objects**. The object literal notation used here
creates a new object with _curly braces_ (`{}`). Objects consist
of **key-value pairs**. The **key**, on the left side must be a string
or valid Javascript identifier. The **value**, after the colon (`:`),
can be a value of any Javascript type -- a number or string, an object
like `Date`, an array, even a function. We'll learn more about objects
and **Object Oriented Programming** (OOP) later in the book.

</aside>

<aside data-line-number="49">

The `import` keyword allows a Javascript file to import
functions and variables from another Javascript file. `import`
helps us write modular code and reusable _code libraries_.

</aside>

<aside data-line-number="56">

`totalTested` returns the number of students who were administered an exam
in the total data set. This is a simple example of the **counter pattern** ---
which works like this:

1. initialize the counter variable to zero (line 62)
2. traverse the array and increment the counter during each loop (line 74)
3. return the total (line 77)

</aside>

<aside data-line-number="73">

`totalTestedGrade` gives an example of the **counter pattern** with a conditional
check. In this case the `total` is only incremented if a condition is met in
the loop body during array traversal. This pattern is good to count things
that match a given set of criteria --- in this case it would allow us to find
the number of 4th grade students who sat for the ELA exam in the data set.

</aside>


<aside data-line-number="98">

`averageTestScores` uses the **counter pattern** with 2 counters to enable us to
find the average for test scores. To make a real example, we also have a
**compound Boolean expression** as our criteria for when to increment the
counters. Because this case study works with real data (not a simplified data
set curated for the book), we need to add the condition `&& testResults.avg !== NaN`
to our test. Some of the records in our data set do not have valid averages,
indicated by `NaN` rather than a float. In those cases, we just skip the record,
even if the `grade` and `year` match our targets.

The basic algorithm for finding the mean average of a _set of
numbers_ is to (1) sum the numbers, (2) divide the sum by the number of items,
`n`.

In this function, the _set of numbers_ to sum up are all of the `testResults`
that match the target `grade` and `year` specified by the function parameters.
We keep track of this sum in the counter variable, `sum`. Since we don't know
how many test results meet our criteria before we begin the array traversal,
we declare a second counter, `numResults`. `numResults` tracks how many items
`n` we've summed up.

When the loop completes, we find the average by dividing the sum
by the number of rest results, `sum / numResults`.

</aside>


<aside data-line-number="124">

We move away from the counter pattern to look at a
**search pattern**. `findHighestAvgScore` searches through the array of data to
locate the highest average test score in the set. Before the loop begins, we
must declare a result variable (`highestResult` here) that will hold the best
match for our search term. We iterate through the elements of the array looking
for the best match for our search result. In this case (and this often works),
we initialize the result variable to the first item in our array (`data[0]`).
When we traverse the array, we start at element 1 rather than 0. If, by chance,
the zeroeth element had the highest score, it will still be return at the end
of our `for` loop.

`if` the current element in the array (`data[i]`) is a better match for our
search than the current value of the result variable (`highestResult`), then
that element becomes the new best match for our search result. Finally, we
return our result.

Notice that in this case of working with school data, it's possible that
several schools test results will be tied for the highest average score,
especially if they scored an average of `4`. The way our algorithm is
coded the "best match" here will be the first one found. If we changed
line 139 to be `data[i].avg >= highestResult.avg`, we would return
the _last_ match found instead. We can't do an **realy return** in this search
pattern because we must test every element in `data` to see if any has a higher
score than the current best match.

</aside>

<aside data-line-number="157">

`filterBetterThanLimit` represents a **filter pattern**. The array filter
patterns works like this:

1. initialize the results array to be an empty array
2. iterate through the search array and add any items matching the filter
   criteria to the results array
3. return the results after the loop completes

In this example, we call the results array `matchingResults`, and we use
the `limit` function parameter as the condition to see if a data item
should be included in the results `data[i].avg > limit`.

</aside>

<aside data-line-number="181">

`reportAveragesForFirstCohort` demonstrates how one function
can be used multiple times with different arguments. This function
reports the test results of a single cohort of students as they
travel through the New York City school system. It reports the 4th
grade results from 2013, the first year the current test format was
administered, and then reports the results for the same group of
students in each subsequent year through the 2017-18 academic year.

When the program is run, it indicates that the students improved over
the time analyzed, scoring on average 2.02 in 2013 and 2.40 in 2017.

</aside>


<aside data-line-number="204">

`topPerformers` reports the results of our filtering funcion. It uses
3.9 as the argument to `limit`, so the results only includes schools
that had test results greater than 2.9. Because the `results` are an
array, we traverse the (filtered) array to report the results. The
`console.log` statement uses a template string with backticks
to easily format the output. Because we use the current `results` element
so often in the report, we created an **alias** of the object on line
210, with the code `let r = results[i];`. This allows us to insert the
short variable name `r` (for result) easily into our template string.

</aside>

<aside data-line-number="217">

Finally, we define and then call our `main` function to begin the program.
`main` outputs some of the results directly, and divides some of the more
complex reporting into distinct functions.

</aside>
