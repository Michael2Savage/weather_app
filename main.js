console.log('whats good');

const city = document.getElementById("city_input");

// Button click event
const button = document.getElementById('only_button');
button.addEventListener('click', (e)=>{
    e.preventDefault();
    // getAPIdata(city.value);
    createHTML(city.value);
});

//Function to call the API
const getAPIdata = async (city) => {
    let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7bed0ed87b87b74031e63f140fdabec6`);
    console.log(result);
    return result
}

// Create html element
const createHTML = async (input) => {
    let api_data = await getAPIdata(input);
    document.getElementById('city_name').innerHTML = api_data.data.name;
    document.getElementById('temp').innerHTML = `${((api_data.data.main.temp - 273.15)*9/5 + 32).toFixed(2)} &#8457;`;
    document.getElementById('weather').innerHTML = api_data.data.weather[0].description
}
