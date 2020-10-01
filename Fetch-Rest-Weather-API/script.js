let countries = [];
let weatherInfo = [];
let count = 0;
const countryRequest = async () => {
  const fetchCountries = await fetch('https://restcountries.eu/rest/v2/all#');
  const countryData = await fetchCountries.json();
  for (country of countryData) {
    countries.push(country.name);
  }
  return countryData;
};
// e97adeb719ce0fdd36331ed8e5ea0be1

const weatherApi = (countryName) => {
  return new Promise((resolve, reject) => {
    countryName.forEach(async (country, index) => {
      var data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&units=imperial&appid=171f2eeabf1e2be2486628688beff943
        `
      );
      var jsonData = await data.json();
      weatherInfo.push(jsonData.main.temp);
      if (weatherInfo.length === countries.length - 1) {
        resolve(weatherInfo);
      }
    });
  });
};

countryRequest().then((data) => {
  let html = '';
  data.forEach((country, index) => {
    html += `
        <div class="col-sm">
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src=${country.flag} alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title"><span>Name: </span>${country.name}</h5>
        </div>
        <ul class="list-group list-group-flush" id="index-${index}">
          <li class="list-group-item"><h6><span> Capital </span> :${
            country.capital
          }</h6></li>
          <li class="list-group-item"><h6>Lat&Long: ${country.latlng}</h6></li>
          <li class="list-group-item"><h6>Region: ${country.region}</h6></li>
          <li class="list-group-item"><h6>Currency: ${JSON.stringify(
            country.currencies[0].code
          )}</h6></li>
          <li class="list-group-item"><h6>Name: ${JSON.stringify(
            country.currencies[0].name
          )}</h6></li>
          <li class="list-group-item"><h6>Symbol: ${JSON.stringify(
            country.currencies[0].symbol
          )}</h6></li>
        </ul>
      </div>
        </div>
        `;
  });
  document.querySelector('.row').innerHTML = html;
  weatherApi(data).then((response) => {
    console.log('🥳 Success');
    response.forEach((weather, index) => {
      let li = document.createElement('li');
      let ul = document.getElementById(`index-${index}`);
      li.classList.add('list-group-item');
      li.innerHTML = `
        <h6>Weather: ${weather}°C</h6>
        `;

      ul.append(li);
    });
  });
});
