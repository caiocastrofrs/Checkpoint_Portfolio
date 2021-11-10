import '../../sass/layout/header.scss'
import { List } from 'react-bootstrap-icons';

const Header = () => {
    return(
        <>
        <header className="header">
            <div className="header__logo">
                OIACAIO
            </div>
            <nav className="header__nav">
              
                <ul className="header__nav__ul">
                    <li className="header__nav__ul__item">Projetos</li>
                    <li className="header__nav__ul__item">Contato</li>
                </ul>
            </nav>
        </header>
        </>
    );
}

export default Header;