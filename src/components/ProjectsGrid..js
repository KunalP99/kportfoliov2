import GamesInventory from './projects/GamesInventory';
import Hoodies from './projects/Hoodies';

const ProjectsGrid = () => {
  return (
    <div className="projects-grid-container">
      <GamesInventory />
      <Hoodies />
      <div className="weather-card"></div>
      <div className="on1-card"></div>
    </div>
  );
};

export default ProjectsGrid;