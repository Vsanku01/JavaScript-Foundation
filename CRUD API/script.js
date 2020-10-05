var stateOptions = {
  default: {
    text: ["", "", ""],
    value: ["", "", ""],
  },
  India: {
    text: [
      "Please select your State",
      "AndhraPradesh",
      "TamilNadu",
      "Karnataka",
    ],
    value: [
      "Please select your Country",
      "AndhraPradesh",
      "TamilNadu",
      "Karnataka",
    ],
  },
  Canada: {
    text: ["Please select your State", "Alberta", "Columbia", "Manitoba"],
    value: ["Please select your State", "Alberta", "Columbia", "Manitoba"],
  },
  Australia: {
    text: ["Please select your State", "Victoria", "Queensland", "Tasmania"],
    value: ["Please select your State", "Victoria", "Queensland", "Tasmania"],
  },
};

var cityOptions = {
  AndhraPradesh: {
    text: ["Please select your City", "Vijayawada", "Ongole", "Nellore"],
    value: ["Please select your City", "Vijayawada", "Ongole", "Nellore"],
  },
  TamilNadu: {
    text: ["Please select your City", "Chennai", "Coimbatore", "Madurai"],
    value: ["Please select your City", "Chennai ", "Coimbatore", "Madurai"],
  },
  Karnataka: {
    text: ["Please select your City", "Chennai", "Coimbatore", "Madurai"],
    value: ["Please select your City", "Chennai ", "Coimbatore", "Madurai"],
  },
  Alberta: {
    text: [
      "Please select your City",
      "Edmond",
      "Fort Saskatchewan",
      "Grande Prairie",
    ],
    value: [
      "Please select your City",
      "Edmond",
      "Fort Saskatchewan",
      "Grande Prairie",
    ],
  },
  Columbia: {
    text: ["Please select your City", "Bogotá", "Medellín", "Barranquilla"],
    value: ["Please select your City", "Bogotá", "Medellín", "Barranquilla"],
  },
  Manitoba: {
    text: ["Please select your City", "Winnipeg", "Brandon", "Steinbach"],
    value: ["Please select your City", "Winnipeg", "Brandon", "Steinbach"],
  },
  Victoria: {
    text: ["Please select your City", "Melbourne", "Geelong", "Ballarat"],
    value: ["Please select your City", "Melbourne", "Geelong", "Ballarat"],
  },
  Queensland: {
    text: ["Please select your City", "Brisbane", "Townsville", "Toowoomba"],
    value: ["Please select your City", "Brisbane", "Townsville", "Toowoomba"],
  },
  Tasmania: {
    text: ["Please select your City", "Launceston", "Devonport", "Burnie"],
    value: ["Please select your City", "Launceston", "Devonport", "Burnie"],
  },
};

var countryMenu = document.getElementById("country");
var stateMenu = document.getElementById("state");
var cityMenu = document.getElementById("city");
const loader = document.getElementById("loader");
const table = document.querySelector("table");
const tbody = document.querySelector("tbody");

// Event
countryMenu.addEventListener("change", function () {
  // getting a selection option
  var selected_option = stateOptions[this.value];
  console.log(selected_option);

  // removing the submenu
  while (stateMenu.options.length > 0) {
    stateMenu.remove(0);
  }

  // convert the selected object into array and create a options for each array element
  Array.from(selected_option.text).forEach(function (el) {
    let option = new Option(el, el);
    stateMenu.appendChild(option);
  });
});

// City Menu
stateMenu.addEventListener("change", function () {
  // getting a selection option
  var selected_option = cityOptions[this.value];
  console.log(selected_option);

  // removing the submenu
  while (cityMenu.options.length > 0) {
    cityMenu.remove(0);
  }

  // convert the selected object into array and create a options for each array element
  Array.from(selected_option.text).forEach(function (el) {
    let option = new Option(el, el);
    cityMenu.appendChild(option);
  });
});

