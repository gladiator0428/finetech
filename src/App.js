import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const AdminPage = React.lazy(() => import("./Landing/admin"));
// const ValidationPage = React.lazy(() => import("./Landing/validation"));
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Suspense fallback={<></>}>
        <Router>
          <Routes>
            {/* <Route path="/" element={<ValidationPage />} /> */}
            <Route path="/" element={<AdminPage />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
