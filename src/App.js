import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid.';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  // Scroll to specific selector (e.g. #project, #about) with offset so it doesn't scroll to the top of the selector to account for header taking up space
  const scrollIntoViewOffset = (selector, offset) => {
    window.scrollTo({
      behavior: 'smooth',
      top:
        document.querySelector(selector).getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        offset,
    });
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <div className='container'>
        <Header
          scrollIntoViewOffset={scrollIntoViewOffset}
          toggleTheme={toggleTheme}
        />
        <Hero scrollIntoViewOffset={scrollIntoViewOffset} />
        <div className='content'>
          <div className='quote'>
            <p>
              <span>&quot;</span>I&apos;m a passionate web developer, with the
              ability to create responsive, aesthetic websites using a range of
              the latest tools and technologies. Dedicated to helping companies design, develop and
              maintain their websites, making a positive and lasting impact.
              <span>&quot;</span>
            </p>
          </div>
          <ProjectsGrid />
          <Skills />
          <About />
        </div>
        <Footer scrollIntoViewOffset={scrollIntoViewOffset} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
