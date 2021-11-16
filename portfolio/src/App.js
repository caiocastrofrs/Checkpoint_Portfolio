import './sass/layout/app.scss';
import Header from './components/Header'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import Projects from './components/ProjectSection'
import Footer  from './components/Footer'



function App() {
  return (
    <>   
    <section className="first-section">
      <Header />
      <Banner />
    </section> 
      <AboutMe  />
    <Projects />
    <Footer />
    </>
  );
}

export default App;