// CRUD
var userDataList = [];
var isEdit = false;
var selectedRow = null;
async function getUsers() {
  var userRequest = await fetch(
    "https://5f7b160040abc60016472c7a.mockapi.io/users"
  );

  var userData = await userRequest.json();
  userDataList = userData;
  tbody.innerHTML = "";
  generateData(userData);
}

// ** Generate Data
function generateData(userData) {
  console.log("calling....");
  userData.forEach((element) => {
    const tbodyTr = document.createElement("tr");
    tbody.append(tbodyTr);
    //  ** values **
    const firstNameValue = document.createElement("td");
    firstNameValue.setAttribute("id", "firstNameValue");
    firstNameValue.innerText = element.name;
    tbodyTr.append(firstNameValue);
    // email
    const emailValue = document.createElement("td");
    emailValue.setAttribute("id", "emailValue");
    emailValue.innerText = element.email;
    tbodyTr.append(emailValue);
    // country
    const countryValue = document.createElement("td");
    countryValue.setAttribute("id", "countryValue");
    countryValue.innerText = element.country;
    tbodyTr.append(countryValue);
    // State
    const State = document.createElement("td");
    State.setAttribute("id", "State");
    State.innerText = element.state;
    tbodyTr.append(State);
    // City
    const City = document.createElement("td");
    City.setAttribute("id", "City");
    City.innerText = element.city;
    tbodyTr.append(City);
    // Address Line 1
    const Address1Value = document.createElement("td");
    Address1Value.setAttribute("id", "Address1Value");
    Address1Value.innerText = element.address1;
    tbodyTr.append(Address1Value);
    // Address Line 1
    const Address2Value = document.createElement("td");
    Address2Value.setAttribute("id", "Address2Value");
    Address2Value.innerText = element.address2;
    tbodyTr.append(Address2Value);
    // Gender
    const genderValue = document.createElement("td");
    genderValue.setAttribute("id", "genderValue");
    genderValue.innerText = element.gender;
    tbodyTr.append(genderValue);
    // marital
    const maritalValue = document.createElement("td");
    maritalValue.setAttribute("id", "maritalValue");
    maritalValue.innerText = element.marital;
    tbodyTr.append(maritalValue);
    // Fav Food
    const favFood = document.createElement("td");
    favFood.setAttribute("id", "favFood");
    favFood.innerText = element.food;
    tbodyTr.append(favFood);
    // Fav Color
    const favColor = document.createElement("td");
    favColor.setAttribute("id", "favColor");
    favColor.innerText = element.color;
    tbodyTr.append(favColor);
    // Buttons
    var tdEdit = document.createElement("td");
    var tdDelete = document.createElement("td");
    var editButton = document.createElement("button");
    editButton.classList.add("btn-primary");
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("btn-primary");
    editButton.innerHTML = "Edit";
    deleteButton.innerHTML = "Delete";
    tdEdit.appendChild(editButton);
    tdDelete.appendChild(deleteButton);
    editButton.setAttribute("onclick", "getRow(" + element.id + ")");
    deleteButton.setAttribute("onclick", "deleteRow(" + element.id + ")");
    tbodyTr.append(tdEdit, tdDelete);
  });
  loader.style.display = "none";
  document.querySelector("table").classList.remove("hidden");
}

// ** button
let submit = document.getElementById("btn");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  addData();
});

async function deleteRow(id) {
  loader.style.display = "block";
  document.querySelector("table").classList.add("hidden");
  //
  var question = confirm("Do you want to delete the candidature ?");
  if (question) {
    var deleteRow = await fetch(
      "https://5f7b160040abc60016472c7a.mockapi.io/users/" + id,
      {
        method: "DELETE",
      }
    );
    await deleteRow.json();
    getUsers();
    loader.style.display = "none";
    document.querySelector("table").classList.remove("hidden");
  }
}

