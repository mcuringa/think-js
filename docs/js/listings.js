
const caseStudy = (container)=> {

  const alignNote = (note)=> {
    const n = note.dataset.lineNumber;
    const line = lines[n-1];
    alignToTop(note, line, container);
  }

  let notes = container.querySelectorAll("aside");
  const lines = container.querySelectorAll(".listingSrcCode .sourceLine");
  notes = notes.forEach(alignNote);
}


const alignToTop = (note, line, container)=> {
  const containerTop = container.getBoundingClientRect().top;
  const lineTop = line.getBoundingClientRect().top;
  const off = lineTop - containerTop;
  note.style.top = off + "px";
}

const makeListings = ()=> {
  let listings = document.querySelectorAll(".codeNotes");
  listings.forEach(caseStudy);
}
makeListings();
