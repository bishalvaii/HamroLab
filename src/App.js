import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Error, AuthForm, ProtectedRoute, LandingPage } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ParentDashboard, SharedLayout } from "./pages/dashboard";

import Services from "./pages/dashboard/Services";
import { Patients } from "./components/Patients";

import DoctorList from "./components/DoctorList";
import { createTheme, ThemeProvider } from "@mui/material";
import Lab from "./components/Lab";
import LabForm from "./components/LabForm";
import LabDetails from "./components/LabDetails";
import { useState } from "react";

import Createdoctor  from "./components/Createdoctor";
import Createpatient from "./components/Createpatient";

import EnterTestResults from "./components/EnterTestResults";
import Settings from "./components/Settings";


function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins',
        'sans-serif',
      ].join(','),
    },});
    const handleSubmit = (event) => {
      event.preventDefault();
      // submit the form data to the server
    };
  
    const [formData, setFormData] = useState({
      client: '',
      orderedBy: '',
      referrer: '',
      selectedTest: '',
      sampleTaken: '',
      sampleTime: '',
      remarks: ''
    });
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
          <Route path="lab" element={<Lab labs />} />
          <Route path="/lab/create" element={<LabForm formData={formData} setFormData={setFormData} onSubmit={handleSubmit} />} />
          <Route path="/lab/labRecords/status=sampleTaken" element={<LabDetails formData={formData} />} />
          <Route path="/lab/labRecords/entry" element={<EnterTestResults />} />
          <Route path="doctors" element={<DoctorList />} /> 
          <Route path="/doctors/create" element={<Createdoctor />} />
          <Route path="/patients/create" element={<Createpatient />} />
          <Route path="patients" element={<Patients />} />
          <Route path="services" element={<Services />}/>
          <Route path ="doctors/create"element={<Createdoctor />}/>
          <Route path ="patients/create"element={<Createpatient />}/>
          <Route path="settings" element={<Settings />} />
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