import { useContext } from 'react';
import { ThemeContext } from '../App';
import xIcon from '../images/red-x.svg';

const ProjectsModal = ({info, setShowModal}) => {
  const darkTheme = useContext(ThemeContext);

  return (
    <div className="modal-container">
      <div className="modal" style={!darkTheme ? {backgroundColor: '#1A1A1A'} : {backgroundColor: '#fff'}}>
        <button className='x-btn' onClick={() => setShowModal(false)}><img src={xIcon} alt="Close modal" /></button>
        <a href={info.link} target='_blank' rel="noreferrer" style={!darkTheme ? {color: '#FFFFFF'} : {color: '#000000'}}><h3>{info.title}</h3></a>
        <div className='tech-stack-container'>
          {info.skills.map((skill, index) => {
            return <p key={index} style={{color: `${skill.color}`}}>{skill.name}</p>;
          })}
        </div>
        <div className="underline"></div>
        <div className="modal-content-container">
          <div className='modal-left-container'>
            <div className='summary-container'>
              <h3>Summary</h3>
              <p>{info.summary}</p>
            </div>
            <div className='features-container'>
              <h3>Features</h3>
              {info.features && 
                <ul>
                  {info.features.map(feature => {
                    return <li key={feature}>{feature}</li>;
                  })}
                </ul>
              }
            </div>
            <div className='learned-container'>
              <h3>What I learned</h3>
              <p>{info.learned}</p>
            </div>
          </div>
          <iframe src="https://www.youtube.com/embed/soYvHo54JH4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;