import React from 'react'
import {FaCheckCircle} from 'react-icons/fa'

export default function Features() {
    return (
        <React.Fragment>
            <section className="featuresContainer">
                <h5> why choose us </h5>
                <hr className="divider" />
                <section>
                    <ul className="featuresList">
                        <li> <FaCheckCircle /> Dashboard </li>
                        <li> <FaCheckCircle /> SMS Reminders </li>
                        <li> <FaCheckCircle /> Track your record with fellows </li>
                        <li> <FaCheckCircle /> Tips for Productivity hacks  </li>
                        <li> <FaCheckCircle /> Pomondoro Techniques </li>
                        <li> <FaCheckCircle /> Third Party intergration </li>
                    </ul>
                </section>
            </section>
        </React.Fragment>
    )
}
