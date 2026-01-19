import { Outlet } from 'react-router-dom'

export function ClientLayout() {
  return (
    <div>
      <div>Client Layout</div>
      <Outlet />
    </div>
  )
}
