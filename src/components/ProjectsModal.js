import xIcon from '../images/black-x.svg';

const ProjectsModal = ({info, setShowModal}) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <button className='x-btn' onClick={() => setShowModal(false)}><img src={xIcon} alt="Close modal" /></button>
        <h2>{info.title}</h2>
        <p className="tech-stack"><span>React</span>/<span>SASS</span>/ <span>MongoDB</span></p>
        <div className="underline"></div>
        <div className="modal-content-container">
          <iframe width="100%" height="auto" src="https://www.youtube.com/embed/cT7Uf30-szg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui impedit voluptatum enim itaque repellendus amet, mollitia hic? Fugiat veritatis ipsa dolor harum porro, quisquam, tempore adipisci tenetur alias mollitia perspiciatis?</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;