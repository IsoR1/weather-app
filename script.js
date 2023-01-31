

async function getWeather(loc) {
    let key = 'a40f3a8337c485e713b0b666ad98b30b'
    // let data = `https://api.openweathermap.org/data/2.5/weather?q=London&APPID=${key}`
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${key}&units=imperial`)
    const data = await response.json();
    console.log(data) 
    // .then(console.log(data))
}

// a40f3a8337c485e713b0b666ad98b30b

getWeather("Miami")
getWeather("London")
getWeather("Jacksonville")