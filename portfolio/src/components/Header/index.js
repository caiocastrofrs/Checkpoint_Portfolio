import '../../sass/layout/header.scss'


const Header = () => {
    return(
        <>
        <header className="header" id="home">
            <div className="header__logo">
                OIACAIO
            </div>
            <nav className="header__nav">
                <ul className="header__nav__ul">
                    <li className="header__nav__ul__item"><a href="#projects" className="header__nav__ul__item__link">Projetos</a></li>
                    <li className="header__nav__ul__item"><a href="#contact" className="header__nav__ul__item__link">Contato</a></li>
                </ul>
            </nav>
        </header>
        </>
    );
}

export default Header;