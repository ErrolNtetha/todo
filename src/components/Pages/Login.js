import React from 'react'
import {Link} from 'react-router-dom'

export default function Login() {
    return (
        <React.Fragment>
            <section className="loginContainer">
                <section className="textFields">
                    <span>
                        <label htmlFor="Name"> Username or Email: </label>
                        <input type="text" name="name" placeholder="Enter username or Email" id="" />
                    </span>
                    <span>
                        <label htmlFor="Name"> Password: </label>
                        <input type="password" name="name" placeholder="Password" id="" />
                        <Link>
                        Login
                        </Link>
                    </span>
                    

                </section>
            </section>           
        </React.Fragment>
    )
}
