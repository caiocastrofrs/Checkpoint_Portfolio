import '../../sass/layout/banner.scss';
import sample from './Video/video.mp4';
import arrowDown from '../img/icons/arrow-down.svg';
const Banner = () => {
    return(
        <>
        <section className="banner">
            {/* <p>Olá, sou o <span className="banner__name">Caio</span> e sou estudante de Desenvolvimento Web</p> */}
            <span className="banner__text">
                Mais sobre mim
            </span>
            <a src="#" className="banner__linkToDown">
                <arrowDown />
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