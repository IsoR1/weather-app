const form = document.querySelector('form');
const submitButton = document.querySelector(".submit")

const getWeather = async (loc) => {
    const apiKey = 'a40f3a8337c485e713b0b666ad98b30b'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=imperial`;
    const response = await fetch(`${apiUrl}&q=${loc}`);
    const data = await response.json();
    console.log(data.sys.country);
    return data
}

const processData = (data) => {
    return  {
        location: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        weather: data.weather[0].description,
    };
};

const DisplayData = (data) => {
    const locationEl = document.querySelector(".location");
    const countryEl = document.querySelector(".country");
    const temperatureEl = document.querySelector(".temperature");
    const weatherEl = document.querySelector(".weather");

    locationEl.textContent = `${data.location}, ${data.country}`;
    temperatureEl.textContent = `Temperature: ${Math.round(data.temp)}°F`;
    weatherEl.textContent = `Weather: ${data.weather}`;
}

// getWeather("Miami")
//     .then(data => {
//         const processedData = processData(data);
//         console.log(processedData);
//     })
//     .catch(error => console.error(error))


submitButton.addEventListener("click", e => {
    e.preventDefault();

    const location = form.locationForm.value

    getWeather(location)
    .then(data => {
        const processedData = processData(data);
        DisplayData(processedData)
        console.log(processedData);
    })
    .catch(error => console.error(error))


})


// async function getWeather(loc) {
//     let key = 'a40f3a8337c485e713b0b666ad98b30b'
//     // let data = `https://api.openweathermap.org/data/2.5/weather?q=London&APPID=${key}`
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${key}&units=imperial`)
//     const data = await response.json();
//     console.log(data) 
//     // .then(console.log(data))
// }

// // a40f3a8337c485e713b0b666ad98b30b

// getWeather("Miami")
// getWeather("London")
// getWeather("Jacksonville")