// Navbar
const header = document.createElement('header');
document.body.append(header);

const topNav = document.createElement('div');
topNav.classList.add('topnav');

header.append(topNav);

const navTitle = document.createElement('div');
navTitle.classList.add('title');

topNav.append(navTitle);

const mainText = document.createElement('h1');
mainText.innerText = 'Random Number Generator';

navTitle.append(mainText);

const navOptions = document.createElement('div');
navOptions.classList.add('nav-options');

topNav.append(navOptions);

const link1 = document.createElement('a');
link1.setAttribute('href', 'index.html');

link1.innerText = 'Random Number';

navOptions.append(link1);

const link2 = document.createElement('a');
link2.setAttribute('href', 'dom.html');
link2.classList.add('active');
link2.innerText = 'Date Dom';

navOptions.append(link2);

// End Navbar

const container = document.createElement('div');
container.classList.add('container');

document.body.append(container);

const title = document.createElement('h1');
title.innerText = 'Date Difference Calculator';
container.append(title);

const dobDiv = document.createElement('div');
dobDiv.classList.add('dob-div');
container.append(dobDiv);

const dobLabel = document.createElement('label');
dobLabel.innerText = 'Enter Your DOM as dd/mm/yyyy: ';
dobDiv.append(dobLabel);

const dobInput = document.createElement('input');
dobInput.setAttribute('type', 'date');
dobInput.setAttribute('id', 'dob');
dobInput.setAttribute('placeholder', 'Enter your DOB');
dobLabel.classList.add('dob');
dobDiv.append(dobInput);

// Button Form
const btnForm = document.createElement('form');
btnForm.setAttribute('id', 'numberGeneratorForm');
container.append(btnForm);

const submit = document.createElement('button');
submit.classList.add('btn');
submit.setAttribute('type', 'submit');
submit.innerText = 'Generate Difference';

btnForm.append(submit);

// Form
const form = document.createElement('form');
container.append(form);
form.classList.add('form');

// Milli seconds
let millisecondsLabel = document.createElement('label');
millisecondsLabel.setAttribute('for', 'time-ms');
millisecondsLabel.innerText = 'Time Difference(Milliseconds)';

form.append(millisecondsLabel);

let millisecondsDisplay = document.createElement('h3');
millisecondsDisplay.setAttribute('id', 'milliseconds');
millisecondsDisplay.classList.add('number-display');
millisecondsDisplay.innerText = 'Milliseconds';

form.append(millisecondsDisplay);

// Seconds
let secondsLabel = document.createElement('label');
secondsLabel.setAttribute('for', 'time-sec');
secondsLabel.innerText = 'Time Difference(seconds)';

form.append(secondsLabel);

let secondsDisplay = document.createElement('h3');
secondsDisplay.setAttribute('id', 'seconds');
secondsDisplay.classList.add('number-display');
secondsDisplay.innerText = 'seconds';

form.append(secondsDisplay);

// Minutes
let minutesLabel = document.createElement('label');
minutesLabel.setAttribute('for', 'time-min');
minutesLabel.innerText = 'Time Difference(minutes)';

form.append(minutesLabel);

let minutesDisplay = document.createElement('h3');
minutesDisplay.setAttribute('id', 'minutes');
minutesDisplay.classList.add('number-display');
minutesDisplay.innerText = 'Minutes';

form.append(minutesDisplay);

// Months
let monthsLabel = document.createElement('label');
monthsLabel.setAttribute('for', 'time-mon');
monthsLabel.innerText = 'Time Difference(months)';

form.append(monthsLabel);

let monthsDisplay = document.createElement('h3');
monthsDisplay.setAttribute('id', 'months');
monthsDisplay.classList.add('number-display');
monthsDisplay.innerText = 'months';

form.append(monthsDisplay);

// Years
let yearsLabel = document.createElement('label');
yearsLabel.setAttribute('for', 'time-year');
yearsLabel.innerText = 'Time Difference(years)';

form.append(yearsLabel);

let yearsDisplay = document.createElement('h3');
yearsDisplay.setAttribute('id', 'years');
yearsDisplay.classList.add('number-display');
yearsDisplay.innerText = 'years';

form.append(yearsDisplay);

// Days
let daysLabel = document.createElement('label');
daysLabel.setAttribute('for', 'time-sec');
daysLabel.innerText = 'Time Difference(days)';

form.append(daysLabel);

let daysDisplay = document.createElement('h3');
daysDisplay.setAttribute('id', 'days');
daysDisplay.classList.add('number-display');
daysDisplay.innerText = 'days';

form.append(daysDisplay);

// functionality
const button = document.querySelector('.btn');
const milliseconds = document.getElementById('milliseconds');
const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');
const month = document.getElementById('months');
const year = document.getElementById('years');
const day = document.getElementById('days');

let dob = new Date();
button.addEventListener('click', (e) => {
  e.preventDefault();
  const date1 = new Date(document.getElementById('dob').value);
  const date2 = new Date();
  let diff_in_time = date2.getTime() - date1.getTime();
  let diff_in_days = diff_in_time / (1000 * 3600 * 24);
  let diff_in_min = diff_in_time / (1000 * 60);
  let diff_in_years = diff_in_time / (365 * 24 * 60 * 60 * 1000);
  let diff_in_months = diff_in_time / 2419200000;
  console.log('Time Difference(ms)', diff_in_time);
  console.log('Time Difference(s)', diff_in_time / 1000);
  console.log('Time Difference(min)', diff_in_min);
  console.log('Days Differene(days)', diff_in_days);
  console.log('Year Difference(year)', diff_in_years);
  console.log('Month Difference(month)', diff_in_months);
  milliseconds.innerText = diff_in_time;
  seconds.innerText = diff_in_time / 1000;
  minutes.innerText = diff_in_min;
  month.innerText = diff_in_months;
  year.innerText = diff_in_years;
  day.innerText = diff_in_days;
});
