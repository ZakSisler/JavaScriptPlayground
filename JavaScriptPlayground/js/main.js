//alert() is a method built into browsers that causes an unstylable popup.
//alert("JavaScript is working!");

//Variables can change values and datatypes (JS isn't type-safe)
let x = 10;

//We can use console.log() to view the value of a variable in the inspector
//NOTE: This doesn't show up in the HTML doc, but rather in the console.
console.log(x);

x = 'Hello';
console.log(x);

//Var type variables
var z = 100;

//Var and let difference:
//let is locally scoped, only available inside the scope it's defined.
//var is globally scoped, available throughout the entire scope. Var can be re-declared.

//Create a new Date object to display for our copyright
let currentDate = new Date();// empty constructor for todays date

console.log(currentDate + ': current date')

//Create a variable to take only the year from currentDate
let currentYear = currentDate.getFullYear();

//JS is a OOP language. Objects have properties which are like nouns and methods are like verbs.
//methods defined the date class. getFullYear() is an instance method.

console.log(currentYear + '-- current year');

//Use value of currentYear as the <span id="copyright"> content
//How? Create a variable to capture the span from the HTML document
let copyright = document.getElementById('copyright'); 

console.log(copyright);

//To update the content of an element, we can use .textContent
copyright.textContent = currentYear;


///////////// Arrays /////////////////////////////////////////////////////////////////
//JS is LIFO - Last in, First out.
//JS arrays do not have a set size
//Can be addressed/accessed like C# with a 0-based index value

let colors = ['blue', 'brown', 'orange', 'pink', 'red', 'green'];

//To add an item to the array we can use push()
colors.push('purple');

//To remove
//colors.pop();

//Select a color from the array and use it as the content for our <strong> tag
//Create a variable for the <strong> tag
let colorStrong = document.getElementById('yourcolor');

//use .textcontent to give <strong> tag a value
colorStrong.textContent = colors[3];

//To change the color of the <strong> tag, we can add inline styling with JS
colorStrong.style.color = colors[3];

//////////////Functions////////////////////////////////////////

//Functions are declared with the "function" keyword
//The code inside of a function will only run when called upon in reaction to an event (button click, keyload, page load)

//Create a function that will be called when the user submits their fvorite color by clicking a button and display their message to them using thei input
function displayFavoriteColor() {

    //Create a variable to store the users input
    let userFavoriteColor = document.getElementById('tbFavColor').value;
    //Above we used .value after getting the text box element with getElementById().
    //If you need to get a user's response from a textbox, you MUST use .value with the element.

    //Create a variable for a <span> (output element)
    let colorMessage = document.getElementById('color-message');

    //Update the <span>'s content to display a message
    colorMessage.textContent = userFavoriteColor + ' is my favorite color!';

    //Use JS to add inline styling to the <span>
    colorMessage.style.backgroundColor = userFavoriteColor;
}

//Create a function that's called when a user submits a number of gallons.
//Calculate the weight in pounds and output the result.

function calcWaterWeight() {
    //Access the user input
    let nbrGallons = document.getElementById('tbNbrGallons').value;//REMEMBER .VALUE!!!

    //Access the output element
    let weightResult = document.getElementById('weight-result');

    //Display total weight
    weightResult.textContent = nbrGallons + ' gallons of water weighs ' + (nbrGallons * 8.33).toFixed(2) + 'lbs';
}

//Event listeners can be used to wire up functions to events, similar to the onclick attribute.
//Here we have removed the onclick attribute from the button in our html and will use an event listener instead
let btnCalcWeight = document.getElementById('btnCalcWeight');
btnCalcWeight.addEventListener('click', calcWaterWeight);//calcWaterWeight doesn't need () here (event listener)
//When using onclick you must use the parens () at the end of the function name
//& using event listener, do not use the parens () at the end of the function name