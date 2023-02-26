import { useEffect } from 'react';
import BbIcon from '../images/interests/bb.png';
import LegoIcon from '../images/interests/lego.png';
import SteamIcon from '../images/interests/steam.png';
import FoodIcon from '../images/interests/food.png';
import CocaColaIcon from '../images/interests/coca-cola.png';
import VegasIcon from '../images/interests/vegas.png';
import NeptuneIcon from '../images/interests/neptune.png';
import WheelIcon from '../images/interests/wheel.png';
import UniqloIcon from '../images/interests/uniqlo.png';

const Interests = () => {
  const imgArr = [BbIcon, LegoIcon, SteamIcon, FoodIcon, CocaColaIcon, VegasIcon,NeptuneIcon, WheelIcon, UniqloIcon];

  useEffect(() => {
    const iconInterests = document.querySelector('.interests-icon');
    let i = 1;

    // Show initial image
    iconInterests.src = imgArr[0];
    
    // Set image every x seconds by changing src of img 
    const interestsImgInterval = setInterval(() => {
      // Set img src to img in position i of array 
      iconInterests.src = imgArr[i];
      // Update the counter 
      i = (i + 1) % imgArr.length;
    }, 1000);

    return () => clearInterval(interestsImgInterval);
  }, []); 

  return (
    <div className="interests-container">
      <p>I like</p>
      <img className='interests-icon' src={imgArr} alt="Icons of my interests" />
      <p>.</p>
    </div>
  );
};

export default Interests;