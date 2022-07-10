import React from 'react';
import './ContactSection.css';
import { FaFacebook, FaTwitter, FaEnvelope } from "react-icons/fa";
import { BsTelephoneFill, BsGithub, BsLinkedin } from 'react-icons/bs';

const ContactSection = () => {
    return (
        <div className="ContactSectionContainer">
            <h2>Follow me on:</h2>
            <div className="socMedIcon">
                <a href="https://www.facebook.com/jaycee081695/" target="_blank" rel='noreferrer' ><FaFacebook /></a>
                <a href="https://github.com/passionJC" target="_blank" rel='noreferrer'  ><BsGithub /></a>
                <a href="https://www.linkedin.com/in/john-carl-passion-83688a211/" target="_blank" rel='noreferrer' ><BsLinkedin /></a>
                <a href="https://twitter.com/passion_carl" target="_blank" rel='noreferrer' ><FaTwitter /></a>
            </div>
            <h2>Or you can contact me @</h2>
            <p><FaEnvelope />&nbsp;&nbsp;&nbsp;passion.johncarl@gmail.com</p>
            <p><BsTelephoneFill />&nbsp;&nbsp;&nbsp;+63-955-0494-959</p>
            <p className="copyRight">&copy; Copyright 2022. All rights reserved.</p>
        </div>
    )
}

export default ContactSection;