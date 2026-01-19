import { Routes, Route } from 'react-router-dom'
import { AdminLayout } from '../../pages/admin/AdminLayout'
import { ClientLayout } from '../../pages/client/ClientLayout'
import { AdminDashboardPage } from '../../pages/admin/AdminDashboardPage'
import { ClientHomePage } from '../../pages/client/ClientHomePage'
import { LoginPage } from '../../pages/auth/LoginPage'
import { RequireAuth } from './RequireAuth'

export function AppRouter() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<RequireAuth />}>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<AdminDashboardPage />} />
                </Route>
            </Route>
            <Route path="/app" element={<ClientLayout />}>
                <Route index element={<ClientHomePage />} />
            </Route>
        </Routes>
    )
}
