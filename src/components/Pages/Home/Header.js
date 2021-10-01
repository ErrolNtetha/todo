import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa'

export default function Header() {
    const [ show, setShow ] = useState(true)
    return (
        <React.Fragment>
            <section className="headerContainer">
            <h2> todo<span>app</span> </h2>
            {
                show ? 
                <nav className="navContainer">
                    <ul className="navLinks">
                        <li>Home</li>
                        <li>About</li>
                        <li>FAQ</li>
                    </ul>
                </nav> : null
            }
            <FaBars className="faBars" onClick={() => setShow(!show)} />
            </section>
        </React.Fragment>
    )
}
