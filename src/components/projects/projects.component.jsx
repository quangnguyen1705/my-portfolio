import React, { useEffect } from 'react';

import sr from '../../utils/scrollReveal';
import Login from '../../assets/projects/Login1.png';
import './projects.styles.css';

const Projects = props => {

    useEffect(() => {
        sr.reveal('.work__img',{interval: 200}); 
    });

    return (
        <section className="work section" id="work">
            <h2 className="section-title">My Projects.</h2>
            <div className="work__container bd-grid">
                <div className="work__img">
                    <a href='https://www.figma.com/file/WuJO7ubXlMok78dzAV85E5/DEMS-app?type=design&node-id=0-1&mode=design&t=JLUckHQJH4KNGTIW-0'>
                        <img src={Login} alt="login" />DEMS
                    </a>  
                </div>
       
            </div>
        </section>
    )
}

export default Projects;