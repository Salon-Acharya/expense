import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Hero from "./Components/Hero";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import OtpVerification from "./Components/OtpVerification"; // Import OTP Verification Page

function App() {
  const [showPage, setShowPage] = useState(true); // Track homepage visibility

  return (
    <BrowserRouter>
      <div style={{
        backgroundImage: showPage ? "url('/image/background.jpg')" : "none", // Keeps background for homepage only
        backgroundSize: "cover",
        minHeight: "100vh"
      }}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Homepage" element={
            <div style={{ display: "flex" }}>
              <Navbar setShowPage={setShowPage} /> {/* Passing setShowPage */}
              <Homepage setShowPage={setShowPage} /> {/* Also passing setShowPage to Homepage */}
            </div>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
