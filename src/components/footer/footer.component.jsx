import React from 'react';

import "./footer.styles.css";

const Footer = props => {
    return (
        <footer className="footer">
            <p className="footer__title">Dang-Quang Nguyen</p>
            <div className="footer__social">
                <a href="https://www.linkedin.com/in/dangquang-nguyen/" className="footer__icon"><i className="bx bxl-linkedin"></i></a>
                <a href="https://github.com/quangnguyen1705?tab=repositories" className="footer__icon"><i className="bx bxl-github"></i></a>
            </div>
            <p>&#169; 2021 copyright Dang-Quang Nguyen</p>
        </footer>
    )
}

export default Footer;