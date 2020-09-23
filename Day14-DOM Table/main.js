const container = document.createElement('div');
container.classList.add('container-fluid');

document.body.append(container);

const title = document.createElement('h1');
title.innerText = 'DOM Table Manipulation';
title.style.color = 'white';
container.append(title);

const form = document.createElement('form');
form.setAttribute('name', 'registration');

container.append(form);

// First Name
const rowFirstName = document.createElement('div');
rowFirstName.classList.add('row');
form.append(rowFirstName);

const col25FirstName = document.createElement('div');
col25FirstName.classList.add('col-25');
rowFirstName.append(col25FirstName);

const labelFirstName = document.createElement('label');
labelFirstName.innerText = 'First Name';
labelFirstName.setAttribute('for', 'username');

col25FirstName.append(labelFirstName);

const col75FirstName = document.createElement('div');
col75FirstName.classList.add('col-75');

rowFirstName.append(col75FirstName);

const inputFirstName = document.createElement('input');
inputFirstName.setAttribute('type', 'text');
inputFirstName.setAttribute('id', 'firstname');
inputFirstName.setAttribute('name', 'username');
inputFirstName.setAttribute('placeholder', 'Full name');
inputFirstName.setAttribute('class', 'input-field');

col75FirstName.append(inputFirstName);

// Second Name
const rowLastName = document.createElement('div');
rowLastName.classList.add('row');
form.append(rowLastName);

const col25LastName = document.createElement('div');
col25LastName.classList.add('col-25');
rowLastName.append(col25LastName);

const labelLastName = document.createElement('label');
labelLastName.innerText = 'Last Name';
labelLastName.setAttribute('for', 'username');

col25LastName.append(labelLastName);

const col75LastName = document.createElement('div');
col75LastName.classList.add('col-75');

rowLastName.append(col75LastName);

const inputLastName = document.createElement('input');
inputLastName.setAttribute('type', 'text');
inputLastName.setAttribute('id', 'secondname');
inputLastName.setAttribute('name', 'username');
inputLastName.setAttribute('placeholder', 'Last name');
inputLastName.setAttribute('class', 'input-field');

col75LastName.append(inputLastName);

// address

const rowAddress = document.createElement('div');
rowAddress.classList.add('row');
form.append(rowAddress);

const col25Address = document.createElement('div');
col25Address.classList.add('col-25');
rowAddress.append(col25Address);

const labelAddress = document.createElement('label');
labelAddress.innerText = 'Address';
labelAddress.setAttribute('for', 'address');

col25Address.append(labelAddress);

const col75Address = document.createElement('div');
col75Address.classList.add('col-75');

rowAddress.append(col75Address);

const inputAddress = document.createElement('input');
inputAddress.setAttribute('type', 'text');
inputAddress.setAttribute('id', 'address');
inputAddress.setAttribute('name', 'address');
inputAddress.setAttribute('placeholder', 'Address');
inputAddress.setAttribute('class', 'input-field');

col75Address.append(inputAddress);

// Postal Code

const rowPostal = document.createElement('div');
rowPostal.classList.add('row');
form.append(rowPostal);

const col25Postal = document.createElement('div');
col25Postal.classList.add('col-25');
rowPostal.append(col25Postal);

const labelPostal = document.createElement('label');
labelPostal.innerText = 'Postal';
labelPostal.setAttribute('for', 'Postal');

col25Postal.append(labelPostal);

const col75Postal = document.createElement('div');
col75Postal.classList.add('col-75');

rowPostal.append(col75Postal);

const inputPostal = document.createElement('input');
inputPostal.setAttribute('type', 'number');
inputPostal.setAttribute('id', 'Postal');
inputPostal.setAttribute('name', 'Postal');
inputPostal.setAttribute('placeholder', 'Postal');
inputPostal.setAttribute('class', 'input-field');

col75Postal.append(inputPostal);

// Gender

const rowGender = document.createElement('div');
rowGender.classList.add('row');
form.append(rowGender);

const col25Gender = document.createElement('div');
col25Gender.classList.add('col-25');
rowGender.append(col25Gender);

const labelGender = document.createElement('label');
labelGender.innerText = 'Gender';
labelGender.setAttribute('for', 'Gender');

col25Gender.append(labelGender);

const col75Gender = document.createElement('div');
col75Gender.classList.add('col-75');

rowGender.append(col75Gender);

// **male**
const radioMale = document.createElement('input');
radioMale.setAttribute('type', 'radio');
radioMale.setAttribute('id', 'male');
radioMale.setAttribute('name', 'gender');
radioMale.setAttribute('value', 'Male');

col75Gender.append(radioMale);

const labelMale = document.createElement('label');
labelMale.setAttribute('for', 'male');
labelMale.innerText = 'Male';

col75Gender.append(labelMale);

//  **female**
const radioFemale = document.createElement('input');
radioFemale.setAttribute('type', 'radio');
radioFemale.setAttribute('id', 'female');
radioFemale.setAttribute('name', 'gender');
radioFemale.setAttribute('value', 'Female');

col75Gender.append(radioFemale);

const labelFemale = document.createElement('label');
labelFemale.setAttribute('for', 'Female');
labelFemale.innerText = 'Female';

col75Gender.append(labelFemale);

// Choice of Food
const rowChoiceOfFood = document.createElement('div');
rowChoiceOfFood.classList.add('row');
form.append(rowChoiceOfFood);

const col25ChoiceOfFood = document.createElement('div');
col25ChoiceOfFood.classList.add('col-25');

rowChoiceOfFood.append(col25ChoiceOfFood);

const labelChoiceOfFood = document.createElement('label');
labelChoiceOfFood.setAttribute('for', 'ChoiceOfFood');

labelChoiceOfFood.innerText = 'Choice of Food';

col25ChoiceOfFood.append(labelChoiceOfFood);

const col75ChoiceOfFood = document.createElement('div');
col75ChoiceOfFood.classList.add('col-75');

rowChoiceOfFood.append(col75ChoiceOfFood);

// 1. Cheese
cheeseInput = document.createElement('input');
cheeseInput.setAttribute('type', 'radio');
cheeseInput.setAttribute('id', 'cheese');
cheeseInput.setAttribute('name', 'cheese');
cheeseInput.setAttribute('value', 'cheese');

col75ChoiceOfFood.append(cheeseInput);

const cheeseLabel = document.createElement('label');
cheeseLabel.setAttribute('for', 'cheese');
cheeseLabel.innerText = 'Cheese';

col75ChoiceOfFood.append(cheeseLabel);

// 2. Tomatoes

tomatoesInput = document.createElement('input');
tomatoesInput.setAttribute('type', 'radio');
tomatoesInput.setAttribute('id', 'tomatoes');
tomatoesInput.setAttribute('name', 'tomatoes');
tomatoesInput.setAttribute('value', 'tomatoes');

col75ChoiceOfFood.append(tomatoesInput);

const tomatoesLabel = document.createElement('label');
tomatoesLabel.setAttribute('for', 'tomatoes');
tomatoesLabel.innerText = 'Tomatoes';

col75ChoiceOfFood.append(tomatoesLabel);

// 3. Mushrooms
mushroomsInput = document.createElement('input');
mushroomsInput.setAttribute('type', 'radio');
mushroomsInput.setAttribute('id', 'mushrooms');
mushroomsInput.setAttribute('name', 'mushrooms');
mushroomsInput.setAttribute('value', 'mushrooms');

col75ChoiceOfFood.append(mushroomsInput);

const mushroomsLabel = document.createElement('label');
mushroomsLabel.setAttribute('for', 'mushrooms');
mushroomsLabel.innerText = 'Mushrooms';

col75ChoiceOfFood.append(mushroomsLabel);

// 4. Pepperoni
pepperoniInput = document.createElement('input');
pepperoniInput.setAttribute('type', 'radio');
pepperoniInput.setAttribute('id', 'pepperoni');
pepperoniInput.setAttribute('name', 'pepperoni');
pepperoniInput.setAttribute('value', 'pepperoni');

col75ChoiceOfFood.append(pepperoniInput);

const pepperoniLabel = document.createElement('label');
pepperoniLabel.setAttribute('for', 'pepperoni');
pepperoniLabel.innerText = 'Pepperoni';

col75ChoiceOfFood.append(pepperoniLabel);

// 5. Mozzarella

mozzarellaInput = document.createElement('input');
mozzarellaInput.setAttribute('type', 'radio');
mozzarellaInput.setAttribute('id', 'mozzarella');
mozzarellaInput.setAttribute('name', 'mozzarella');
mozzarellaInput.setAttribute('value', 'mozzarella');

col75ChoiceOfFood.append(mozzarellaInput);

const mozzarellaLabel = document.createElement('label');
mozzarellaLabel.setAttribute('for', 'mozarella');
mozzarellaLabel.innerText = 'Mozzarella';

col75ChoiceOfFood.append(mozzarellaLabel);

// State
const rowState = document.createElement('div');
rowState.classList.add('row');
form.append(rowState);

const col25State = document.createElement('div');
col25State.classList.add('col-25');
rowState.append(col25State);

const labelState = document.createElement('label');
labelState.innerText = 'State';
labelState.setAttribute('for', 'state');

col25State.append(labelState);

const col75State = document.createElement('div');
col75State.classList.add('col-75');

rowState.append(col75State);

const inputState = document.createElement('input');
inputState.setAttribute('type', 'text');
inputState.setAttribute('id', 'state');
inputState.setAttribute('name', 'username');
inputState.setAttribute('placeholder', 'State');
inputState.setAttribute('class', 'input-field');

col75State.append(inputState);

// Country
const countryRow = document.createElement('div');
countryRow.classList.add('row');

form.append(countryRow);

const col25countryRow = document.createElement('div');
col25countryRow.classList.add('col-25');

countryRow.append(col25countryRow);

const countryLabel = document.createElement('label');
countryLabel.setAttribute('for', 'country');
countryLabel.innerText = 'Country';

col25countryRow.append(countryLabel);

const col75countryRow = document.createElement('div');
col75countryRow.classList.add('col-75');
col75countryRow.setAttribute('id', 'country');

countryRow.append(col75countryRow);

const countrySelect = document.createElement('select');
countrySelect.setAttribute('id', 'country');
countrySelect.setAttribute('name', 'country');

col75countryRow.append(countrySelect);

// 1. options default

const defOption = document.createElement('option');
defOption.setAttribute('selected', '');
defOption.setAttribute('value', 'default');
defOption.innerText = 'Please select a country';
countrySelect.append(defOption);
// 2.india
const indiaOption = document.createElement('option');
indiaOption.setAttribute('value', 'India');
indiaOption.setAttribute('id', 'india');
indiaOption.innerText = 'India';
countrySelect.append(indiaOption);
// 3. australia
const austrliaOption = document.createElement('option');
austrliaOption.setAttribute('value', 'Austrlia');
austrliaOption.setAttribute('id', 'australia');
austrliaOption.innerText = 'Austrlia';
countrySelect.append(austrliaOption);
// 4. canada
const canadaOption = document.createElement('option');
canadaOption.setAttribute('value', 'Canada');
canadaOption.setAttribute('id', 'canada');
canadaOption.innerText = 'Canada';
countrySelect.append(canadaOption);
// 5. USA
const usaOption = document.createElement('option');
usaOption.setAttribute('value', 'USA');
usaOption.setAttribute('id', 'usa');
usaOption.innerText = 'USA';
countrySelect.append(usaOption);

// Submit Button
const buttonRow = document.createElement('div');
form.append(buttonRow);

const button = document.createElement('input');
button.setAttribute('type', 'submit');
button.setAttribute('name', 'submit');
button.setAttribute('value', 'submit');
button.setAttribute('id', 'submit');

buttonRow.append(button);

// Table
const table = document.createElement('table');
table.classList.add('table');

container.append(table);

const thead = document.createElement('thead');
thead.classList.add('thead-dark');

table.append(thead);

const tr = document.createElement('tr');
thead.append(tr);
// No
const No = document.createElement('th');
No.setAttribute('scope', 'col');
No.innerText = 'No.';
tr.append(No);

// First Name
const FirstName = document.createElement('th');
FirstName.setAttribute('scope', 'col');
FirstName.innerText = 'First Name';
tr.append(FirstName);
// Second Name
const SecondName = document.createElement('th');
SecondName.setAttribute('scope', 'col');
SecondName.innerText = 'Second Name';
tr.append(SecondName);
// Address
const Address = document.createElement('th');
Address.setAttribute('scope', 'col');
Address.innerText = 'Address';
tr.append(Address);
// Pincode
const Pincode = document.createElement('th');
Pincode.setAttribute('scope', 'col');
Pincode.innerText = 'Pincode';
tr.append(Pincode);
// Gender
const Gender = document.createElement('th');
Gender.setAttribute('scope', 'col');
Gender.innerText = 'Gender';
tr.append(Gender);
// Choice of Food
const ChoiceOfFood = document.createElement('th');
ChoiceOfFood.setAttribute('scope', 'col');
ChoiceOfFood.innerText = 'Choice Of Food';
tr.append(ChoiceOfFood);
// State
const State = document.createElement('th');
State.setAttribute('scope', 'col');
State.innerText = 'State';
tr.append(State);
// Country
const Country = document.createElement('th');
Country.setAttribute('scope', 'col');
Country.innerText = 'Country';
tr.append(Country);

