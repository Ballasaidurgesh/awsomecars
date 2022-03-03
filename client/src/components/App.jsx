import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./partials/Navbar";
import Footer from "./partials/Footer";
import Addcar from "./addData/Addcar";
import Model from "./Model";
import Cars from "./Cars";
import Home from "./Home";
import Addnews from "./addData/Addnews";
import Login from "./Login";
import Signup from "./Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Admin from "./Admin";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div>
      <UserAuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/model/:id" element={<Model />} />
          <Route path="/cars/:brand" element={<Cars />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route
            path="admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="addcar"
            element={
              <ProtectedRoute>
                <Addcar />
              </ProtectedRoute>
            }
          />
          <Route
            path="addnews"
            element={
              <ProtectedRoute>
                <Addnews />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
