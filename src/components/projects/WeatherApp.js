import BlackArrow from '../../images/projects/black-arrow.svg';
import WhiteArrow from '../../images/projects/white-arrow.svg';
import LaptopMorning from '../../images/projects/weather/laptop-morning.png';
import { useEffect } from 'react';
// import { useEffect } from 'react';
// import LaptopAfternoon from '../../images/projects/weather/laptop-afternoon.png';
// import LaptopEvening from '../../images/projects/weather/laptop-evening.png';
// import LaptopNight from '../../images/projects/weather/laptop-night.png';
// import LaptopMidnight from '../../images/projects/weather/laptop-midnight.png';

// const morning =
//   "linear-gradient(180deg, rgba(0, 179, 236, 0.55) 0%, #1A9EC8 58.56%)";
// const afternoon = "linear-gradient(180deg, #71AAFF 0%, #FFB951 100%)";
// const evening =
//   "linear-gradient(180deg, rgba(254, 185, 83, 0.72) 0%, rgba(198, 0, 130, 0.44) 58.56%)";
// const night =
//   "linear-gradient(180deg, rgba(10, 41, 109, 0.55) 0%, #374667 58.56%)";
// const midnight =
//   "linear-gradient(180deg, rgba(42, 49, 64, 0.55) 0%, #484A4E 58.56%)";

const WeatherApp = () => {
  useEffect(() => {
    const weatherAppCard = document.querySelector('.weather-app-card');

    const bgInterval = setInterval(() => {
      if (weatherAppCard.classList.contains('bg-morning')) {
        // To Afternoon
        weatherAppCard.classList.remove('bg-morning');
        weatherAppCard.classList.add('bg-afternoon');
      } else if (weatherAppCard.classList.contains('bg-afternoon')) {
        // To Evening
        weatherAppCard.classList.remove('bg-afternoon');
        weatherAppCard.classList.add('bg-evening');
      } else if (weatherAppCard.classList.contains('bg-evening')) {
        // To Night
        weatherAppCard.classList.remove('bg-evening');
        weatherAppCard.classList.add('bg-night');
      } else if (weatherAppCard.classList.contains('bg-night')) {
        // To Midnight
        weatherAppCard.classList.remove('bg-night');
        weatherAppCard.classList.add('bg-midnight');
      } else if (weatherAppCard.classList.contains('bg-midnight')) {
        // To Morning
        weatherAppCard.classList.remove('bg-midnight');
        weatherAppCard.classList.add('bg-morning');
      }
    }, 2000);

    return () => clearInterval(bgInterval);
  }, []);
  
  return (
    <div className="card weather-app-card bg-morning" >
      <h2>Weather App</h2>
      <p>Get the forecast, make a plan, and seize the day.</p>
      <div className="links-container">
        <a className="visit-website-link" href="https://kunalp99.github.io/weather-app-v2/" target='_blank' rel="noreferrer">Visit Website <img src={BlackArrow} alt="Visit Weather App website" /></a>
        <a className="github-link" href="https://github.com/KunalP99/weather-app-v2" target='_blank' rel="noreferrer">GitHub  <img src={WhiteArrow} alt="Visit Weather App GitHub" /></a>
      </div>
      <img className='weather-app-img' src={LaptopMorning} alt="Laptop displaying weather app" />
    </div>
  );
} ;

export default WeatherApp;