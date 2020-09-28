function getvalueBox() {
  var value = document.getElementById('operations').innerText;
  return value;
}

function setvalueBox(newValue) {
  var oper = document.getElementById('operations');
  operStr = oper.innerText;
  if (operStr.length == 1 && operStr == '0' && newValue != '.') {
    operStr = '';
  }
  if (operStr.length < 16) {
    oper.innerText = operStr + newValue;
  } else {
    alert('Max 15 characters');
  }
}

function setOutput(output) {
  document.getElementById('output').innerText = output;
}

function performcalc() {
  var opertext = getvalueBox();
  const regex = /(?:(?:^|[-+_*/%])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;
  if (regex.test(opertext)) {
    var output = eval(opertext);
    setOutput(output);
  } else {
    alert('Please verify the operation');
  }
}
function clearOperStr() {
  document.getElementById('operations').innerText = '0';
  document.getElementById('output').innerText = '';
}
function clearOneCharOperStr() {
  var currentValue = getvalueBox();
  document.getElementById('operations').innerText = currentValue.substring(
    0,
    currentValue.length - 1
  );
}

function createNewDiv(className, htmltext, attrib = '') {
  var tag = document.createElement('div');
  tag.setAttribute('class', className);
  if (htmltext != '') {
    tag.innerHTML = htmltext;
  }
  if (attrib != '') {
    tag.setAttribute('onclick', attrib);
  }
  return tag;
}

var main = createNewDiv('main', '');
var container = createNewDiv('container', '');
var calcBody = createNewDiv('calc-body', '');

var calcScreen = createNewDiv('calc-screen', '');
var calcScreendiv1 = createNewDiv('calc-operation', '0');
calcScreendiv1.id = 'operations';
var calcScreendiv2 = createNewDiv('calc-typed', '');
calcScreendiv2.id = 'output';
calcScreen.append(calcScreendiv1, calcScreendiv2);

var calcButtonRow = createNewDiv('calc-button-row', '');
var clearButton = createNewDiv('button c', 'C', 'clearOperStr()');
var backSpaceButton = createNewDiv('button l', '', 'clearOneCharOperStr()');
var backSpaceButtoniTag = document.createElement('i');
backSpaceButtoniTag.setAttribute('class', 'fas fa-backspace');
backSpaceButton.appendChild(backSpaceButtoniTag);
var percentageButton = createNewDiv('button l', '%', 'setvalueBox("%")');
var DivisionButton = createNewDiv('button l', '/', 'setvalueBox("/")');
calcButtonRow.append(
  clearButton,
  backSpaceButton,
  percentageButton,
  DivisionButton
);

var calcButtonRow2 = createNewDiv('calc-button-row', '');
var button7 = createNewDiv('button', '7', 'setvalueBox("7")');
var button8 = createNewDiv('button', '8', 'setvalueBox("8")');
var button9 = createNewDiv('button', '9', 'setvalueBox("9")');
var buttonX = createNewDiv('button l', 'x', 'setvalueBox("*")');
calcButtonRow2.append(button7, button8, button9, buttonX);

var calcButtonRow3 = createNewDiv('calc-button-row', '');
var button4 = createNewDiv('button', '4', 'setvalueBox("4")');
var button5 = createNewDiv('button', '5', 'setvalueBox("5")');
var button6 = createNewDiv('button', '6', 'setvalueBox("6")');
var buttonSubtract = createNewDiv('button l', '-', 'setvalueBox("-")');
calcButtonRow3.append(button4, button5, button6, buttonSubtract);

var calcButtonRow4 = createNewDiv('calc-button-row', '');
var button1 = createNewDiv('button', '1', 'setvalueBox("1")');
var button2 = createNewDiv('button', '2', 'setvalueBox("2")');
var button3 = createNewDiv('button', '3', 'setvalueBox("3")');
var buttonAddition = createNewDiv('button l', '+', 'setvalueBox("+")');
calcButtonRow4.append(button1, button2, button3, buttonAddition);

var calcButtonRow5 = createNewDiv('calc-button-row', '');
var buttonDor = createNewDiv('button', '.', 'setvalueBox(".")');
var buttonZero = createNewDiv('button', '0', 'setvalueBox("0")');
var buttonDoubleZero = createNewDiv('button', '00', 'setvalueBox("00")');
var buttonCalc = createNewDiv('button l', '=', 'performcalc()');
calcButtonRow5.append(buttonDor, buttonZero, buttonDoubleZero, buttonCalc);

calcBody.append(
  calcScreen,
  calcButtonRow,
  calcButtonRow2,
  calcButtonRow3,
  calcButtonRow4,
  calcButtonRow5
);
container.appendChild(calcBody);
main.appendChild(container);
document.body.appendChild(main);
