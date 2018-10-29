// day of week calculator



// function convertToDays(year, month, day)

function daysInMonth(mon) {
  if(mon === 0) { return 31; } // Jan
  if(mon === 1) { return 28; } // Feb
  if(mon === 2) { return 31; } // Mar
  if(mon === 3) { return 30; } // Apr
  if(mon === 4) { return 31; } // May
  if(mon === 5) { return 30; }  // Jun
  if(mon === 6) { return 31; } // Jul
  if(mon === 7) { return 31; } // Aug
  if(mon === 8) { return 30; } // Sep
  if(mon === 9) { return 31; } // Oct
  if(mon === 10) { return 30; } // Nov
  if(mon === 11) { return 31; } // Dec

  // it's good to return something to trigger an error
  return NaN;
}

function dayOfYear(month, day) {
  let days = day;
  for (let i = 0; i < month; i++) {
    days += daysInMonth(i);
  }
  return days;
}

function dayString(d) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[d];
}

function dayDelta(day, month, year) {
  // days away from Monday Jan 1 2018
  let startYear = 2018;
  let startDays = 1;

  let days = Math.abs(dayOfYear(month, day) - startDays);
  days += Math.abs(startYear - year) * 365;

  return days;
}

function dayOfWeek(day, month, year) {
  let daysFromStart = dayDelta(day, month - 1, year);
  // it's plus one because our refernce date is Monday
  let d = (daysFromStart + 1) % 7;
  return d;
}

function main() {
  let startYear = 2017;
  let startMonth = 0;
  let startDay = 1;
  let daysFromStart = dayDelta(startDay, startMonth, startYear);
  console.log(daysFromStart);
  let d = daysFromStart % 7;
  if(startYear < 2018) {
    d = -d;
  }

  console.log(d);
  console.log(dayString(d + 1));
}

function testDayOfYear() {

}

function test() {
  let july4_76 = new Date("7/4/1776");
  let newYears2018 = new Date("1/1/2018");
  let d1 = july4_76.getDay();
  d1 = newYears2018.getDay();
  let d2 = dayOfWeek(4, 7, 1776);
  d2 = dayOfWeek(1, 1, 2018);
  console.log(d1, d2);

}

test();
