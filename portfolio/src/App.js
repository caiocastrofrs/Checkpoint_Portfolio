import './sass/layout/app.scss';
import Header from './components/Header'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import Projects from './components/ProjectSection'
function App() {
  return (
    <>   
    <div className="first-section">
      <Header />
      <Banner />
    </div> 
    <AboutMe />
    <Projects />
    </>
  );
}

export default App;
