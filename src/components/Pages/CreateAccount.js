import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CreateAccount() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // When the but
    const onSubmit = (e) => {
        e.preventDefault()

        const newAccountData = {
            firstName,
            lastName,
            email,
            password,
        }

        axios.post('http://localhost:5000/register', newAccountData)
            .then(res =>  console.log(newAccountData))
            .catch(err => console.log("An error occurred: ", err))
    }

    // Clear the form after pressing submit
    

    return (
        <section className="createWrapper">
            <section className="createContainer">
                <label htmlFor="Name" className="name"> First Name: </label>
                <input type="text" name="name" placeholder="First Names" onChange={(e) => setFirstName(e.target.value)} />
                <label htmlFor="Name"> Last Name: </label>
                <input type="text" name="lastName" placeholder="Last Names" onChange={(e) => setLastName(e.target.value)} />
                <label htmlFor="Name"> Email: </label>
                <input type="email" name="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="Name"> Password: </label>
                <input type="password" name="password" placeholder="Password (at least 6 characters)" onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="Name"> Repeat Password: </label>
                <input type="password" name="password" placeholder="Confirm Password" onChange={(e) => setPassword(e.target.value)} />
                <Link className="submit button" onClick={onSubmit}> Signup </Link>
                {/* I will fix this below */}
                <p> Already have an account? </p>
            </section>
        </section>
    )
}
