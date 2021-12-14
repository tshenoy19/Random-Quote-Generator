/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 Create an array of objects called "quotes". Each object contains a quote and source. Some objects also might include citation, year or a tag.
 ***/
const quotes = [
  {
    quote: "There is some good in this world, and it’s worth fighting for.",
    source: "J.R.R. Tolkien",
    citation: "The Two Towers",
    year: "1954",
  },
  {
    quote:
      "It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
    source: "Antoine de Saint-Exupéry",
    citation: "The Little Prince",
    year: "1943",
  },
  {
    quote: "The only way out of the labyrinth of suffering is to forgive.",
    source: "John Green",
    year: "2005",
  },
  {
    quote:
      "Why did you do all this for me?’ he asked. ‘I don’t deserve it. I’ve never done anything for you.’ ‘You have been my friend,’ replied Charlotte. ‘That in itself is a tremendous thing.",
    source: "E.B. Whiten",
    citation: "Charlotte's Web",
    year: "1952",
  },
  {
    quote: "We accept the love we think we deserve.",
    source: "Stephen Chbosky",
    citation: "The Perks of Being a Wallflower",
    year: "1999",
  },
  {
    quote: "Whatever has the nature to arise has the nature to cease.",
    source: "Joseph Goldstein",
    citation: " Mindfulness: A Practical Guide to Awakening",
    year: "2013",
    tag: "Self Discovery",
  },
  {
    quote: "Happiness is an inside job.",
    source: "William Arthur Ward",
    tag: "Self Discovery",
  },
];

/***
 The getRandomQuote function generates a random number and returns the quote corresponding to that index from the 'quotes' array.
 ***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * 7);
  return quotes[randomNumber];
}
getRandomQuote();

/***
 The 'randomNumber' function returns a number between 1 and 255, which is used to assign random values to three variables in the 'colorChange' function. The RGB values are used to set the background color randomly.

  Reference: https://stackoverflow.com/questions/62732368/background-color-changingonclick-via-javascript-not-working
 ***/
function randomNumber() {
  return Math.floor(Math.random() * 256);
}

function colorChange() {
  let numForColor1 = randomNumber();
  let numForColor2 = randomNumber();
  let numForColor3 = randomNumber();
  let setColor = `rgb(${numForColor1}, ${numForColor2}, ${numForColor3}`;
  document.body.style.backgroundColor = setColor;
}

/***
 The `printQuote` function displays a new quote with html in the 'quote-box' element on the webpage. It also calls the 'colorChange' function every time it is invoked.
 ***/
function printQuote() {
  let quoteToDisplay = getRandomQuote();
  let html = `<p class="quote"> ${quoteToDisplay.quote} </p>
  <p class="source"> ${quoteToDisplay.source}`;

  if (quoteToDisplay.citation) {
    html += `<span class="citation">${quoteToDisplay.citation}</span>`;
  }
  if (quoteToDisplay.year) {
    html += `<span class="year">${quoteToDisplay.year}</span>`;
    html + `</p>`;
  }
  if (quoteToDisplay.tag) {
    html += `<span class="tag">${quoteToDisplay.tag}</span>`;
    html + `</p>`;
  }
  document.getElementById("quote-box").innerHTML = html;
  colorChange();
}
printQuote();

/***  
Setting a 20 second interval for printQuote function to reload.
Reference: https://developer.mozilla.org/en-US/docs/Web/API/setInterval 
***/

window.setInterval(printQuote, 20000);

/***
 The 'printQuote' function is called every time the button is clicked.
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
















