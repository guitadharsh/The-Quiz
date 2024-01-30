import React from 'react'
import NavLogo from '../assets/nav__logo.svg'
import ProfileImage from '../assets/profile__image.svg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Navbar: React.FC = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        axios.get('/auth/logout')
            .then((res) => {
                console.log('logout success', res)
                navigate('/')
            })
            .catch((err) => console.log('why logout failed', err))
    }
    return (
        <div className='navbar'>
            <div className="navbar__body">
                <div className="navbar__logo">
                    <img src={NavLogo} alt="navbar-logo" />
                </div>

                <div className="navbar__profile" onClick={() => handleLogout()}>
                    <p>Robin Dx</p>
                    <div className="navbar__profile--pic">
                        <img src={ProfileImage} alt="navbar-logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar