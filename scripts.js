/* 
Random Hex Generator

Following the provided mockup, use HTML, CSS, and vanilla JS to create a project that generates a random background color when a button is clicked.

- Must contain the elements in the mock design and reflect said design
  - title (nav) bar
  - randomly generated hexadecmial color value
  - the background color of the content should reflect the random hex color
  - current hexadecimal value must be shown in plain text
  - at least 1 transition / psuedo effect
*/

class RandomHexadecimal {
  constructor() {
    this.hexLetters = ["A", "B", "C", "D", "E", "F"];
    this.hexArray = new Array(6).fill(0);
  }

  createHex() {
    this.hexNum =
      "#" +
      this.hexArray
        .map((digit) => {
          if (Math.floor(Math.random() * 2) === 0) {
            digit = Math.floor(Math.random() * 10);
          } else {
            digit = this.hexLetters[Math.floor(Math.random() * 6)];
          }
          return digit;
        })
        .join("");
  }
}

const myHex = new RandomHexadecimal();
const bodyWrapper = document.querySelector(".body-wrapper");
const myButton = document.querySelector("button");
const hexNumber = document.querySelector(".hex-number");
const hexTextNode = document.createTextNode("#FF0000");

hexNumber.appendChild(hexTextNode);

myButton.addEventListener("mouseup", (e) => {
  myHex.createHex();
  hexTextNode.nodeValue = myHex.hexNum;
  bodyWrapper.style.backgroundColor = myHex.hexNum;
  myButton.style.backgroundColor = myHex.hexNum;
  myButton.innerText = "CLICK ME!";
});

myButton.addEventListener("mousedown", (e) => {
  let hexValue = myHex.hexNum === undefined ? "#FF0000BB" : myHex.hexNum + "BB";
  console.log(hexValue);
  myButton.style.backgroundColor = hexValue;
  myButton.innerText = "THANKS!";
});
