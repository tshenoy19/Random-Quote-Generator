# Random-Quote-Generator
Treehouse Tech Degree Project 1

### Project Description
This project generates a random quote from an array of objects. Each object contains a quote with a source and might also contain citation, year or tag.

### 'quotes' Array
The 'quotes' array contains 7 quotes each within an object.

### getRandomQuote() function
The getRandomQuote() function uses the Math floor and random functions to generate a value between 0 and 6 and returns the quote corresponding to that index from the 'quotes' array.

### Changing background color with new quote
First, a function called randomNumber() is created to generate a number between 1 and 255, which is then passed into the colorChange() function. 
The colorChange() function used RGB values to set the background color of the webpage to a random color.

### printQuote() function
This function calls the getRandomQuote() function and displays the quote on the webpage. It also calls the colorChange function every time it is invoked.
The printQuote function is called in two scenarios:
- When the button is clicked (using an Event Listener)
- With the setInterval function

The final project can be viewed at : https://tshenoy19.github.io/Random-Quote-Generator/

Resources:

https://teamtreehouse.com/

https://developer.mozilla.org/en-US/docs/Web/API/setInterval 

https://stackoverflow.com/questions/62732368/background-color-changingonclick-via-javascript-not-working

