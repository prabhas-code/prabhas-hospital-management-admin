import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Contexts
import { AdminContext } from "./context/AdminContext";
import { DoctorContext } from "./context/DoctorContext";

// Components
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Login from "./pages/Login";

// Admin Pages
import Dashboard from "./pages/Admin/Dashboard";
import AllAppointment from "./pages/Admin/AllAppointment";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorList from "./pages/Admin/DoctorList";

// Doctor Pages
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import DoctorAppointment from "./pages/Doctor/DoctorAppointment";
import DoctorProfile from "./pages/Doctor/DoctorProfile";

const App = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  return aToken || dToken ? (
    <div className="bg-[#fffaff99]">
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        {/* ✅ Sidebar and Routes side by side */}
        <SideBar />
        <div className="flex-1 p-4">
          <Routes>
            {/* Admin Routes */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/admin-dashboard" element={<Dashboard />} />
            <Route path="/allappointments" element={<AllAppointment />} />
            <Route path="/add-doctor" element={<AddDoctor />} />
            <Route path="/doctor-list" element={<DoctorList />} />

            {/* Doctor Routes */}
            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            <Route
              path="/doctor-appointments"
              element={<DoctorAppointment />}
            />
            <Route path="/doctor-profile" element={<DoctorProfile />} />
          </Routes>
        </div>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
