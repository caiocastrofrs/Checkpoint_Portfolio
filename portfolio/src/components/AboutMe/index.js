import '../../sass/layout/aboutme.scss';
import texts from './text.json';

const AboutMe = () => {
    return(
        <>
            <section className ="about-me" id="aboutMe">
                <div className="about-me__div">
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
                            <li className="about-me__div__tech-info__scholls__item">{texts[0].school1}</li>
                            <li className="about-me__div__tech-info__scholls__item">{texts[0].school2}</li>
                        </ul>
                        <ul className="about-me__div__tech-info_skills">
                            <h4 className="about-me__div__tech-info__skills__title">Skills</h4>
                            <li className="about-me__div__tech-info__skills__item">{texts[0].skill1}</li>
                            <li className="about-me__div__tech-info__skills__item">{texts[0].skill2}</li>
                            <li className="about-me__div__tech-info__skills__item">{texts[0].skill3}</li>
                            <li className="about-me__div__tech-info__skills__item">{texts[0].skill4}</li>
                            <li className="about-me__div__tech-info__skills__item">{texts[0].skill5}</li>
                        </ul>
                    </div>
                    
                </div>
            </section>
        </>
        );
}

export default AboutMe;