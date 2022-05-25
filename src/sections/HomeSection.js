import React from 'react';
import './HomeSection.css';
import profile from '../profpic.jpg';
import TypeAnimation from 'react-type-animation';
import { NavHashLink } from 'react-router-hash-link';

function HomeSection() {

    return (
        <div className="homeSectionContainer">

            <div className="fewInfoSection">

                <div className="fewInfoSectionContainer">

                    <div className="myNameSection">
                        <TypeAnimation
                            cursor={false}
                            sequence={['', 1000, 'Hi, I\'m John Carl!']}
                            wrapper="h2"
                            className="myName"
                        />
                    </div>

                    <div className="tagLineSection">
                        <TypeAnimation
                            cursor={false}
                            sequence={['', 3200, "I design and build websites from scratch."]}
                            wrapper="h1"
                            className="myTagline"
                        />
                    </div>

                    <div className="myInfoSection">
                        <TypeAnimation
                            cursor={false}
                            sequence={['', 7000, "I am a self taught career shifter Web Developer specializing in Front End."]}
                            wrapper="p"
                            className="myInfo"
                        />
                    </div>

                </div>

                <div>
                    <NavHashLink smooth to="#about" className="seeMore" >See More &gt;&gt;</NavHashLink>
                </div>

            </div>

            <div className="profilePicture">
                <div className="top"></div>
                <img src={profile} alt="my_profile_picture" width="450px" />
                <div className="left"></div>
                <div className="right"></div>
                <div className="bottom"></div>
            </div>

        </div>
    )
}

export default HomeSection;