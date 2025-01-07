import React, { useState } from 'react';
import './qualification.css'

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);
    const [toggleDes, setToggleDes] = useState(0);
    
    const toggleTab = (index) => {
        setToggleState(index);
    }

    const toggleInfo = (index) => {
        setToggleDes(index);
    }
  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div onClick={()=>{toggleTab(1)}} className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div onClick={()=>{toggleTab(2)}} className={toggleState=== 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Bachelor of Engineering</h3>
                            <span className="qualification__subtitle">Bengaluru - RNS Institute of Technology</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Higher Secondary</h3>
                            <span className="qualification__subtitle">Pirpainti - Goethal's Public School</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2017 - 2019
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Secondary School</h3>
                            <span className="qualification__subtitle">Colgong - Saint Joseph's School</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2017
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div onClick={()=>toggleInfo(1)} className="qualification__card">
                            <h3 className="qualification__title">Trainee Engineer</h3>
                            <span className="qualification__subtitle">HashedIn by Deloitte</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> Oct 2024 - Present
                            </div>
                        </div>
                        {/* <span className="experiences__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right experiences__button-icon"></i></span> */}

                        <div className={toggleDes === 1 ? "experiences__modal active-modal" : "experiences__modal"}>
                            <div className="experiences__modal-content">
                                <i onClick={() => toggleInfo(0)} className="uil uil-times experiences__modal-close"></i>

                                <h3 className="experiences__modal-title">Trainee Engineer</h3>
                                <p className="experiences__modal-description">
                                <i className="uil uil-calendar-alt"></i> Oct 2024 - Present
                                </p>

                                <ul className="experiences__modal-experiences grid">
                                    <li className="experiences__modal-experience">
                                        <i className="uil uil-check-circle experiences__modal-icon"></i>
                                        <p className="experiences__modal-info">Completed a 5-week intensive Bootcamp at HashedIn University, receiving comprehensive training in various aspects of software development.</p>
                                    </li>

                                    <li className="experiences__modal-experience">
                                        <i className="uil uil-check-circle experiences__modal-icon"></i>
                                        <p className="experiences__modal-info">Gained hands-on experience with Git, Docker, Java, Spring Boot, AngularJS, GenAI, FastAPI, .NET, and ReactJS, by implementing them in real-world, practical projects.</p>
                                    </li>

                                    <li className="experiences__modal-experience">
                                        <i className="uil uil-check-circle experiences__modal-icon"></i>
                                        <p className="experiences__modal-info">Led a team as Product Captain to design and develop ScopeSync, a tool that compares code changes in pull requests with acceptance criteria in Jira user stories, leveraging GitHub workflows and OpenAI’s LLM.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div onClick={()=>toggleInfo(2)} className="qualification__card">
                            <h3 className="qualification__title">Trainee Test Engineer</h3>
                            <span className="qualification__subtitle">MediaKind</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> June 2024 - Sept 2024
                            </div>
                        </div>
                        <div className={toggleDes === 2 ? "experiences__modal active-modal" : "experiences__modal"}>
                            <div className="experiences__modal-content">
                                <i  onClick={() => toggleInfo(0)} className="uil uil-times experiences__modal-close"></i>

                                <h3 className="experiences__modal-title">Trainee Test Engineer</h3>
                                <p className="experiences__modal-description"><i className="uil uil-calendar-alt"></i> June 2024 - Sept 2024</p>

                                <ul className="experiences__modal-experiences grid">
                                    <li className="experiences__modal-experience">
                                        <i className="uil uil-check-circle experiences__modal-icon"></i>
                                        <p className="experiences__modal-info">Executed manual and automation testcases in internal and customer environment to ensure regression features are operational, whensoever a new build is deployed.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div onClick={()=>toggleInfo(3)} className="qualification__card">
                            <h3 className="qualification__title">Mentee</h3>
                            <span className="qualification__subtitle">Microsoft</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> May 2022 - May 2022
                            </div>
                        </div>

                        <div className={toggleDes === 3 ? "experiences__modal active-modal" : "experiences__modal"}>
                            <div className="experiences__modal-content">
                                <i  onClick={() => toggleInfo(0)} className="uil uil-times experiences__modal-close"></i>

                                <h3 className="experiences__modal-title">Mentee</h3>
                                <p className="experiences__modal-description"><i className="uil uil-calendar-alt"></i> May 2022 - May 2022</p>

                                <ul className="experiences__modal-experiences grid">
                                    <li className="experiences__modal-experience">
                                        <i className="uil uil-check-circle experiences__modal-icon"></i>
                                        <p className="experiences__modal-info">Selected as a mentee for Microsoft Engage, a highly competitive program designed to provide hands-on experience and mentorship to students interested in software development.</p>
                                    </li>

                                    <li className="experiences__modal-experience">
                                        <i className="uil uil-check-circle experiences__modal-icon"></i>
                                        <p className="experiences__modal-info">Collaborated with mentor Himadri Kakar Satija to complete a project: A Movie Recommendation System.</p>
                                    </li>

                                    <li className="experiences__modal-experience">
                                        <i className="uil uil-check-circle experiences__modal-icon"></i>
                                        <p className="experiences__modal-info">Substantiated new skills and gained valuable industry insights in the area of software engineering.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

  )
}

export default Qualification