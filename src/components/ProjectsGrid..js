import GamesInventory from './projects/GamesInventory';
import Hoodies from './projects/Hoodies';
import WeatherApp from './projects/WeatherApp';
import On1Solutions from './projects/On1Solutions';
import { useState } from 'react';

const ProjectsGrid = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="projects-grid-container" id='projects'>
      <GamesInventory showModal={showModal} setShowModal={setShowModal}/>
      <Hoodies showModal={showModal} setShowModal={setShowModal} />
      <WeatherApp />
      <On1Solutions />
    </section>
  );
};

export default ProjectsGrid;