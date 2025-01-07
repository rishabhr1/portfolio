import React, { useState } from 'react';
import "./experiences.css";
// import HashedInImg from "../../assets/hashedin-bw.png";
// import MediaKindImg from "../../assets/mediakind-bw.png";
// import MicrosoftImg from "../../assets/microsoft-bw.png";

const Experiences = () => { 
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="experiences section" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">My works</span>

        <div className="experiences__container container grid">
            <div className="experiences__content">
                <div>
                    <a target="_blank" href="https://github.com/rishabhr1/Restaurant-Hub"><i className="uil uil-github-alt experiences__icon"></i></a>
                    {/* <i className="uil uil-web-grid experiences__icon"></i> */}
                    {/* <img className="uil experiences__icon" src={HashedInImg} width="20rem" height="20rem" alt="hashedin" /> */}
                    <h3 className="experiences__title">Restaurant Hub</h3>
                    <div className="experiences__calender">
                        <i className="uil uil-calendar-alt"></i> Mar 2024
                    </div>
                </div>

                <span className="experiences__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right experiences__button-icon"></i></span>

                <div className={toggleState === 1 ? "experiences__modal active-modal" : "experiences__modal"}>
                    <div className="experiences__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times experiences__modal-close"></i>

                        <h3 className="experiences__modal-title">Restaurant Hub</h3>
                        <p className="experiences__modal-description">
                        Tech Stack: React.js, Redux.js, Tailwind CSS
                        </p>

                        <ul className="experiences__modal-experiences grid">
                            <li className="experiences__modal-experience">
                                <i className="uil uil-check-circle experiences__modal-icon"></i>
                                <p className="experiences__modal-info">Built a restaurant discovery app using React, React Router, and React Hooks for routing and data fetching.</p>
                            </li>

                            <li className="experiences__modal-experience">
                                <i className="uil uil-check-circle experiences__modal-icon"></i>
                                <p className="experiences__modal-info">Implemented Redux for state management and Tailwind CSS for responsive design in the app.</p>
                            </li>

                            <li className="experiences__modal-experience">
                                <i className="uil uil-check-circle experiences__modal-icon"></i>
                                <p className="experiences__modal-info">Leveraged the Swiggy API and conditional rendering to create a dynamic restaurant menu visualization app.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="experiences__content">
                <div>
                    <a target="_blank" href="https://github.com/rishabhr1/foodOnline"><i className="uil uil-github-alt experiences__icon"></i></a>
                    {/* <i className="uil uil-arrow experiences__icon"></i> */}
                    {/* <img className="uil experiences__icon" src={MediaKindImg} alt="" /> */}
                    <h3 className="experiences__title">Multi-vendor Restaurant Marketplace</h3>
                    <div className="experiences__calender">
                        <i className="uil uil-calendar-alt"></i> Sept 2024
                    </div>
                </div>

                <span className="experiences__button"  onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right experiences__button-icon"></i></span>

                <div className={toggleState === 2 ? "experiences__modal active-modal" : "experiences__modal"}>
                    <div className="experiences__modal-content">
                        <i  onClick={() => toggleTab(0)} className="uil uil-times experiences__modal-close"></i>

                        <h3 className="experiences__modal-title">Multi-vendor Restaurant Marketplace</h3>
                        <p className="experiences__modal-description">
                        Tech Stack: Django, PostgreSQL, HTML, CSS
                        </p>

                        <ul className="experiences__modal-experiences grid">
                            <li className="experiences__modal-experience">
                                <i className="uil uil-check-circle experiences__modal-icon"></i>
                                <p className="experiences__modal-info">Developed a Django-based multi-vendor restaurant marketplace with a PostgreSQL database.</p>
                            </li>
                            <li className="experiences__modal-experience">
                                <i className="uil uil-check-circle experiences__modal-icon"></i>
                                <p className="experiences__modal-info">Implemented user registration, vendor registration, and authentication functionalities.</p>
                            </li>
                            <li className="experiences__modal-experience">
                                <i className="uil uil-check-circle experiences__modal-icon"></i>
                                <p className="experiences__modal-info">Developed menu builder, marketplace, cart, search, and tax functionalities.</p>
                            </li>
                            <li className="experiences__modal-experience">
                                <i className="uil uil-check-circle experiences__modal-icon"></i>
                                <p className="experiences__modal-info">Implemented many-to-many relationships, a vendor dashboard, and email integration.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="experiences__content">
                <div>
                    <a target="_blank" href="https://github.com/rishabhr1/Expense-Tracker">
                        <i className="uil uil-github-alt experiences__icon"></i>
                    </a>
                    {/* <i className="uil uil-edit experiences__icon"></i> */}
                    {/* <img className="uil experiences__icon" src={MicrosoftImg} height="17rem" width="17rem" alt="" /> */}
                    <h3 className="experiences__title">Expense Tracker</h3>
                    <div className="experiences__calender">
                        <i className="uil uil-calendar-alt"></i> Feb 2023
                    </div>
                </div>

                <span onClick={() => toggleTab(3)} className="experiences__button">View More <i className="uil uil-arrow-right experiences__button-icon"></i></span>

                <div className={toggleState === 3 ? "experiences__modal active-modal" : "experiences__modal"}>
                    <div className="experiences__modal-content">
                        <i  onClick={() => toggleTab(0)} className="uil uil-times experiences__modal-close"></i>

                        <h3 className="experiences__modal-title">Expense Tracker</h3>
                        <p className="experiences__modal-description">Tech Stack: React.js</p>

                        <ul className="experiences__modal-experiences grid">
                            <li className="experiences__modal-experience">
                                <i className="uil uil-check-circle experiences__modal-icon"></i>
                                <p className="experiences__modal-info">This React.js-based project allows users to easily input, manage, and track their expenses.</p>
                            </li>

                            <li className="experiences__modal-experience">
                                <i className="uil uil-check-circle experiences__modal-icon"></i>
                                <p className="experiences__modal-info">The project also provides interactive charts and graphs for each year to help users visualize their spending habits.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experiences