import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
    const [ show, setShow ] = useState(false)
    return (
        <React.Fragment>
            <section className="headerContainer">
            <Link to="/" className="h2"> 
                todo<span>app</span>
            </Link>
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

            { show ? 
            <FaTimes className="faBars" onClick={() => setShow(false)} />
            : 
            <FaBars className="faBars" onClick={() => setShow(true)} />
            }
            </section>
        </React.Fragment>
    )
}
