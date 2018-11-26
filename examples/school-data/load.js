/**
 * File: load.js
 * author: mxc
 * This loads the data from a csv and then saves it to
 * a .js data source file.
 */

const csv = require("csvtojson");
const _ = require("lodash");
const fs = require('fs');
const dataFile = "./data/ela-all-2013_18.mjs";

let elaFile = "./data/ela-all-2013_18.csv";
// elaFile = "ela.csv";


const main = async ()=> {

  const boros = {
    M: "Manhattan",
    K: "Brooklyn",
    X: "Bronx",
    Q: "Queens",
    R: "Staten Island"
  }

  const prep = (school)=> {

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

    let s = _.clone(school);
    s.district = s.id.substring(0,2);
    s.boro = boros[s.id[2]];
    s = _.mapValues(s, parseNums);
    s.avg = calcAvg(s);
    return s;

  }

  const write = ()=> {
    const header = "let testData = ";
    const json = JSON.stringify(elaData, null, 2);
    const footer = ";\n\nexport default testData;";
    fs.writeFileSync(dataFile, header + json + footer);
  }

  console.log("parsing csv data");
  let elaData = await csv().fromFile(elaFile);
  elaData = _.filter(elaData, s=>!s.grade.startsWith("All"));
  elaData = _.map(elaData, prep);
  write(elaData);



}

 main();
