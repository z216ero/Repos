import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../../app/providers/AuthProvider'

export function AdminLayout() {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const onLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <div>Admin Layout</div>
        <nav style={{ display: 'flex', gap: 8 }}>
          <NavLink to="/admin">/admin</NavLink>
        </nav>
        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
      <Outlet />
    </div>
  )
}
