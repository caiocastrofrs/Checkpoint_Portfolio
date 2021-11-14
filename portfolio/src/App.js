import './sass/layout/app.scss';
import Header from './components/Header'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <>   
    <div className="first-section">
      <Header />
      <Banner />
    </div> 
    <AboutMe />
    </>
  );
}

export default App;
