/**
 * index.js is the default script for the JSGUI Demo Site
 * It demonstrates some of the main layout functions included
 * in the js gui package.
 */
import jsgui from "./lib/jsgui.js";

function animalDetail(title, img, text) {
  let container = jsgui.div();
  jsgui.append(container, jsgui.h4(title), img, jsgui.br(), text);
  return container;
}


function catsOrDogs() {
  let sec = jsgui.section();

  let catPic = jsgui.img("cat.jpg", "a black cat");
  let dogPic = jsgui.img("dog.jpg", "a shaggy Newfoundland dog");

  let catPeople = animalDetail("Cat people", catPic,
    "Some people like cats. Cats are quiet, playful, soft, and sweet.");

  let dogPeople = animalDetail("Dog people", dogPic,
    "Some people like dogs. Dogs are loyal friends and companions, sad to see you leave and ecstatic when you get home.");

  let grid = jsgui.grid(2);
  jsgui.addToGrid(grid, 1, catPeople);
  jsgui.addToGrid(grid, 2, dogPeople);
  jsgui.append(sec,
    jsgui.h2("Cats and Dogs"),
    jsgui.p("Do you prefer cats or dogs?"),
    grid,
    jsgui.hr());

  return sec;

}

function animalActors() {
  let sec = jsgui.section();
  let animalsOnScreen = [
    ["Name", "Type", "Breed", "Film/Show"],
    ["Rin Tin Tin", "Dog", "German Shepherd", "Various"],
    ["Lassie", "Dog", "Collie", "Lassie"],
    ["Mrs. Norris", "Cat", "Maine Coon", "Harry Potter"],
    ["Flipper", "Dolphin", "bottlenose", "Flipper"]
  ];
  let table = jsgui.table(animalsOnScreen.slice(1), animalsOnScreen[0]);
  jsgui.append(sec,
    jsgui.h2("Animals on the Screen"),
    table,
    jsgui.hr());
  return sec;
}

function header() {
  let h = jsgui.header();
  jsgui.append(h, jsgui.h1("Animals On Screen"));
  jsgui.append(h, jsgui.h5("A demo of the JS GUI library"));
  let about = `
JS GUI is [Free Open Source Software](https://fsf.org) for teaching and learning to program web-based JS guis. It was created by Robby Lucia and Matt Curinga to accompany the open textbook, _Think JS_. [[read online](http://mcuringa.github.com/think-js)] [[source](https://github.com/mcuringa/think-js)].
`;
  about = jsgui.md(about);
  jsgui.append(h, about);
  jsgui.append(h, jsgui.hr());

  return h;

}


function main() {
  jsgui.add(
    header(),
    catsOrDogs(),
    animalActors()
  );

}

main();
