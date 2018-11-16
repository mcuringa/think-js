/**
 * File: school-report.js
 * Demonstrates common patterns for using for loops
 * and arrays, using the NYC school data file and the
 * school data object.
 *
 * Properties of TestResult objects:
 *
 * - id: string, a unique id that has the school district`, boro,
 *   and school number,  ex: "01M015"
 * - name: string, the full school name, ex:"P.S. 015 Roberto Clemente"
 * - grade: integer, the grade level for the test results, in the range 3..8
 * - year: integer, the year the test was taken. The data includes all
 *   results from  2013-2017
 * - numTested: integer, the number of students taking the test at this
 *   school-grade-year
 * - level1: integer, the number of students scoring a one (1), the lowest level
 * - level2: integer, the number of students scoring a two (2)
 * - level3: integer, the number of students scoring a three (3)
 * - level4: integer, the number of students scoring a four (4), the highest level
 * - district: integer, the NYC DOE school district, districts are smaller
 *   geographic areas consisting of several schools, with their own, more
 *   local administration. They are numbered 1-32, with disctrict 75
 *   as a citywide special district designed to help students with disabilities
 *   and special needs
 *   boro: string, one of the five boroughs:
 *   Manhattan, Bronx, Brooklyn, Queens, Staten Island
 * - avg: float, the average score for this school, for the given year
 *   and grade level.  is NaN if the results are not valid
 *
 * The functions in this program work on test data stored as an array
 * of TestResult data objects. An example of a single object:
 * {
 *   "id": "13K009",
 *   "name": "P.S. 009 Teunis G. Bergen",
 *   "grade": 4,
 *   "year": 2016,
 *   "numTested": 107,
 *   "level1": 20,
 *   "level2": 28,
 *   "level3": 22,
 *   "level4": 37,
 *   "district": 13,
 *   "boro": "Brooklyn",
 *   "avg": 2.710280373831776
 * },
 */

import testData from "./data/ela-all-2013_18.js";



/**
 * totalTested finds the total number of students
 * tested in data set `data`
 * This is an example of the counter pattern.
 * @param data, an array of data objects where each
 *        objcect _must_ have a property `numTested`
 * @return int, the sum of all test takers
 */
function totalTested(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i].numTested;
  }
  return total;
}

/**
 * totalTestedGrade finds the total number of students
 * tested in the data set in a give grade level.
 * This is an example of the counter pattern
 * with a conditional check.
 * @param data, an array of data objects where each
 *        objcect _must_ have the properties
 *        `numTested` and `grade`
 * @param grade, an int in the range 3..8 to indicate
 *        which grade to search for
 * @return int, the total number students of students tested
 *         in the given grade
 */
function totalTestedGrade(data, grade) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].grade === grade) {
      total += data[i].numTested;
    }
  }
  return total;
}

/**
 * averageTestScores finds the average test scores
 * in the dataset `data` for a single `grade`
 * in a single test `year`.
 * It's a more complex example of a real solution
 * programmed using the counter pattern.
 * @param data, an array of data objects where each
 *        objcect _must_ have the properties
 *        `numTested` and `grade`
 * @param grade, an int in the range 3..8 to indicate
 *        which grade to search for
 * @param year, an int
 * @return float, the mean average test result
 *         (in the range 0..4) of all results that match
 *         the `grade` and `year` criteria
 */
function averageTestScores(data, grade, year) {
  let sum = 0;
  let numResults = 0;
  for (let i = 0; i < data.length; i++) {
    let testResults = data[i];
    if (testResults.grade === grade
        && testResults.year === year
        && testResults.avg !== NaN) {
      sum += testResults.avg;
      numResults++;
    }
  }

  return sum / numResults;
}

/**
 * findHighestAvgScore searches through
 * the test results in `data` and returns
 * the test result data object with the highest
 * number in the `avg` property.
 * @param data, an array of data objects where each
 *        object _must_ have the property
 *        `avg` to indicate the average test
 *        score for that data record
 * @return object, the test result data object with
 *         the highest average score in the dataset
 */
function findHighestAvgScore(data) {
  let highestResult = data[0];
  for (let i = 1; i < data.length; i++) {
    if (data[i].avg > highestResult.avg) {
      highestResult = data[i];
    }
  }
  return highestResult;
}

/**
 * filterBetterThanLimit returns a sub-array
 * based on array `data`, with only the test result
 * elements of data where the average test score
 * is higher than `limit`.
 * @param data, an array of data objects where each
 *        object _must_ have the property
 *        `avg` to indicate the average test
 *        score for that data record
 * @param limit, a float in the range 0..4 to indicate
 *        the lower limit for test results to return
 * @return array, an array of test result objects, all of
 *         which will have a higher average test score
 *         than `limit`
 */
function filterBetterThanLimit(data, limit) {
  let matchingResults = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].avg > limit) {
      matchingResults.push(data[i]);
    }
  }
  return matchingResults;
}

// _________________________________________________
// ============================= REPORTING FUNCTIONS
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

function header(title) {
  console.log("\n------------------------------------");
  console.log(title);
  console.log("------------------------------------\n");
}

function reportAveragesForFirstCohort() {

  let r13 = averageTestScores(testData, 4, 2013).toFixed(2);
  let r14 = averageTestScores(testData, 5, 2014).toFixed(2);
  let r15 = averageTestScores(testData, 6, 2015).toFixed(2);
  let r16 = averageTestScores(testData, 7, 2016).toFixed(2);
  let r17 = averageTestScores(testData, 8, 2017).toFixed(2);

  header("TREND OF SCORES FOR 2013 4TH GRADE");

  console.log(`
Reporting on the ELA test result trend for the
cohort of who were in 4th grade in 2013.
`);

  console.log("Average ELA 2013:", r13);
  console.log("Average ELA 2014:", r14);
  console.log("Average ELA 2015:", r15);
  console.log("Average ELA 2016:", r16);
  console.log("Average ELA 2017:", r17);

}

function topPerformers() {
  header("TOP PERFORMING SCHOOLS (AVG > 3.9)");

  let results = filterBetterThanLimit(testData, 3.9);
  for(let i = 0; i < results.length; i++) {
    let r = results[i];
    console.log(`
${i + 1}. ${r.name}
   average score: ${r.avg.toFixed(2)}
   ${r.numTested} students in grade ${r.grade} in ${r.year}`);
  }
}

function main() {
  header("SCHOOL TEST DATA REPORT");
  console.log("Total students tested:", totalTested(testData));
  console.log("Total tested, 4th grade:", totalTestedGrade(testData, 4));

  header("BEST TEST RESULTS");
  let highest = findHighestAvgScore(testData);
  console.log(`
The highest average score results were for the students
in grade ${highest.grade} at ${highest.name} in ${highest.year}.

${highest.numTested} students had an average score of ${highest.avg}.
`);

  reportAveragesForFirstCohort();
  topPerformers();

  header("REPORT COMPLETE");
}

main();
