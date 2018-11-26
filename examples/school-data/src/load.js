/**
 * File: load.js
 * author: mxc
 * This loads the data from a csv and then saves it to
 * json format.
 */

import csv from "csvtojson";
import _ from "lodash";
import qwest from "qwest";



const load = async (dataUrl) => {

  qwest.get(dataUrl)
     .then((xhr, response)=> {
        csv().fromString(response);
     });
  let data = await inFile;

  const parseNum = (v)=> {
    let n = Number(v);
    if (!Number.isNaN(n)) {
      return n;
    }
    return v;
  }
}

const dt = {
  "load": load,
}

// export default dt;
