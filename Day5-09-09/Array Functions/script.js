// readyState 0-unsent, 1- opened , 2- head is received, 3-loading, 4-done

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      var result = [];
      for (var i in data) {
        result.push(data[i]);
      }

      //   1. Get all the countries in Asia
      const asianCountries = result.filter(
        (country) => country.region == 'Asia'
      );
      console.log(asianCountries);

      // 2. Get the countries with population less than 2L
      const filterPoupulation = result.filter(
        (country) => country.population < 200000
      );
      console.log(filterPoupulation);

      //  3. Bumpup the current population  of all the counteirs by 1L
      console.log(result[0].population); // population: 27657145
      var increasePopulation = result.map(function (country) {
        country.population += 100000;
        return country.population;
      });
      console.log(increasePopulation); // population after increment: 27757145

      //  4. Convert all the names to capital
      var capitaliseNames = result.map((countryName) => {
        let wordList = countryName.name.toLowerCase().split(' ');
        for (let i = 0; i < wordList.length; i++) {
          wordList[i] = wordList[i][0].toUpperCase() + wordList[i].slice(1);
        }

        return wordList;
      });
      console.log(capitaliseNames[0]);

      // 5.  print following details  name , capital , flag
      let countryDetails = [];
      result.forEach((country) => {
        countryDetails.push([country.name, country.capital, country.flag]);
      });
      console.log(countryDetails[0]);

      // 6. Print the total population of countries
      let totalPopulation = result.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.population;
      });

      console.log(totalPopulation);

      // 7. Print the total population of the countries in asia
      let asianPopulation = asianCountries.reduce(
        (accumulator, currentValue) => {
          return accumulator + currentValue.population;
        }
      );
      console.log(asianPopulation);
    }
    if (xhr.status == 404) {
      console.log('File or resource not found');
    }
  }
};
xhr.open('get', 'https://restcountries.eu/rest/v2/all#', true);
xhr.send();
console.log('something here');
let ar = [1, 2];
