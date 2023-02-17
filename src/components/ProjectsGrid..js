import GamesInventory from './projects/GamesInventory';
import Hoodies from './projects/Hoodies';
import WeatherApp from './projects/WeatherApp';

const ProjectsGrid = () => {
  return (
    <div className="projects-grid-container">
      <GamesInventory />
      <Hoodies />
      <WeatherApp />
      <div className="on1-card"></div>
    </div>
  );
};

export default ProjectsGrid;