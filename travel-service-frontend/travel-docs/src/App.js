import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import TravelerLandingPage from "./pages/TravelerLandingPage";
import DocumentsPage from "./pages/DocumentsPage";  // ✅ Import DocumentsPage
import TravelerDetails from "./pages/TravelerDetailsPage";
import TravelerInfoPage from "./pages/TravelerInfoPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TravelerLandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/documents" element={<DocumentsPage />} />  {/* ✅ Ensure DocumentsPage Route Exists */}
      <Route path ="/travelerdetails" element={<TravelerDetails/>}/>
      <Route path = "/travelerinfopage" element={<TravelerInfoPage/>}/>
      <Route path ="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
};

export default App;
