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


[View the "Tip Calculator" repl](https://repl.it/@mcuringa/tip-calculator)

### Case Study: school-report.js {.schoolReport}

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

<aside data-line-number="49">

The `import` keyword allows a Javascript file to import
functions and variables from another Javascript file. `import`
helps us write modular code and reusable _code libraries_.

</aside>


<aside data-line-number="30">

The ``calcTip`` function defines 2 **parameters**:
`bill` and `pct`. These parameters become
variables within the **function body**. Line 30 uses
**arithmetic operators** (multiplication here) to
calculate a new value and store it in the `tip` **variable**.
`tip` is converted to a float using the **built-in function**
`Number.parseFloat`. Finally, the rounded tip amount is returned.


</aside>

<aside data-line-number="43">

``askBillAmt`` is a **fruitful function** because
it has a **return statement**. It uses the
**built-in function** `window.prompt` to ask for data from the
user of the program. When this function is called, it returns
the amount of the bill as a float, because it represents money.

</aside>

<aside data-line-number="61">

``money`` is a small helper function that we
wrote to re-use the task of formatting numbers
as currency with a dollar sign and two decimal places.
It is called 3 times in ``showResults`` with
different **arguments**.

</aside>




<aside data-line-number="70">

``showResults`` defines 3 **parameters** which are used
to pass in all of the data needed to show the results
of the tip calculation. Notice that the `console.log` statements
use the **+ operator** to <abbr title="join together">concatenate</abbr>
strings. Because we are joining **string literals** with variables of
type `number`. The ``+`` operator automatically converts the numbers to strings.

</aside>

<aside data-line-number="90">

``main`` is the first function **called** for
this program. It maintains the executive control of the
program, calling other functions in sequence and passing
data between functions. All of the other functions have
been defined, but are waiting to be called.

</aside>
