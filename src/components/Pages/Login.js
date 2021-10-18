import React from 'react'
import {Link} from 'react-router-dom'

export default function Login() {
    return (
            <section className="loginContainer">
                <section className="textFields">
                    <span>
                        <label htmlFor="Name"> Username </label>
                        <input type="email" name="email" placeholder="Username or Email" id="" />
                    </span>
                    <span>
                        <label htmlFor="Name"> Password: </label>
                        <input type="password" name="password" placeholder="Password" id="" />
                        <Link to='/activities' submit login>
                        Login
                        </Link>
                    </span>
                </section>
            </section>           
    )
}
