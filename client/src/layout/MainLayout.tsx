import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import bg_effect from '../assets/bg__effects.svg'
import { Navbar } from '../components'


const MainLayout: React.FC = () => {

    const[loggedIn, setLoggedIn] = useState(true)

    return (
        <section className='main'>
            <div className='main__bg'>
                <img src={bg_effect} alt="background-effect" />
            </div>
            {loggedIn && <Navbar /> }
            <Outlet />
        </section>
    )
}

export default MainLayout