const inputbox=document.getElementById('city');
const searchbtn=document.getElementById('add');
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const windspeed=document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');
async function  checkweather(city)
{
    const api_key="38aa33357ea4993cbae3fe54aeac8082"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response =>response.json());

if(weather_data.cod==`404`){
    
    location_not_found.style.display ="flex";
    weather_body.style.display="none";
    document.getElementsById("city").style.color="red";
    return;
}
location_not_found.style.display ="none";
weather_body.style.display="flex";

        temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
        description.innerHTML=`${weather_data.weather[0].description}`;
        humidity.innerHTML= `${weather_data.main.humidity}%`;
        windspeed.innerHTML=`${weather_data.wind.speed}Km/H`;


switch(weather_data.weather[0].main)
{
        case 'Clouds':
        weather_img.src="photo/cloud.png";
        break;
        case 'Clear':
        weather_img.src="photo/clear.png";
        break;
        case 'Rain':
        weather_img.src="photo/rain.png";
        break;
        case 'Mist':
        weather_img.src="photo/mist.png";
        break;
        case 'Snow':
        weather_img.src="photo/snow.png";
        break;
}


}
function call(){
    checkweather(inputbox.value);
} 