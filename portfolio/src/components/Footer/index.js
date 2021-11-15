import '../../sass/layout/footer.scss';
import Linkedin from '../img/icons/linkedin.svg';
import Github from '../img/icons/github.svg';
import Email from '../img/icons/email.svg';

const Footer = () => {
    return(
        <>
        <footer className="py-3  font-size h4 footer" id="contact">
            <ul className="nav justify-content-center pb-1 mb-1 footer__list">
                <li className="nav-item"><a href="#home" className="nav-link px-2 text-light footer__list__item">Home</a></li>
                <li className="nav-item"><a href="#aboutMe" className="nav-link px-2 text-light footer__list__item">Sobre mim</a></li>
            </ul>
            <ul className="footer__list-icons">
                <a href="#">
                    <li className="footer__list-icons__item">
                        <img src={Linkedin} alt="linkedin icon" className="footer__list-icons__item__icon"  />
                    </li>
                </a>
                <a href="#">
                    <li className="footer__list-icons__item">
                        <img src={Github} alt="linkedin icon" className="footer__list-icons__item__icon"  />
                    </li>
                </a>
                <a href="#">
                    <li className="footer__list-icons__item">
                        <span className="footer__list-icons__item__email">caiocastrofrs@gmail.com</span>
                        <img src={Email} alt="linkedin icon" className="footer__list-icons__item__icon"  />
                    </li>
                </a>
            </ul>
            <p className="text-center text-light">© 2021</p>
        </footer>
        </>
    );
}


export default Footer;