function getRow(id) {
  document.getElementById("name").value = userDataList[id - 1].name;
  document.getElementById("exampleInputEmail1").value =
    userDataList[id - 1].email;
  document.getElementById("exampleInputPassword1").value =
    userDataList[id - 1].password;
  document.getElementById("reenterPassword").value =
    userDataList[id - 1].reenterpassword;
  document.getElementById("country").value = userDataList[id - 1].country;
  document.getElementById("state").value = userDataList[id - 1].state;
  document.getElementById("city").value = userDataList[id - 1].city;
  document.getElementById("address").value = userDataList[id - 1].address1;
  document.getElementById("address2").value = userDataList[id - 1].address2;
  document.getElementById("food").value = userDataList[id - 1].food;
  document.getElementById("color").value = userDataList[id - 1].color;
  // Male
  if (userDataList[id - 1].gender == "male") {
    document.getElementById("male").checked = true;
  } else if (userDataList[id - 1].gender == "female") {
    document.getElementById("female").checked = true;
  }
  // Marital
  if (userDataList[id - 1].marital == "married") {
    document.getElementById("married").checked = true;
  } else if (userDataList[id - 1].marital == "unmarried") {
    document.getElementById("unmarried").checked = true;
  }
  //
  isEdit = true;
  selectedRow = userDataList[id - 1].id;
}

async function addData() {
  loader.style.display = "block";
  document.querySelector("table").classList.add("hidden");
  var genderFinal = "";
  var maleGender = document.getElementById("male");
  var femaleGender = document.getElementById("female");

  if (maleGender.checked) {
    genderFinal = maleGender.value;
  } else if (femaleGender.checked) {
    genderFinal = femaleGender.value;
  }
  var maritalFinal = "";
  var marriedVal = document.getElementById("married");
  var unmarriedVal = document.getElementById("unmarried");

  if (marriedVal.checked) {
    maritalFinal = marriedVal.value;
  } else if (unmarriedVal.checked) {
    maritalFinal = unmarriedVal.value;
  }

  var data = {
    name: document.getElementById("name").value,
    email: document.getElementById("exampleInputEmail1").value,
    password: document.getElementById("exampleInputPassword1").value,
    reenterpassword: document.getElementById("reenterPassword").value,
    country: document.getElementById("country").value,
    state: document.getElementById("state").value,
    city: document.getElementById("city").value,
    address1: document.getElementById("address").value,
    address2: document.getElementById("address2").value,
    gender: genderFinal,
    marital: maritalFinal,
    food: document.getElementById("food").value,
    color: document.getElementById("color").value,
  };
  // password fields not match
  if (data.password !== data.reenterpassword) {
    console.log("alerting");
    alert("passwords are not matching");
    loader.style.display = "none";
    document.querySelector("table").classList.remove("hidden");
    return;
  }

  if (!isEdit) {
    console.log("adding data");
    var postData = await fetch(
      "https://5f7b160040abc60016472c7a.mockapi.io/users",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    loader.classList.add("hidden");
    table.classList.remove("hidden");
  } else if (isEdit) {
    console.log("editing data");
    console.log(selectedRow);
    var postData = await fetch(
      "https://5f7b160040abc60016472c7a.mockapi.io/users/" + selectedRow,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    isEdit = false;
    selectedRow = null;
    loader.classList.add("hidden");
    table.classList.remove("hidden");
  }

  var postResult = await postData.json();
  // reset fields
  document.getElementById("name").value = "";
  document.getElementById("exampleInputEmail1").value = "";
  document.getElementById("exampleInputPassword1").value = "";
  document.getElementById("reenterPassword").value = "";
  document.getElementById("country").value = "";
  document.getElementById("state").value = "";
  document.getElementById("city").value = "";
  document.getElementById("address").value = "";
  document.getElementById("address2").value = "";
  document.getElementById("food").value = "";
  document.getElementById("color").value = "";
  console.log(postResult);
  getUsers();
}

getUsers();
