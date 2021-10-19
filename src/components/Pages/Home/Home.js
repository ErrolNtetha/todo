import React from 'react'
import Header from './Header'
import Intro from './Intro'
import Features from './Features'

export default function Home() {
    return (
        <div className='homePageContainer'>
            <Intro />
            <Features />
        </div>
    )
}
