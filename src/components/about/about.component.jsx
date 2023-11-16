import React, { useEffect } from 'react';

import sr from '../../utils/scrollReveal';
import MyResume from '../../assets/resume/Resume_ThaiNguyen.pdf';
import picture from "../../assets/img/profile-pic.png";
import './about.styles.css';

const About = props => {

    useEffect(() => {
        sr.reveal('.about__img',{}); 
        sr.reveal('.about__subtitle',{delay: 400}); 
        sr.reveal('.about__text',{delay: 400}); 
    });

    return (
        <section className="about section" id="about">
            <h2 className="section-title">About</h2>
            <div className="about__container bd-grid">
                <div className="bd-grid">
                    <div className="about__img1"><img src={picture} alt="profile" /></div>
                    <h2 className="about__subtitle">Thai Nguyen</h2>
                    <p className="about__text">Software Developer Honor Graduate from SAIT with passion for developing and implementing new programs.<br/><br/>And I gain experience through all the works I have done as a Web Developer in Vietnam. I am eager to help you succeed as well as create an area for myself to grow and learn. </p>
                    <div>
                        {/* <input type="button" value="Download Resume" className="about__button button" /> */}
                        <a href={MyResume} download className="about__button button">Download Resume</a>
                    </div>
                </div>
                <div className="about__img"><img src={picture} alt="profile" /></div>
            </div>
        </section>
    )
}

export default About;