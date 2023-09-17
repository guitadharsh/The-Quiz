import React from 'react'
import { Routes, Route } from 'react-router-dom'

import MainLayout from '../layout/MainLayout'
import { Auth, NotFound, PublicGames } from '../scenes'

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />} >
            <Route path="*" element={<NotFound />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/public-games" element={<PublicGames />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes