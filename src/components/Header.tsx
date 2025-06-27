import logo from "../assets/logo.svg";

const Header = () => {
    return (
        <header className="container d-flex justify-content-between w-100 sticky-top">
            <div className="logo d-flex flex-column justify-content-center">
                <img src={logo} alt="Logo" className="w-100" />
            </div>
            <nav className="d-flex justify-content-center gap-lg-5 gap-3 align-content-center my-auto text-light">
                <a className="" href="#about">
                    Location
                </a>
                <a className="" href="#services">
                    Services
                </a>
                <a className="" href="#services">
                    Faq
                </a>
                <a className="" href="#contact">
                    Contact Us
                </a>
            </nav>
        </header>
    );
};

export default Header;
