import { useEffect } from 'react';
import BbIcon from '../images/interests/bb.png';
import GuitarIcon from '../images/interests/guitar.png';
import LegoIcon from '../images/interests/lego.png';
import BoardGamesIcon from '../images/interests/board-games.png';
import VideoGamesIcon from '../images/interests/games.png';
import CodingIcon from '../images/interests/coding.png';
import VideoEditingIcon from '../images/interests/video-editing.png';
import CardGamesIcon from '../images/interests/card-games.png';

const Interests = () => {
  const imgArr = [
    {
      icon: BbIcon,
      name: 'Breaking Bad',
    },
    {
      icon: GuitarIcon,
      name: 'Guitar',
    },
    {
      icon: LegoIcon,
      name: 'Lego',
    },
    {
      icon: BoardGamesIcon,
      name: 'Board Games',
    },
    {
      icon: VideoGamesIcon,
      name: 'Video Games',
    },
    {
      icon: CodingIcon,
      name: 'Coding',
    },
    {
      icon: VideoEditingIcon,
      name: 'Video Editing',
    },
    {
      icon: CardGamesIcon,
      name: 'Card Games',
    },
  ];

  useEffect(() => {
    const iconInterests = document.querySelector('.interests-icon');
    const nameInterests = document.querySelector('.interests-name');
    let i = 1;

    // Show initial image
    iconInterests.src = imgArr[0].icon;
    nameInterests.textContent = imgArr[0].name;

    // Set image every 1 second by changing src of img
    const interestsImgInterval = setInterval(() => {
      // Set img src and img name to img in position i of array
      iconInterests.src = imgArr[i].icon;
      nameInterests.textContent = imgArr[i].name;
      // Update the counter
      i = (i + 1) % imgArr.length;
    }, 1000);

    return () => clearInterval(interestsImgInterval);
  }, []);

  return (
    <div className='interests-container'>
      <p>I like</p>
      <div className='icon-container'>
        <img
          className='interests-icon'
          src={imgArr}
          alt='Icons of my interests'
        />
        <p className='interests-name'></p>
      </div>
      <p>.</p>
    </div>
  );
};

export default Interests;
