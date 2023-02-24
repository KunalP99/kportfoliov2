import { useState } from 'react';
import GamesInventory from './projects/GamesInventory';
import Hoodies from './projects/Hoodies';
import WeatherApp from './projects/WeatherApp';
import On1Solutions from './projects/On1Solutions';
import ProjectsModal from './ProjectsModal';
import projectsInfo from '../information/projectsInfo';

const ProjectsGrid = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalNum, setModalNum] = useState(null); // Pass to all projects component to display correct data on the modal

  return (
    <div>
      <section className="projects-grid-container" id='projects'>
        <GamesInventory setShowModal={setShowModal} setModalNum={setModalNum}/>
        <Hoodies setShowModal={setShowModal} setModalNum={setModalNum}/>
        <WeatherApp setShowModal={setShowModal} setModalNum={setModalNum}/>
        <On1Solutions setShowModal={setShowModal} setModalNum={setModalNum}/>
      </section>
      {showModal && <ProjectsModal info={projectsInfo[modalNum]} setShowModal={setShowModal}/>}
    </div>

  );
};

export default ProjectsGrid;