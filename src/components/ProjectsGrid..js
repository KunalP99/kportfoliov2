import GamesInventory from './projects/GamesInventory';

const ProjectsGrid = () => {
  return (
    <div className="projects-grid-container">
      <GamesInventory />
      <div className="hoodies-card"></div>
      <div className="weather-card"></div>
      <div className="on1-card"></div>
    </div>
  );
};

export default ProjectsGrid;