const tbody = document.createElement('tbody');
table.append(tbody);
const tbodyTr = document.createElement('tr');
tbody.append(tbodyTr);
//  ** values **
// No.
let count = 0;
const th = document.createElement('th');
th.setAttribute('scope', 'row');
th.setAttribute('id', 'No');
th.innerText = '';
tbodyTr.append(th);
// first Name
const firstNameValue = document.createElement('td');
firstNameValue.setAttribute('id', 'firstNameValue');
firstNameValue.innerText = '';
tbodyTr.append(firstNameValue);
// secondName
const secondNameValue = document.createElement('td');
secondNameValue.setAttribute('id', 'secondNameValue');
secondNameValue.innerText = '';
tbodyTr.append(secondNameValue);
// address
const addressValue = document.createElement('td');
addressValue.setAttribute('id', 'addressValue');
addressValue.innerText = '';
tbodyTr.append(addressValue);
// Pincode
const pincodeValue = document.createElement('td');
pincodeValue.setAttribute('id', 'pincodeValue');
pincodeValue.innerText = '';
tbodyTr.append(pincodeValue);
// Gender
const genderValue = document.createElement('td');
genderValue.setAttribute('id', 'genderValue');
genderValue.innerText = '';
tbodyTr.append(genderValue);
// Choice of Food
const choiceOfFoodValue = document.createElement('td');
choiceOfFoodValue.setAttribute('id', 'choiceOfFoodValue');
choiceOfFoodValue.innerText = '';
tbodyTr.append(choiceOfFoodValue);
// State
const StateValue = document.createElement('td');
StateValue.setAttribute('id', 'StateValue');
StateValue.innerText = '';
tbodyTr.append(StateValue);
// Country
const countryValue = document.createElement('td');
countryValue.setAttribute('id', 'countryValue');
countryValue.innerText = '';
tbodyTr.append(countryValue);

// """" Logic """"
const tempFirstName = document.getElementById('firstname');
const tempLastName = document.getElementById('secondname');
const tempAddress = document.getElementById('address');
const tempPostal = document.getElementById('Postal');
// gender
const maleGender = document.getElementById('male');
const femaleGender = document.getElementById('female');
// Food
const tempCheese = document.getElementById('cheese');
const tempTomatoes = document.getElementById('tomatoes');
const tempMushrooms = document.getElementById('mushrooms');
const tempPepperoni = document.getElementById('pepperoni');
const tempMozzarella = document.getElementById('mozzarella');

// state
const tempState = document.getElementById('state');
//  country
const selectCountry = document.getElementById('country');
const tempIndia = document.getElementById('india');
const tempAustralia = document.getElementById('australia');
const tempCanada = document.getElementById('canada');
const tempUSA = document.getElementById('usa');
// Table
const number = document.getElementById('No');
const fname = document.getElementById('firstNameValue');
const sname = document.getElementById('secondNameValue');
const add = document.getElementById('addressValue');
const pin = document.getElementById('pincodeValue');
const genderval = document.getElementById('genderValue');
const foodVal = document.getElementById('choiceOfFoodValue');
const stateVal = document.getElementById('StateValue');
const countryVal = document.getElementById('countryValue');

const submitButton = document.getElementById('submit');

// Variables
let nameFinal = '';
let lastNameFinal = '';
let addressFinal = '';
let postalFinal = '';
let genderFinal = '';
let foodFinal = [];
let stateFinal = '';
let countryFinal = '';

// Event Listeners
// 1. FirstName Update
tempFirstName.addEventListener('input', updateFirstName);
function updateFirstName(e) {
  nameFinal = e.target.value;
}
// 2. LastName tempLastName
tempLastName.addEventListener('input', updateLastName);
function updateLastName(e) {
  lastNameFinal = e.target.value;
}
// 3. address (tempAddress)
tempAddress.addEventListener('input', updateAddress);
function updateAddress(e) {
  addressFinal = e.target.value;
}

