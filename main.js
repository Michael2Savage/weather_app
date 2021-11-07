console.log('whats good');

const city = document.getElementById("city_input");

// Button click event
const button = document.getElementById('only_button');
button.addEventListener('click', (e)=>{
    e.preventDefault();
    createHTML(city.value);
});

//Function to call the API
const getAPIdata = async (city) => {
    let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7bed0ed87b87b74031e63f140fdabec6`);
    console.log(result);
    return result
}

// image animation selector function
const select_animation = async (input) => {
    let api_data = await getAPIdata(input);
    if (api_data.data.weather[0].main == 'Clouds') {
        return 'images/animated/cloudy-day-1.svg';
    }
    if (api_data.data.weather[0].main == 'Clear') {
        return 'images/animated/day.svg';
    }
    if (api_data.data.weather[0].main == 'Rain') {
        return 'images/animated/rainy-5.svg';
    }
    if (api_data.data.weather[0].main == 'Snow') {
        return 'images/animated/snowy-2.svg';
    }


}


// Create html element
const createHTML = async (input) => {
    let api_data = await getAPIdata(input);
    document.getElementById('city_name').innerHTML = api_data.data.name;
    document.getElementById("api_call_animation").setAttribute("src", await select_animation(input));
    document.getElementById('temp').innerHTML = `${((api_data.data.main.temp - 273.15)*9/5 + 32).toFixed(0)} &#8457;`;
    document.getElementById('weather').innerHTML = api_data.data.weather[0].description
}
