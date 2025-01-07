import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Rishabh</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="mailto:rishabhrajclg1@gmail.com" className="footer__social-link" target="_blank">
                    <i className="uil uil-envelope-alt"></i>
                </a>

                <a href="https://www.linkedin.com/in/rishabh-raj-001" className="footer__social-link" target="_blank">
                    <i className="uil uil-linkedin-alt"></i>
                </a>

                <a href="https://github.com/rishabhr1" className="footer__social-link" target="_blank">
                    <i className="uil uil-github-alt"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Rishabh Raj. All rights reserved</span>

        </div>
    </footer>
  )
}

export default Footer