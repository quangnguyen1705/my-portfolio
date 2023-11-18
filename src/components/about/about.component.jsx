import React, { useEffect } from 'react';

import sr from '../../utils/scrollReveal';
import MyResume from '../../assets/resume/Resume_DangQuangNguyen.pdf';
import picture from "../../assets/img/profile_pic.png";
import './about.styles.css';

const About = props => {

    useEffect(() => {
        sr.reveal('.about__img',{}); 
        sr.reveal('.about__subtitle',{delay: 400}); 
        sr.reveal('.about__text',{delay: 400}); 
    });

    return (
        <section className="about section" id="about">
            <h2 className="section-title">
                About Me
            </h2>
            <div className="about__container bd-grid">
                <div className="about__img">
                    <img src={picture} alt="profile" />
                </div>
                <div className="bd-grid">
                    <h2 className="about__subtitle">Get to know me!</h2>
                    <p className="about__text">As a junior computer science student at San Jose State University, I bring a passion for programming and web development. Through coursework and personal projects, I have honed my skills in Java, JavaScript, React, HTML, and CSS. Prior to moving to the United States for my studies, I worked as a web developer in Vietnam, gaining valuable experience designing, building, and maintaining websites and applications.</p>
                    <div>
                        {/* <input type="button" value="Download Resume" className="about__button button" /> */}
                        <a href={MyResume} download className="about__button button">Download Resume</a>
                    </div>
                </div>
               
            </div>
        </section>
    )
}

export default About;