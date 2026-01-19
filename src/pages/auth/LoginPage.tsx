import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../app/providers/AuthProvider'

export function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const onLogin = () => {
    login()
    navigate('/admin', { replace: true })
  }

  return (
    <div>
      <div>Login page</div>
      <button type="button" onClick={onLogin}>
        Login
      </button>
    </div>
  )
}
