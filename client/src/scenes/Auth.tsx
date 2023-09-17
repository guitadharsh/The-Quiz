import React from 'react'
import { useNavigate } from 'react-router-dom'
import google__btn from '../assets/google__btn.svg'

const Auth: React.FC = () => {

  const navigate = useNavigate()

  return (
    <div className='auth'>
      <div className="auth__tittle">
        <p>THE QWIZ</p>
        <p>A REAL TIME QIWZ APPLICATION</p>
      </div>

      <div className="auth__google_btn" onClick={()=>navigate('/public-games')}>
        <img src={google__btn} alt="google-btn" />
        Continue with Google
      </div>
    </div>
  )
}

export default Auth