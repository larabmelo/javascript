// picking up the elements from DOM first, so we can manipulate it

const API_KEY = 'e520c39e664992f5f4e739ddba1c1a20';

const container = document.querySelector('.container');
const searchButton = document.querySelector('.search-box button');
const inputField = document.querySelector('.search-box input');
const error404 = document.querySelector('.not-found');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const image = weatherBox.querySelector('img');
const temperature = weatherBox.querySelector('.temperature');
const description = weatherBox.querySelector('.description');
const humidity = weatherDetails.querySelector('.humidity span');
const wind = weatherDetails.querySelector('.wind span');

const performSearch = () => {
  const city = inputField.value;

  if (city === '') return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      if (json.cod === '404') {
        showError();
      } else {
        hideError();

        updateWeatherInfo(json);
      }
    });
};

const showError = () => {
  container.style.height = '400px';
  weatherBox.style.display = 'none';
  weatherDetails.style.display = 'none';
  error404.style.display = 'block';
  error404.classList.add('fadeIn');
};

const hideError = () => {
  error404.style.display = 'none';
  error404.classList.remove('fadeIn');
};

const updateWeatherInfo = (json) => {
  switch (json.weather[0].main) {
    case 'Clear':
      image.src = 'images/clear.png';
      break;
    case 'Rain':
      image.src = 'images/rain.png';
      break;
    case 'Snow':
      image.src = 'images/snow.png';
      break;
    case 'Clouds':
      image.src = 'images/cloud.png';
      break;
    case 'Haze':
      image.src = 'images/mist.png';
      break;
    default:
      image.src = '';
  }

  temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
  description.innerHTML = `${json.weather[0].description}`;
  humidity.innerHTML = `${json.main.humidity}%`;
  wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

  weatherBox.style.display = '';
  weatherDetails.style.display = '';
  weatherBox.classList.add('fadeIn');
  weatherDetails.classList.add('fadeIn');
  container.style.height = '590px';
};

inputField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    performSearch();
  }
});

searchButton.addEventListener('click', performSearch);
