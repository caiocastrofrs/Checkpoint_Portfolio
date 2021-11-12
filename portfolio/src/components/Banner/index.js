import '../../sass/layout/banner.scss';
import sample from './Video/video.mp4';
import arrowDown from '../img/icons/arrow-down.svg';    

const Banner = () => {
    return(
        <>
        <section className="banner">
            <p className="banner__introText zoom-in">Olá, sou o <span className="banner__introText__name">Caio</span>. E sou estudante de Desenvolvimento Web</p>
            <span className="banner__linkText">
                Mais sobre mim
            </span>
            
            <a href="#aboutMe" className="banner__linkToAboutMe">
               <img src={arrowDown} alt="svg arrow down" className="banner__linkToAboutMe__svg"/>
            </a>
            <video className="banner__video" autoPlay muted loop>
                <source src={sample} type="video/mp4" />
                Your browser is not supported!
            </video>
            
        </section>
        </>
    );
}

export default Banner;