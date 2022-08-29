
const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country);
    // }

    // jodi amra kono return array na chai taile amra forEach use korbo.
    // using forEach - jehetu amra forEach use korchi tai forEach er baire countriesContainer re call korbo.
    const countriesContainer = document.getElementById("countries-container");
    countries.forEach(country => {
        // console.log(country);
        const countryDiv = document.createElement("div");
        countryDiv.classList.add("country");
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common} </h3>
            <p>Capital : ${country.capital ? country.capital[0] : "No capital" }</p>
            <button onclick="loadCountryCapital('${country.cca2}')">Display details: </button>
            
        `;
        countriesContainer.appendChild(countryDiv);
    })
}

const loadCountryCapital = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}

    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))

    // console.log("get country details", code);
    // console.log(url);
}

const displayCountryDetail = country => {
    const countryDetail = document.getElementById("country-detail");
    countryDetail.innerHTML = `
        <h2>Details : ${country.name.common}</h2>
        <img src = "${country.flags.png}">
    `
}

loadCountries();