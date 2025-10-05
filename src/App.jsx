// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Login from "./pages/Login";
import AdminList from "./pages/AdminList";
import AdminForm from "./pages/AdminForm";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  const location = useLocation();
  const hideFooterRoutes = []; // rutas donde no se mostrará footer (si luego necesitas)
  const isDetailPage = location.pathname.startsWith("/servicios/");

  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "calc(100vh - 160px)", // asegura que el footer quede abajo
          backgroundColor: "#f7f9fb",
          paddingBottom: isDetailPage ? "40px" : "0",
        }}
      >
        <Routes>
          {/* Sitio público */}
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/servicios/:id" element={<ServiceDetail />} />
          <Route path="/login" element={<Login />} />

          {/* Panel de administración (PROTEGIDO) */}
          <Route
            path="/admin/servicios"
            element={
              <ProtectedRoute>
                <AdminList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/servicios/nuevo"
            element={
              <ProtectedRoute>
                <AdminForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/servicios/:id"
            element={
              <ProtectedRoute>
                <AdminForm />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}
