import React from 'react'
import NavLogo from '../assets/nav__logo.svg'
import ProfileImage from '../assets/profile__image.svg'

const Navbar: React.FC = () => {
    return (
        <div className='navbar'>
            <div className="navbar__body">
                <div className="navbar__logo">
                    <img src={NavLogo} alt="navbar-logo" />
                </div>

                <div className="navbar__profile">
                    <p>Robin Das</p>
                    <div className="navbar__profile--pic">
                        <img src={ProfileImage} alt="navbar-logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar