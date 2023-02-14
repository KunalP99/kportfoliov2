import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid.';

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <div className='content'>
        <div className='quote'>
          <p>
            <span>&quot;</span>My passion for web development runs deep, and I&apos;m constantly exploring the latest tools and technologies to stay ahead of the curve. From designing responsive layouts to writing clean, efficient code, I&apos;m always striving to deliver the best possible user experience.<span>&quot;</span>
          </p>
        </div>
        <ProjectsGrid />
      </div>
    </div>
  );
}

export default App;
