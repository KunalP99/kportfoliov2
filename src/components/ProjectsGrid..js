import GamesInventory from './projects/GamesInventory';
import Hoodies from './projects/Hoodies';
import WeatherApp from './projects/WeatherApp';
import On1Solutions from './projects/On1Solutions';

const ProjectsGrid = () => {
  return (
    <div className="projects-grid-container">
      <GamesInventory />
      <Hoodies />
      <WeatherApp />
      <On1Solutions />
    </div>
  );
};

export default ProjectsGrid;