import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

export function RequireAuth() {
  const { isAuth } = useAuth()
  const location = useLocation()

  if (!isAuth) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return <Outlet />
}

