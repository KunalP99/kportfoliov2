import { useContext } from 'react';
import { ThemeContext } from '../App';
import blackXicon from '../images/black-x.svg';
import whiteXicon from '../images/white-x.svg';

const ProjectsModal = ({info, setShowModal}) => {
  const darkTheme = useContext(ThemeContext);

  return (
    <div className="modal-container">
      <div className="modal" style={!darkTheme ? {backgroundColor: '#1A1A1A'} : {backgroundColor: '#fff'}}>
        <button className='x-btn' onClick={() => setShowModal(false)}><img src={darkTheme ? blackXicon : whiteXicon} alt="Close modal" /></button>
        <a href={info.link} target='_blank' rel="noreferrer" style={!darkTheme ? {color: '#FFFFFF'} : {color: '#000000'}}><h2>{info.title}</h2></a>
        <div className='tech-stack-container'>
          {info.skills.map((skill, index) => {
            return <div className='skill-container' style={{backgroundColor: `${skill.tagColour}`}} key={index}><p style={{color: `${skill.colour}`}}>{skill.name}</p></div>;
          })}
        </div>
        <div className="modal-content-container">
          <div className='underline'></div>
          <div className='modal-left-container'>
            <div className='summary-container'>
              <h3>Summary</h3>
              <p>{info.summary}</p>
            </div>
            <video src={info.videoPath} controls muted />
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
              <h3>What I&apos;ve learned</h3>
              <p>{info.learned}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;