import React from 'react';
import './SkillsSection.css';
import html_icon from '../html5-logo.png';
import css_icon from '../CSS3_logo.svg.png';
import js_icon from '../js_icon.jpg';
import react_icon from '../react-icon.jpg';
import vs_icon from '../Visual_Studio_Code_icon.png';
import github_icon from '../GitHub-logo.png';

const SkillsSection = () => {
    return (
        <div className="skillsContainer">

            <div className="skillHeader">
                <h2>My Skills</h2>
                <p>These are what I am good at...</p>
            </div>

            <div className="skillGrid">
                <img src={html_icon} alt="HTML5 logo" title='HTML5' />
                <img src={css_icon} alt="CSS3 logo" title='CSS3' />
                <img src={js_icon} alt="JavaScript logo" title='JavaScript' />
                <img src={react_icon} alt="ReactJs logo" title='ReactJs' />
            </div>

            <div className="essentialGridContainer">
                <h3>Essentials</h3>
                <div className="essentialGrid">
                    <img src={vs_icon} alt="visual-studio logo" title="Visual Studio" />
                    <img src={github_icon} alt="github logo" title="Github" />
                </div>
            </div>

        </div>
    )
}

export default SkillsSection;