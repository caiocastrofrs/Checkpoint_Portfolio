import '../../sass/layout/banner.scss';
import sample from './Video/video.mp4';
const Banner = () => {
    return(
        <>
        <section className="banner">
            <video className="banner__video" autoPlay muted loop>
                <source src={sample} type="video/mp4" />
                Your browser is not supported!
            </video>
        </section>
        </>
    );
}

export default Banner;