/**
 * file: school-report.js
 * author: mxc
 * Demonstrates common patterns for using for loops
 * and arrays, using the NYC school data file and the
 * school data object.
 */

// import schoolData from "ela-all-2013_18.json";

let testData = require("./ela-all-2013_18.json");

function totalTested(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i].numTested;
  }
  return total;
}

function totalTestedGrade(data, grade) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].grade === grade) {
      total += data[i].numTested;
    }
  }
  return total;
}

// 1. find the highest score where at least 50 students took the exam
// 2. alter the function from question 1 so that minStudents is a variable
// 3. Write a function that finds the lowest test result, it should also have a parameter for min students
// 4. Write a function that finds all of the schools/test results where the school average was less than 2
// 5. Find the average test result for all schools in Brooklyn
// 6. Find the 5 best performing schools in the data set. Return an array of the testResult objects for these schools. There should be a minimum number of students tested to qualify.


function averageTestScores(data, grade, year) {
  let sum = 0;
  let numSchools = 0;
  for (let i = 0; i < data.length; i++) {
    let testResults = data[i];
    if (testResults.grade === grade && testResults.year === year && testResults.avg !== NaN) {
      sum += testResults.avg;
      numSchools++;
    }
  }
  console.log("sum", sum);
  console.log("numSchools", numSchools);

  return sum / numSchools;
}


function main() {
  console.log("Total students tested:", totalTested(testData));
  console.log("Total students tested, 4th grade:", totalTestedGrade(testData, 4));
  console.log("Average 4th grade test scores, citywide, 2017:", averageTestScores(testData, 4, 2017));

}

main();
