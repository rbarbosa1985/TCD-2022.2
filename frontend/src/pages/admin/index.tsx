import { Route, Routes } from "react-router-dom";
import { Header } from "../../assets/components/appbar";
import { AdminLayout } from "../../assets/layouts/AdminLayout";
import { Dashboard } from "./dashboard";
import { RoomDetails } from "./roomDetails";
import { User } from "./user";

export function Admin() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />} >
        <Route path="/" element={<Dashboard />} />
        <Route path="/room" element={<RoomDetails />} />
        <Route path="/user" element={<User />} />
      </Route>
    </Routes>

  )
}