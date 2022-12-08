import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Header } from "../components/appbar";

export function AdminLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    // return navigate("/admin/dashboard")
  })

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}