import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
    const [ show, setShow ] = useState(false)
    return (
        <React.Fragment>
            <section className="headerContainer">
            <h2> todo<span>app</span> </h2>
            {
                show ? 
                <nav className="navContainer">
                    <ul className="navLinks" onClick={() => setShow(false)}>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/activities">
                            <li>Activities</li>
                        </Link>
                        <Link to="/about"> <li>About</li></Link>
                        <Link to="/faq"><li>FAQ</li></Link>
                    </ul>
                </nav> : null
            }
            <FaBars className="faBars" onClick={() => setShow(!show)} />
            </section>
        </React.Fragment>
    )
}
