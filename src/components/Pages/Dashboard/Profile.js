import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import cat from '../../assets/cat.jpg'

export default function Profile() {
    return (
        <section className='profileDashboard'>
            <section className='container'>
                <img src={cat} alt="cat image" className="profilePicture"/>
                
                <section className="profileStats">
                    <div className="">43</div>
                    <div className="">27</div>
                    <div className="">6</div>
                </section>  
            </section>          
        </section>
    )
}
