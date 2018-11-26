School Data Exercises
---------------------
Fork the [SchoolData repl](https://repl.it/@mcuringa/SchoolData) <https://repl.it/@mcuringa/SchoolData>
to complete these exrcises.

1. Write a function using the **search** pattern that finds
   the finds the highest average test score for a result where
   at least a minimum number of students took the exam. You can modify
   `findHighestAvgScore` so that it has a second parameter, `minStudents`.
2. Using the same **search pattern** write a function that finds the lowest
   test result, it should also have a parameter for `minStudents`.
3. Use the **filter pattern** to write a function `findByBorough(data, boro)`
   that returns an array of test results for schools in borough `boro`.
4. Consider the data given. Write a reporting function (and other necessary code)
   that explores a problem and reports an interesting result. You may use
   `reportAveragesForFirstCohort` as an example for the type of report.

### Bonus questions (for 1 point of extra credit each)

1. Find the 5 best test results in the data set. Return an array of the
   test result objects for these schools. There should be a minimum number of
   students tested to qualify (specified by a function parameter).

2. Write a function `schoolAverages(data)` that returns an array of
   test report objects with exactly one object for each school. `grade`
   and `year` should be set to `null` because they don't make sense
   in this summary. `numTested` should be the total students tested
   for that school in the given `data`. `level[1-4]` should represent
   the total students score at that level across years and grades.
   And `avg` should have the average (1..4) score
   for all years and grades.

3. Write a function `boroAverages(data, year)` that returns an array of
   objects. The objects must have the following properties:

   - `avg`: the average test score for the borough (1..4)
   - `numTested`: the total of all students tested
   - `boro`: the name of the borough
