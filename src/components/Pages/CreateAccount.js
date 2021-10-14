import React, {useState} from 'react';
import axios from 'axios';

export default function CreateAccount() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    // When the but
    const onSubmit = (e) => {
        e.preventDefault()

        const newAccountData = {
            firstName,
            lastName,
        }

        axios.post('http://localhost:5000/register', newAccountData)
            .then(res =>  console.log(newAccountData))
            .catch(err => console.log("An error occurred: ", err))
    }

    return (
        <React.Fragment>
            <section className="createContainer">
                <label htmlFor="Name"> Name: </label>
                <input type="text" name="name" placeholder="First Names" onChange={(e) => setFirstName(e.target.value)} />
                <label htmlFor="Name"> Last Name: </label>
                <input type="text" name="lastName" placeholder="Last Names" onChange={(e) => setLastName(e.target.value)} />
                <button onClick={onSubmit}> Submit </button>
            </section>
        </React.Fragment>
    )
}
