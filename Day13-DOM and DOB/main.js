// Components
const header = document.createElement('header')
document.body.append(header)

const topNav = document.createElement('div')
topNav.classList.add('topnav')

header.append(topNav)

const navTitle = document.createElement('div');
navTitle.classList.add('title');

topNav.append(navTitle);

const mainText = document.createElement('h1')
mainText.innerText = 'Random Number Generator';

navTitle.append(mainText);

const navOptions = document.createElement('div');
navOptions.classList.add('nav-options');

topNav.append(navOptions);

const link1 = document.createElement('a')
link1.setAttribute('href', 'index.html');
link1.classList.add('active');
link1.innerText = "Random Number"

navOptions.append(link1);


const link2 = document.createElement('a')
link2.setAttribute('href', 'dom.html');
link2.innerText = "Date Dom"

navOptions.append(link2);

// End Navbar







const container = document.createElement('div');
container.classList.add('container');

document.body.append(container);

const title = document.createElement('h1');
title.innerText = 'Random Number Generator';
title.classList.add('title');

container.append(title);

const numberDisplay = document.createElement('h3');
numberDisplay.innerText = 'Unique Number';
numberDisplay.classList.add('number-display');
numberDisplay.setAttribute('id', 'numberGenerated');

container.append(numberDisplay);

const form = document.createElement('form');
form.classList.add('form');
form.setAttribute('id', 'numberGeneratorForm');

container.append(form);



const div = document.createElement('div');
div.classList.add('wrapper');
form.append(div);

const button = document.createElement('button');
button.classList.add('btn');
button.setAttribute('type', 'submit');
button.setAttribute('id', 'generate');
button.innerText = 'Generate Numbers';

div.append(button);

// Logic
const finalGenerated = document.getElementById('numberGenerated');
const submitButton = document.getElementById('generate');

submitButton.addEventListener('click', generateNumber([],1));
// Recursive function

function generateNumber(resultArray, randomNumber) {
  // Base case
  if (resultArray.length === 8) {
    finalGenerated.innerText = resultArray.join('');
    return;
  }
  // safety check
  if (!resultArray.includes(randomNumber)) {
    resultArray.push(randomNumber);
  }
  // recursion

  let myRandom = Math.floor(Math.random() * (9 - 0 + 1));
  generateNumber(resultArray, myRandom);
}

// console.log(generateNumber([], 1));
