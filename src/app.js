/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello console!");
  document.querySelector("#btn").addEventListener("click", () => {
    printExcuse();
  });
  printExcuse();
};

function excuseGen() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let excuse =
    who[randomPick(who.length)] +
    " " +
    action[randomPick(action.length)] +
    " " +
    what[randomPick(what.length)] +
    " " +
    when[randomPick(when.length)] +
    ".";
  return excuse;
}

function printExcuse() {
  let excuse = excuseGen();
  let frame = document.getElementById("ExcuseDiv");
  frame.innerHTML = `<h1 class="mt-5">${excuse}</h1>`;
}

function randomPick(maxNum) {
  return Math.floor(Math.random() * maxNum);
}
