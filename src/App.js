import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Error, AuthForm, ProtectedRoute, LandingPage } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ParentDashboard, SharedLayout } from "./pages/dashboard";

import Services from "./pages/dashboard/Services";
import { Appointments } from "./components/Appointments";
import { Patients } from "./components/Patients";

import DoctorList from "./components/DoctorList";
import { createTheme, ThemeProvider } from "@mui/material";
import Lab from "./components/Lab";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins',
        'sans-serif',
      ].join(','),
    },});
  return (
    <ThemeProvider theme = {theme}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<ParentDashboard />} />
          <Route path="lab" element={<Lab />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="doctors" element={<DoctorList />} />
          <Route path="patients" element={<Patients />} />
          <Route path="services" element={<Services />} />
        </Route>
        
        <Route path="landing" element={<LandingPage />} />
    
        <Route path="register" element={<AuthForm />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;