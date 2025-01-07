import React, { useState } from "react";
import "./achievements.css";

const Achievements = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="experiences section" id="achievements">
      <h2 className="section__title">Achievements</h2>
      <span className="section__subtitle">My contributions</span>

      <div className="experiences__container achievements__container container grid">
        <div className="experiences__content">
          <div>
            <i className="uil uil-medal achievements__icon"></i>
            {/* <i className="uil uil-web-grid experiences__icon"></i> */}
            {/* <img className="uil experiences__icon" src={HashedInImg} width="20rem" height="20rem" alt="hashedin" /> */}
            <h3 className="experiences__title">Core Team Member</h3>
            <span className="experiences__subtitle">GDSC - RNSIT</span>
            <div className="experiences__calender">
              <i className="uil uil-calendar-alt"></i> Sept 2023 - May 2024
            </div>
          </div>

          <span className="experiences__button" onClick={() => toggleTab(1)}>
            View More{" "}
            <i className="uil uil-arrow-right experiences__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "experiences__modal active-modal"
                : "experiences__modal"
            }
          >
            <div className="experiences__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times experiences__modal-close"
              ></i>

              <h3 className="experiences__modal-title">Core Team Member</h3>
              <p className="experiences__modal-description">
              Google Developer Student Club - RNSIT
              </p>

              <ul className="experiences__modal-experiences grid">
                <li className="experiences__modal-experience">
                  <i className="uil uil-check-circle experiences__modal-icon"></i>
                  <p className="experiences__modal-info">
                  Managed contests and informative sessions on competitive programming.
                  </p>
                </li>

                <li className="experiences__modal-experience">
                  <i className="uil uil-check-circle experiences__modal-icon"></i>
                  <p className="experiences__modal-info">
                  Held CodeFlix 4.0 with 130+ signups.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experiences__content">
          <div>
            <i className="uil uil-medal achievements__icon"></i>
            {/* <i className="uil uil-arrow experiences__icon"></i> */}
            {/* <img className="uil experiences__icon" src={MediaKindImg} alt="" /> */}
            <h3 className="experiences__title">
            Section Leader
            </h3>
            <span className="experiences__subtitle">Stanford University</span>
            <div className="experiences__calender">
              <i className="uil uil-calendar-alt"></i> Apr 2023 - June 2023
            </div>
          </div>

          <span className="experiences__button" onClick={() => toggleTab(2)}>
            View More{" "}
            <i className="uil uil-arrow-right experiences__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "experiences__modal active-modal"
                : "experiences__modal"
            }
          >
            <div className="experiences__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times experiences__modal-close"
              ></i>

              <h3 className="experiences__modal-title">
                Section Leader
              </h3>
              <p className="experiences__modal-description">
                Stanford University
              </p>

              <ul className="experiences__modal-experiences grid">
                <li className="experiences__modal-experience">
                  <i className="uil uil-check-circle experiences__modal-icon"></i>
                  <p className="experiences__modal-info">
                  Led a group of students in Stanford’s Code in Place program, helping them learn Python programming.
                  </p>
                </li>
                <li className="experiences__modal-experience">
                  <i className="uil uil-check-circle experiences__modal-icon"></i>
                  <p className="experiences__modal-info">
                  Facilitated engaging and interactive sessions, helping students understand concepts and debug code.
                  </p>
                </li>
                <li className="experiences__modal-experience">
                  <i className="uil uil-check-circle experiences__modal-icon"></i>
                  <p className="experiences__modal-info">
                  Created a supportive and encouraging learning environment, where students felt comfortable asking questions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