// 4. postal
tempPostal.addEventListener('input', updatePostal);
function updatePostal(e) {
  postalFinal = e.target.value;
}
console.log(tempPostal);

// 5. food
if (tempCheese.checked) {
  console.log('checked!!');
  foodFinal.append(tempCheese);
}
// state
tempState.addEventListener('input', updateState);
function updateState(e) {
  stateFinal = e.target.value;
}

// Country
selectCountry.addEventListener('change', (e) => {
  countryFinal = e.target.value;
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (
    nameFinal === '' ||
    lastNameFinal === '' ||
    addressFinal === '' ||
    postalFinal === '' ||
    countryFinal === ''
  ) {
    alert('Please fill all the details');
    return;
  }
  //   gender
  if (maleGender.checked) {
    genderFinal = maleGender.value;
  }
  if (femaleGender.checked) {
    genderFinal = femaleGender.value;
  }

  if (genderFinal === '') {
    alert('Select Gender');
    return;
  }

  //   food
  if (tempTomatoes.checked) {
    console.log('checked!!');
    foodFinal.push(tempTomatoes.value);
  }
  if (tempCheese.checked) {
    console.log('checked!!');
    foodFinal.push(tempCheese.value);
  }
  if (tempMushrooms.checked) {
    console.log('checked!!');
    foodFinal.push(tempMushrooms.value);
  }
  if (tempPepperoni.checked) {
    console.log('checked!!');
    foodFinal.push(tempPepperoni.value);
  }
  if (tempMozzarella.checked) {
    console.log('checked!!');
    foodFinal.push(tempMozzarella.value);
  }

  if (foodFinal.length <= 2) {
    alert('You should select atleast 2 choices of Food');
    return;
  }
  tableAppend();
});

function tableAppend() {
  count += 1;
  const tbodyTr = document.createElement('tr');
  tbody.append(tbodyTr);
  //  ** values **
  // No.
  const th = document.createElement('th');
  th.setAttribute('scope', 'row');
  th.setAttribute('id', 'No');
  th.innerText = count;
  tbodyTr.append(th);
  // first Name
  const firstNameValue = document.createElement('td');
  firstNameValue.setAttribute('id', 'firstNameValue');
  firstNameValue.innerText = nameFinal;
  tbodyTr.append(firstNameValue);
  // secondName
  const secondNameValue = document.createElement('td');
  secondNameValue.setAttribute('id', 'secondNameValue');
  secondNameValue.innerText = lastNameFinal;
  tbodyTr.append(secondNameValue);
  // address
  const addressValue = document.createElement('td');
  addressValue.setAttribute('id', 'addressValue');
  addressValue.innerText = addressFinal;
  tbodyTr.append(addressValue);
  // Pincode
  const pincodeValue = document.createElement('td');
  pincodeValue.setAttribute('id', 'pincodeValue');
  pincodeValue.innerText = postalFinal;
  tbodyTr.append(pincodeValue);
  // Gender
  const genderValue = document.createElement('td');
  genderValue.setAttribute('id', 'genderValue');
  genderValue.innerText = genderFinal;
  tbodyTr.append(genderValue);
  // Choice of Food
  const choiceOfFoodValue = document.createElement('td');
  choiceOfFoodValue.setAttribute('id', 'choiceOfFoodValue');
  choiceOfFoodValue.innerText = foodFinal;
  tbodyTr.append(choiceOfFoodValue);
  // State
  const StateValue = document.createElement('td');
  StateValue.setAttribute('id', 'StateValue');
  StateValue.innerText = stateFinal;
  tbodyTr.append(StateValue);
  // Country
  const countryValue = document.createElement('td');
  countryValue.setAttribute('id', 'countryValue');
  countryValue.innerText = countryFinal;
  tbodyTr.append(countryValue);

  nameFinal = '';
  lastNameFinal = '';
  addressFinal = '';
  postalFinal = '';
  genderFinal = '';
  foodFinal = [];
  stateFinal = '';
  countryFinal = '';

  tempFirstName.value = '';
  tempLastName.value = '';
  tempAddress.value = '';
  tempPostal.value = '';
  tempState.value = '';
  tempCheese.checked = false;
  tempTomatoes.checked = false;
  tempMushrooms.checked = false;
  tempPepperoni.checked = false;
  tempMozzarella.checked = false;
  maleGender.checked = false;
  femaleGender.checked = false;
}
