import GamesInventory from './projects/GamesInventory';
import Hoodies from './projects/Hoodies';
import WeatherApp from './projects/WeatherApp';
import On1Solutions from './projects/On1Solutions';

const ProjectsGrid = () => {
  return (
    <section className="projects-grid-container">
      <GamesInventory />
      <Hoodies />
      <WeatherApp />
      <On1Solutions />
    </section>
  );
};

export default ProjectsGrid;