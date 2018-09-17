
const makeListings = ()=> {

  console.log("making code listings");

  const alignNote = (note)=> {
    const n = note.dataset.lineNumber;
    const line = lines[n-1];
    alignToTop(note, line, container);

  }
  let container = document.querySelector("section.tipCalculator");
  let notes = document.querySelectorAll(".tipCalculator aside");
  const lines = document.querySelectorAll(".tipCalculator .listingSrcCode .sourceLine");
  notes = notes.forEach(alignNote);
  
}


const alignToTop = (note, line, container)=> {

  console.log("container: ", container);
  console.log("aligning note: ", note);
  console.log("aligning to: ", line);
  const containerTop = container.getBoundingClientRect().top;
  const lineTop = line.getBoundingClientRect().top;
  const off = lineTop - containerTop;
  console.log(off);
  note.style.top = off + "px";



  // line = document.getElementById("cb58-56");
  // note = document.querySelector("#case-study-tip-calculator aside");


}

makeListings();