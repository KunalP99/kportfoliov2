import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid.';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  // Scroll to specific selector (e.g. #project, #about) with offset so it doesn't scroll to the top of the selector to account for header taking up space
  const scrollIntoViewOffset = (selector, offset) => {
    window.scrollTo({
      behavior: 'smooth',
      top: document.querySelector(selector).getBoundingClientRect().top - document.body.getBoundingClientRect().top - offset,
    });
  };  

  return (
    <div className="container">
      <Header scrollIntoViewOffset={scrollIntoViewOffset}/>
      <Hero scrollIntoViewOffset={scrollIntoViewOffset} />
      <div className='content'>
        <div className='quote'>
          <p>
            <span>&quot;</span>My passion for web development runs deep, and I&apos;m constantly exploring the latest tools and technologies to stay ahead of the curve. From designing responsive layouts to writing clean, efficient code, I&apos;m always striving to deliver the best possible user experience.<span>&quot;</span>
          </p>
        </div>
        <ProjectsGrid />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
