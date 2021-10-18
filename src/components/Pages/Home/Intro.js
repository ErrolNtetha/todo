import React from 'react'
import { Link } from 'react-router-dom'

export default function Intro() {
    return (
        <React.Fragment>
            <section className="introWrapper">
                <section className="introHero">
                    <p> your daily companion, <br /> Ready? </p>
                    <p className="subPara"> Turning your idea to actionable steps. Dream it, we shall take you there. </p>
                    <section className="btn">
                        <span>
                            <Link to="/register">
                                Create an account
                            </Link>
                            <Link to="/login">
                                sign-in                         
                            </Link>
                        </span>
                    </section>
                </section> 
            </section>
        </React.Fragment>
    )
}
