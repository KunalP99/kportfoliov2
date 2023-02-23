import { useState } from 'react';
import GamesInventory from './projects/GamesInventory';
import Hoodies from './projects/Hoodies';
import WeatherApp from './projects/WeatherApp';
import On1Solutions from './projects/On1Solutions';
import ProjectsModal from './ProjectsModal';
import projectsInfo from '../information/projectsInfo';

const ProjectsGrid = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <section className="projects-grid-container" id='projects'>
        <GamesInventory setShowModal={setShowModal}/>
        <Hoodies setShowModal={setShowModal}/>
        <WeatherApp setShowModal={setShowModal}/>
        <On1Solutions setShowModal={setShowModal}/>
      </section>
      {/* Figure out how to change this number React Context???*/}
      {showModal && <ProjectsModal info={projectsInfo[0]} setShowModal={setShowModal}/>}
    </div>

  );
};

export default ProjectsGrid;