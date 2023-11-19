import React, { useEffect } from 'react';

import sr from '../../utils/scrollReveal';
import "./skills.styles.css";

const Skills = props => {

    useEffect(() => {
        sr.reveal('.skills__subtitle',{}); 
        sr.reveal('.skills__text',{}); 
        sr.reveal('.skills__data',{interval: 200}); 
        sr.reveal('.skills__img',{delay: 600});
    });

    return (
        <section className="skills section" id="skills">
            <h2 className="section-title">My Skills</h2>
            <div className="skills__container bd-grid">
                <div className="skills__frontend">
                    <h2 className="skills__subtitle">Front End</h2>
                    <p className="skills__text">I have been using JavaScript and its libraries, frameworks <strong>jQuery, React, Node, and Javascript</strong> for more than 4 years.</p>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-jquery skills__icon"></i>
                            <span className="skills__name">JQUERY</span>
                        </div>
                        <div>
                            <span className="skills__percentage">85%</span>
                        </div>
                        <div className="skills__bar skills__jquery"></div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-react skills__icon"></i>
                            <span className="skills__name">REACT</span>
                        </div>
                        <div>
                            <span className="skills__percentage">85%</span>
                        </div>
                        <div className="skills__bar skills__react"></div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-nodejs skills__icon"></i>
                            <span className="skills__name">NODEJS</span>
                        </div>
                        <div>
                            <span className="skills__percentage">60%</span>
                        </div>
                        <div className="skills__bar skills__nodejs"></div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-javascript skills__icon"></i>
                            <span className="skills__name">JAVASCRIPT</span>
                        </div>
                        <div>
                            <span className="skills__percentage">80%</span>
                        </div>
                        <div className="skills__bar skills__javascript"></div>
                    </div>
                </div>
                <div className="skills__backend">
                    <h2 className="skills__subtitle">Back End</h2>
                    <p className="skills__text">I developed the projects during my studying by using <strong>Java, C++, Python  and SQL.</strong></p>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-java skills__icon'></i>
                            <span className="skills__name">JAVA</span>
                        </div>
                        <div>
                            <span className="skills__percentage">90%</span>
                        </div>
                        <div className="skills__bar skills__java"></div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-c-plus-plus skills__icon'></i>
                            <span className="skills__name">C++</span>
                        </div>
                        <div>
                            <span className="skills__percentage">50%</span>
                        </div>
                        <div className="skills__bar skills__c-plus-plus"></div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-python skills__icon'></i>
                            <span className="skills__name">Python</span>
                        </div>
                        <div>
                            <span className="skills__percentage">50%</span>
                        </div>
                        <div className="skills__bar skills__python"></div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bx-data skills__icon'></i>
                            <span className="skills__name">SQL</span>
                        </div>
                        <div>
                            <span className="skills__percentage">75%</span>
                        </div>
                        <div className="skills__bar skills__sql"></div>
                    </div>
                </div>
                <div className="skills__framewrok">
                    <h2 className="skills__subtitle">Frameworks</h2>
                    <p className="skills__text">Through my coursework and professional experience, I have become proficient at building and developing software using popular application frameworks Spring and Laravel.</p>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-spring-boot skills__icon'></i>
                            <span className="skills__name">SPRING</span>
                        </div>
                        <div>
                            <span className="skills__percentage">50%</span>
                        </div>
                        <div className="skills__bar skills__spring-boot"></div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-angular skills__icon"></i>
                            <span className="skills__name">ANGULAR</span>
                        </div>
                        <div>
                            <span className="skills__percentage">30%</span>
                        </div>
                        <div className="skills__bar skills__angular"></div>
                    </div>
                </div>
                <div className="skills__others">
                    <h2 className="skills__subtitle">Other Tools</h2>
                    <p className="skills__text">Proficient using <strong>GitHub</strong> for my collaborating with the teams. And get used to other DevOpt tools.</p>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-github skills__icon"></i>
                            <span className="skills__name">GITHUB</span>
                        </div>
                        <div>
                            <span className="skills__percentage">75%</span>
                        </div>
                        <div className="skills__bar skills__github"></div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-amazon skills__icon"></i>
                            <span className="skills__name">AWS</span>
                        </div>
                        <div>
                            <span className="skills__percentage">20%</span>
                        </div>
                        <div className="skills__bar skills__aws"></div>
                    </div>
                   
                </div>
            </div>
        </section>
    )
}

export default Skills;