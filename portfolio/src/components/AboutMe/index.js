import '../../sass/layout/aboutme.scss';
import texts from './text.json';  
import html5 from '../img/icons/html5.png';    
import css3 from '../img/icons/css3.png';    
import javascript from '../img/icons/javascript.png';    
import sass from '../img/icons/sass.png';    
import react from '../img/icons/react.png';    
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const AboutMe = () => {
    useEffect(() => {
        Aos.init({ duration: 1500});
      }, []);
    return(
        <>
            <section className ="about-me" id="aboutMe">
                <div  data-aos="fade-up" className="about-me__div">
                    <img src="https://picsum.photos/200" alt="my profile pic" className="about-me__div__img"/> 

                    <div className="about-me__div__name">
                        <span>{texts[0].name}</span>
                    </div>

                    <div className="about-me__div__info">
                        <h4 className="about-me__div__info__title">Sobre mim</h4>
                        <p className="about-me__div__info__text">
                            {texts[0].info}
                        </p>
                    </div>

                    <div className="about-me__div__tech-info">
                        <ul className="about-me__div__tech-info__scholls">
                            <h4 className="about-me__div__tech-info__scholls__title">Formação</h4>
                            <li>{texts[0].school1}</li>
                            <li>{texts[0].school2}</li>
                        </ul>

                        <ul className="about-me__div__tech-info__skills">
                            <h4 className="about-me__div__tech-info__skills__title">Skills</h4>
                            <li className="about-me__div__tech-info__skills__item"><img src={html5} alt="html5 icon"/></li>
                            <li className="about-me__div__tech-info__skills__item"><img src={css3} alt="css3 icon"/></li>
                            <li className="about-me__div__tech-info__skills__item"><img src={javascript} alt="javascript icon"/></li>
                            <li className="about-me__div__tech-info__skills__item"><img src={sass} alt="sass icon"/></li>
                            <li className="about-me__div__tech-info__skills__item"><img src={react} alt="react icon"/></li>
                        </ul>
                    </div> 
                </div>
            </section>
        </>
        );
}

export default AboutMe;