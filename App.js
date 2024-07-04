const apiKey = "dd7fb77e8f8964a1b93a706972f721a3";
const apiURL = "http://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const search1 = document.querySelector("#in");
const searchbtn = document.querySelector("#btn");

async function checkWeather(city) {
    try {
        if (!city) {
            throw new Error("City name cannot be empty");
        }

        const response = await fetch(apiURL + city + `&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        console.log(data);

        document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#speed").innerHTML = data.wind.speed + " km/h";
        document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert(error.message);
    }
}

searchbtn.onclick = () => {
    const city = search1.value.trim();
    // console.log("City name:", city);
    checkWeather(city);
};

// checkWeather(nagpur);
