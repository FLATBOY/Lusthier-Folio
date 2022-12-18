import {React} from 'react'
import "./header.css";


export const Header = () => {
  return (
    <header className="header">
        <nav className="nav__container">
            <a href="index.html" className="nav__logo">Lusthier</a>
            <div className="nav__menu">
                <ul className="nav_list grid">
                    <li className="nav__item">
                        <a href="/#" className="nav__link active-link">
                            <i className="uil uil-estate nav__icon">Home</i>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/#about" className="nav__link active-link">
                            <i className="uil uil-user nav__icon">About</i>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/#skills" className="nav__link active-link">
                            <i className="uil uil-file-alt nav__icon">Skills</i>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/#services" className="nav__link active-link">
                            <i className="uil uil-briefcase nav__icon">Services</i>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link active-link">
                            <i className="uil uil-images nav__icon">Portfolio</i>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link active-link">
                            <i className="uil uil-message nav__icon">Contact</i>
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times"></i>
            </div>
            <div className="nav__toggle">
            <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  ) 
}
