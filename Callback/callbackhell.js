let count = 10;
const display = document.querySelector('h2');

const greet = function (callback) {
  setTimeout(() => {
    display.innerText = `Counter: ${count}`;
    callback(count);
  }, 1000);
};

const callback1 = function (count) {
  count -= 1;
  setTimeout(() => {
    display.innerText = `Counter: ${count}`;
    callback2(count);
  }, 1000);
};

const callback2 = function (count) {
  count -= 1;
  setTimeout(() => {
    display.innerText = `Counter: ${count}`;
    callback3(count);
  }, 1000);
};

const callback3 = function (count) {
  count -= 1;
  setTimeout(() => {
    display.innerText = `Counter: ${count}`;
    callback4(count);
  }, 1000);
};

const callback4 = function (count) {
  count -= 1;
  setTimeout(() => {
    display.innerText = `Counter: ${count}`;
    callback5(count);
  }, 1000);
};

const callback5 = function (count) {
  count -= 1;
  setTimeout(() => {
    display.innerText = `Counter: ${count}`;
    callback6(count);
  }, 1000);
};

const callback6 = function (count) {
  count -= 1;
  setTimeout(() => {
    display.innerText = `Counter: ${count}`;
    callback7(count);
  }, 1000);
};

const callback7 = function (count) {
  count -= 1;
  setTimeout(() => {
    display.innerText = `Counter: ${count}`;
    callback8(count);
  }, 1000);
};

const callback8 = function (count) {
  count -= 1;
  setTimeout(() => {
    display.innerText = `Counter: ${count}`;
    callback9(count);
  }, 1000);
};

const callback9 = function (count) {
  count -= 1;
  setTimeout(() => {
    display.innerText = `Counter: ${count}`;
    finalCallback();
  }, 1000);
};

const finalCallback = function () {
  setTimeout(() => {
    alert('Happy Birthday 🥳');
  }, 1000);
};

greet(callback1);
