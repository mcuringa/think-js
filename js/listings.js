
const makeListings = ()=> {

  console.log("making code listings");

  const alignNote = (note)=> {
    const n = note.dataset.lineNumber;
    const line = lines[n-1];
    alignToTop(note, line);

  }
  let notes = document.querySelectorAll(".tipCalculator aside");
  const lines = document.querySelectorAll(".tipCalculator .listingSrcCode .sourceLine");
  notes = notes.forEach(alignNote);
  
}


const alignToTop = (srcEl, targetEl)=> {

  console.log("aligning note: ", srcEl);
  console.log("aligning to: ", targetEl);
  const top = targetEl.getBoundingClientRect().top;
  console.log(top);
  srcEl.style.top = top + "px";

// const topOffset = targetEl.getBoundingClientRect().top;
// const bottom = footer.getBoundingClientRect().y;
// const containerRect = container.getBoundingClientRect();
// const triggerRect = trigger.getBoundingClientRect();
// const menuRect = menu.getBoundingClientRect();


// let menuTop = triggerRect.y - containerRect.y + topOffset;
// let menuBottom = triggerRect.y + menuRect.height;
// if(menuBottom > bottom) {
//   menuTop = bottom - menuRect.height - containerRect.y + topOffset - 4;
// }


// console.log("trigger rect", triggerRect);
// menu.style.left = (triggerRect.right - menuRect.width) + "px";
// menu.style.right = "auto";





}

makeListings();