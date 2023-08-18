import DarkGreyArrow from '../../images/projects/dark-grey-arrow.svg';
import LightOrangeLink from '../../images/projects/light-orange-link.svg';
import DarkGreyLink from '../../images/projects/dark-grey-link.svg';
import NoteDownImg from '../../images/projects/notedown/notedown-img.svg';

const NoteDown = ({ setShowModal, setModalNum }) => {
  return (
    <div className='card notedown-card'>
      <h2 className='project-title'>NoteDown</h2>
      <p className='project-slogan'>Where Ideas Flourish and Notes Transform.</p>
      <div className='links-container'>
        <a
          className='visit-website-link'
          href='https://notedown-rose.vercel.app/notes'
          target='_blank'
          rel='noreferrer'
        >
          Visit Website{' '}
          <img
            className='link-img'
            src={LightOrangeLink}
            alt='Visit NoteDown website'
          />
        </a>
        <a
          className='github-link'
          href='https://github.com/KunalP99/notedown'
          target='_blank'
          rel='noreferrer'
        >
          GitHub{' '}
          <img
            className='link-img'
            src={DarkGreyLink}
            alt='Visit NoteDown GitHub'
          />
        </a>
        <button
          onClick={() => {
            setShowModal(true);
            setModalNum(2);
          }}
        >
          View more
          <img
            src={DarkGreyArrow}
            alt='View more information about NoteDown project'
          />
        </button>
      </div>
      <img
        className='notedown-img'
        src={NoteDownImg}
        alt='Hand holding pencil'
      />
    </div>
  );
};

export default NoteDown;
