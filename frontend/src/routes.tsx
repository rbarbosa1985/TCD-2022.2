import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";

import { AdminLayout } from "./assets/layouts/AdminLayout";
import { Dashboard } from "./pages/admin/dashboard";
import { Report } from "./pages/admin/report";
import { RoomDetails } from "./pages/admin/roomDetails";
import { User } from "./pages/admin/user";
import { Home } from "./pages/home";
import { NotFound } from "./pages/notfound";

export function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLayout />} >
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/room/:id" element={<RoomDetails />} />
          <Route path="/admin/user" element={<User />} />
          <Route path="/admin/report" element={<Report />} />
        </Route>
        <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  )
}