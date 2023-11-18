import React from 'react'
import { Routes, Route } from 'react-router-dom'

import MainLayout from '../layout/MainLayout'
import { Auth, NotFound, PublicGames, MyGames, CreateGame, PlayGround } from '../scenes'

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<MainLayout />} >
                <Route path="/auth" element={<Auth />} />
                <Route path="/public-games" element={<PublicGames />} />
                <Route path="/my-games" element={<MyGames />} />
                <Route path="/create-new-game" element={<CreateGame />} />
                <Route path="/play-ground" element={<PlayGround />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes