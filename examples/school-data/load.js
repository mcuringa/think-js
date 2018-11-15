/**
 * File: load.js
 * author: mxc
 * This loads the data from a csv and then saves it to
 * json format.
 */

const csv = require("csvtojson");
const _ = require("lodash");
const fs = require('fs');
const dataFile = "ela-all-2013_18.json";

let elaFile = "ela-all-2013_18.csv";
// elaFile = "ela.csv";


const main = async ()=> {

  const boros = {
    M: "Manhattan",
    K: "Brooklyn",
    B: "Bronx",
    Q: "Queens",
    S: "Staten Island"
  }

  const prep = (school)=> {
    let s = _.clone(school);
    s.district = s.id.substring(0,2);
    s.boro = boros[s.id[3]];

    const calcAvg = (s) => {
      const numTested = (s.level1 + s.level2 + s.level3 + s.level4)
      const sum = (s.level1 + s.level2 * 2 + s.level3 * 3 + s.level4 * 4)
      const avg = sum/numTested;
      if(numTested !== s.numTested) {
        // console.log("test trouble", s.numTested, numTested);
        return NaN;
      }
      return avg;
    }

    const parseNums = (v)=> {
      let n = Number(v);
      if (!Number.isNaN(n)) {
        return n;
      }
      return v;
    }
    s = _.mapValues(s, parseNums);
    s.avg = calcAvg(s);
    return s;

  }
  console.log("parsing csv data");
  let elaData = await csv().fromFile(elaFile);
  elaData = _.filter(elaData, s=>!s.grade.startsWith("All"));
  elaData = _.map(elaData, prep);
  // console.log(elaData);
  fs.writeFileSync(dataFile, JSON.stringify(elaData, null, 2));


}

 main();
