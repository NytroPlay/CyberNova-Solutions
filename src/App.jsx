// src/App.jsx
import { Routes, Route } from "react-router-dom";
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
  return (
    <>
      <Navbar />
      <main>
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
      <Footer />
    </>
  );
}
