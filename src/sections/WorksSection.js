import React, { useState, useEffect } from "react";
import NetflixProject from '../net-flix-project.PNG';
import Netflixlogin from '../netflix-login.PNG';
import BlogPage from '../blogPage.PNG';
import BlogPage2 from '../blogPage2.PNG';
import SantePage from '../santeBarleyclonePage.PNG';
import SantePage2 from '../santeBarleyclonePage2.PNG';
import './WorkSection.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const WorksSection = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const [showMoreNetflix, setShowMoreNetflix] = useState(false);
    const [showMoreSante, setShowMoreSante] = useState(false);
    const [showMoreBlog, setShowMoreBlog] = useState(false);

    const toggleShowMoreNetflix = () => {
        setShowMoreNetflix(!showMoreNetflix);
    }

    const toggleShowMoreSante = () => {
        setShowMoreSante(!showMoreSante);
    }

    const toggleShowMoreBlog = () => {
        setShowMoreBlog(!showMoreBlog);
    }

    return (
        <div className="workSectionContainer">

            <div className="workSection">

                <div className="workerSectionHeader">
                    <h2>My Works</h2>
                    <p>To add more projects one day.</p>
                    <br />
                    <p>Note that all projects here were created for training purposes only.</p>
                    <p>None of these were created and published for client or business purpose.</p>
                </div>

                <div className="worksContainer">

                    <div className="worksGrid gridNetflix">
                        <div className="worksGridInfo ">
                            <h3><a href="https://passionjc.github.io/net-flix-clone-login-page/" target="blank">Netflix Clone Project</a></h3>
                            <p onClick={toggleShowMoreNetflix}>{showMoreNetflix ? "Show Less" : "Show More"} &gt;</p>
                        </div>
                        <div className="worksGridImage">
                            <a href="https://passionjc.github.io/net-flix-clone-login-page/" target="blank">
                                <img src={Netflixlogin} alt='screenshot of clone of netflix login page' className="firstImage" />
                            </a>
                            <a href="https://passionjc.github.io/net-flix-clone-login-page/" target="blank">
                                <img src={NetflixProject} alt='screenshot of clone of netflix webpage' className="secondImage" />
                            </a>
                        </div>
                    </div>
                    {showMoreNetflix && (
                        <div data-aos="fade-up">
                            <div className="moreInfo">
                                <h4>Netflix Clone Project</h4>
                                <p>Is more likely a lite version of netflix where you can browse and check the latest movies or series to watch.
                                    You can also search for a movie while enjoying the UI that is as elegant as the real page of netflix.
                                </p>
                                <p>This project was created for my recent online training as final project utilizing all the knowledge that we've
                                    learned from our training while using other online references to be more resourceful.
                                </p>
                                <p>Log-in credential:</p>
                                <ul>
                                    <li>Username: user1</li>
                                    <li>Password: pass1</li>
                                </ul>
                                <p>This project was made using the following tools:</p>
                                <ul>
                                    <li>JavaScript Library: ReactJs</li>
                                    <li>XML and JSX</li>
                                    <li>CSS</li>
                                    <li>React State Hooks</li>
                                    <li>Online Movie Database API</li>
                                    <li>Github for publishing online</li>
                                </ul>
                                <p className="seeMore" onClick={toggleShowMoreNetflix}>Less Info &gt;</p>
                            </div>
                        </div>
                    )}

                    <div className="worksGrid gridSante">
                        <div className="worksGridInfo ">
                            <h3>Sante Barley Website</h3>
                            <p onClick={toggleShowMoreSante}>{showMoreSante ? "Show Less" : "Show More"} &gt;</p>
                        </div>
                        <div className="worksGridImage">
                            <img src={SantePage} alt="screenshot of sante-barley webpage project" className="firstImage" />
                            <img src={SantePage2} alt="" className="secondImage" />
                        </div>
                    </div>
                    {showMoreSante && (
                        <div data-aos="fade-up">
                            <div className="moreInfo">
                                <h4>Sante Barley Website</h4>
                                <p>Is a website project where you can browse and check for Sante Barley's products and pricing as well as
                                    their other services.</p>
                                <p>I created this website for self training purpose only.</p>
                                <p>This project was made using the following tools:</p>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                </ul>
                                <p className="seeMore" onClick={toggleShowMoreSante}>Less Info &gt;</p>
                            </div>
                        </div>
                    )}

                    <div className="worksGrid gridBlog">
                        <div className="worksGridInfo ">
                            <h3>Blog Page</h3>
                            <p onClick={toggleShowMoreBlog}>{showMoreBlog ? "Show Less" : "Show More"} &gt;</p>
                        </div>
                        <div className="worksGridImage">
                            <img src={BlogPage} alt="screenshot of blog page" className="firstImage" />
                            <img src={BlogPage2} alt="" className="secondImage" />
                        </div>
                    </div>
                    {showMoreBlog && (
                        <div data-aos="fade-up">
                            <div className="moreInfo">
                                <h4>Blog Page</h4>
                                <p>In this page, you can browse and see my travel blog photos for these past few years with simple, yet clean and elegant design.
                                    You can also see my recommended places and brief descriptions, that you must visit here in the Philippines.
                                </p>
                                <p>This project was also created as part of my recent online training utilizing react hooks and article components.</p>
                                <p>This project was made using the following tools:</p>
                                <ul>
                                    <li>JavaScript Library: ReactJs</li>
                                    <li>XML and JSX</li>
                                    <li>CSS</li>
                                    <li>React State Hooks and Articles</li>
                                </ul>
                                <p className="seeMore" onClick={toggleShowMoreBlog}>Less Info &gt;</p>
                            </div>
                        </div>
                    )}

                </div>

            </div>

        </div >
    )
}

export default WorksSection;