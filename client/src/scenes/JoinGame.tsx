import React from 'react'
import DefaultProfileImg from '../assets/profile_default.svg'

const JoinGame = () => {
    return (
        <div className='joingame'>
            <div className="joingame__header">
                <p>Game Title</p>

                <div className="joingame__header__gamecreator">
                    <div className="joingame__header__gamecreator--image">
                        <img src={DefaultProfileImg} alt="default-profile" />
                    </div>
                    <p>Jane</p>
                </div>
            </div>

            <div className="joingame__body">
                
            </div>
        </div>
    )
}

export default JoinGame