import React from 'react';
import './AboutSection.css';
import AboutmeImage from '../aboutme_pic.jpg';

const AboutSection = () => {
    return (
        <div className="aboutSectionContainer">
            <div className="aboutSection">
                <h2>About Me!</h2>

                <div className="aboutGrid">

                    <div className="aboutImage">
                        <img src={AboutmeImage} alt="photo of man sitting" />
                    </div>

                    <div className="aboutInfo">

                        <h3>A Front-end Web Developer always striving to make a better version of my self everyday!</h3>
                        <p>I'm John Carl G. Passion, but you can just call me JC.</p>
                        <br />
                        <p>I am from Bauan, Batangas. A novice in this field and been working hard for the
                            past few months studying and honing my skills to fulfill my ambition to become a successful and one of the best Front-end Web Developer
                            in this industry.
                        </p>
                        <br />
                        <p>I've been using and utilizing online references to learn and grow to be one of the finest in this career.
                            I also just finish some free online courses and online booth camp relevant to my skill set.
                        </p>
                        <br />
                        <p>I enjoy taking complex problems and turn them into simple and beautiful interface web design.
                            I always strive to write elegant and efficient code, not only for users but also
                            for developers that will view my works and codes for them to easily read and understand for future use and development..
                        </p>
                        <br />
                        <p>I've been working hard, practicing and thinking on how to learn new things that will improve my skills because
                            I believe that this is the career where you need a lot of hard works, dedications and strong-will to push your self and
                            break through your limits everyday while never forgetting the best thing about programing, to enjoy what you're doing.
                        </p>
                        <br />
                        <p>When I'm not coding, you'll find me at home playing mobile games or in court shooting some hoops. </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutSection;