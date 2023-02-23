import OrangeLink from '../../images/projects/orange-link.svg';
import WhiteLink from '../../images/projects/white-link.svg';
import WhiteArrow from '../../images/projects/white-arrow.svg';
import ProjectsModal from '../ProjectsModal';
import projectsInfo from '../../information/projectsInfo';

// Images
import InventoryImg1 from '../../images/projects/inventory/inventory-img-1.png';
import InventoryImg2 from '../../images/projects/inventory/inventory-img-2.png';
import InventoryImg3 from '../../images/projects/inventory/inventory-img-3.png';

const GamesInventory = ({showModal, setShowModal}) => {
  return (
    <div className='games-container'>
      <div className="games-inventory-card">
        <h2 className='project-title'>Games Inventory</h2>
        <p className='project-slogan'>Take control of your games, never misplace a title again.</p>
        <div className="links-container">
          <a className="visit-website-link" href="https://games-inventory.onrender.com/" target='_blank' rel="noreferrer">Visit Website <img className='link-img' src={OrangeLink} alt="Visit games inventory website" /></a>
          <a className="github-link" href="https://github.com/KunalP99/inventory-management" target='_blank' rel="noreferrer">GitHub  <img className='link-img' src={WhiteLink} alt="Visit games inventory GitHub" /></a>
          <button onClick={() => setShowModal(true)}>View more<img className='white-arrow' src={WhiteArrow} alt="View more information about games inventory project" /></button>
        </div>
        <div className='games-inventory-illustration'>
          <img src={InventoryImg1} className="inventory-img-1" alt="Forza Horizon card" />
          <img src={InventoryImg2} className="inventory-img-2" alt="Witcher 3 card" />
          <img src={InventoryImg3} className="inventory-img-3"  alt="Hogwarts Legacy card" />
        </div>
      </div>
      {/* Pass in props from projectsInfo at position 0 */}
      {showModal && <ProjectsModal info={projectsInfo[0]} setShowModal={setShowModal} />}
    </div>
  );
};

export default GamesInventory;