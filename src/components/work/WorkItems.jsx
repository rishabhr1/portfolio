import React, { useState } from 'react'

const WorkItems = ({item}) => {
    const [toggleState, setToggleState] = useState(0);
    
    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img' />
        <h3 className="work__title">{item.title}</h3>
        <a target='_blank' href={item.github} className="work__button">
            Github <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>

        <span className="experiences__button" onClick={() => toggleTab(1)}>Details <i className="uil uil-arrow-right experiences__button-icon"></i></span>

        <div className={toggleState === 1 ? "experiences__modal active-modal" : "experiences__modal"}>
            <div className="experiences__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times experiences__modal-close"></i>

                <h3 className="experiences__modal-title">{item.title}</h3>
                <p className="experiences__modal-description">
                    Tech Stack: {item.techStack}
                </p>

                <ul className="experiences__modal-experiences grid">
                    {item.description.map((des) => {
                        return <li className="experiences__modal-experience">
                                    <i className="uil uil-check-circle experiences__modal-icon"></i>
                                    <p className="experiences__modal-info">{des}</p>
                                </li>
                    })}
                    {/* <li className="experiences__modal-experience">
                        <i className="uil uil-check-circle experiences__modal-icon"></i>
                        <p className="experiences__modal-info">Implemented Redux for state management and Tailwind CSS for responsive design in the app.</p>
                    </li>

                    <li className="experiences__modal-experience">
                        <i className="uil uil-check-circle experiences__modal-icon"></i>
                        <p className="experiences__modal-info">Leveraged the Swiggy API and conditional rendering to create a dynamic restaurant menu visualization app.</p>
                    </li> */}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default WorkItems