import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

import MainLayout from '../layout/MainLayout'
import { Auth, NotFound, PublicGames, MyGames, CreateGame, PlayGround, JoinGame } from '../scenes'

const AppRoutes: React.FC = () => {

    useEffect(() => {
        axios.get('/auth/get-user')
            .then((res) => {
                console.log('res', res)
            })
            .catch((err) => { throw err })
    }, [])
    return (
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<MainLayout />} >
                <Route path="/auth" element={<Auth />} />
                <Route path="/public-games" element={<PublicGames />} />
                <Route path="/my-games" element={<MyGames />} />
                <Route path="/create-new-game" element={<CreateGame />} />
                <Route path="/play-ground" element={<PlayGround />} />
                <Route path="/join-game" element={<JoinGame />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes