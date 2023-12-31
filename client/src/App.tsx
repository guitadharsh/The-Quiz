import React, { useEffect } from 'react'
import Routes from './routes/Routes'
import './global.scss'
import axios from 'axios'

const App: React.FC = () => {
  useEffect(() => {
    const baseURL = import.meta.env.VITE_APP_BASE_URL;
    axios.defaults.baseURL = baseURL;
  }, []);
  return (
    <>
      <Routes />
    </>
  )
}

export default App