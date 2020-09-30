let request = (obj) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', obj.url, true);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    };

    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
};

request({ url: 'https://restcountries.eu/rest/v2/all#' })
  .then((data) => {
    let countriesInfo = JSON.parse(data);
    let html = '';
    countriesInfo.forEach((country) => {
      html += `
      <div class="col-sm">
      <div class="card" style="width: 18rem;">
      <img class="card-img-top" src=${country.flag} alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title"><span>Name: </span>${country.name}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><h6><span> Capital </span> :${country.capital}</h6></li>
        <li class="list-group-item"><h6>Lat&Long: ${country.latlng}</h6></li>
        <li class="list-group-item"><h6>Region: ${country.region}</h6></li>
        <li class="list-group-item"><h6>Currency: ${JSON.stringify(country.currencies[0].code)}</h6></li>
        <li class="list-group-item"><h6>Name: ${JSON.stringify(country.currencies[0].name)}</h6></li>
        <li class="list-group-item"><h6>Symbol: ${JSON.stringify(country.currencies[0].symbol)}</h6></li>
      </ul>
    </div>
      </div>
      `;
    });
    document.querySelector('.row').innerHTML = html;
  })
  .catch((error) => console.log(error));
