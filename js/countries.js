const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries()
const displayCountries = (countries) => {
    const countriesDiv = document.getElementById('countries')
    // for (const country of countries) {
    //     const p = document.createElement('p');
    //     p.innerText = `
    //     Name: ${country.name.common}
    //     Capital ${country.capital}`;
    //     const img = document.createElement(img);
    //     img.sre = country.flags.png;
    //     div.appendChild(p);
    //     console.log(country.name.common);
    // }
    // using foreach and error function
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');

        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')">Details</button>
        `;
        countriesDiv.appendChild(div);
    });
}
const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}
const displayCountryDetail = (countries) => {
    const countryDiv = document.getElementById('country-detail');

    countryDiv.innerHTML = `
    <h4>${countries.name.common}</h4>
    <p>population :${countries.population}</p>
    <img src="${countries.flags.png}"><img/>
    `
    console.log(countries);
}