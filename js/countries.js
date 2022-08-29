
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
            <p>Capital : ${country.capital? country.capital[0] : "No capital" }</p>
        `;
        countriesContainer.appendChild(countryDiv);
    })
}
loadCountries();