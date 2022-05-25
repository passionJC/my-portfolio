import React, { useEffect } from 'react';
import './HomePage.css';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import WorksSection from './sections/WorksSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';
import Aos from 'aos';
import 'aos/dist/aos.css';

function HomePage() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className="mainContainer">
            <div id="home">
                <div className="homeContainer">
                    <HomeSection />
                </div>
            </div>

            <div id="about">
                <div className="aboutContainer" >
                    <div className="borderLine"></div>
                    <div data-aos="zoom-in">
                        <AboutSection />
                    </div>
                </div>
            </div>

            <div id="works">
                <div className="worksContainer">
                    <div className="borderLine"></div>
                    <div data-aos="zoom-in">
                        <WorksSection />
                    </div>
                </div>
            </div>

            <div id="skills">
                <div className="skillsContainer" >
                    <div className="borderLine"></div>
                    <div data-aos="zoom-in">
                        <SkillsSection />
                    </div>
                </div>
            </div>

            <div id="contact">
                <div className="contactContainer" >
                    <div className="borderLine100vw"></div>
                    <ContactSection />
                </div>
            </div>

        </div>
    )
}

export default HomePage;