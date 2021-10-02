import React from 'react'

export default function Login() {
    return (
        <React.Fragment>
            <section className="loginContainer">
                <section className="textFields">
                    <label htmlFor="Name"> Name </label>
                    <input type="text" name="name" placeholder="First Names" id="" />
                </section>
            </section>           
        </React.Fragment>
    )
}
