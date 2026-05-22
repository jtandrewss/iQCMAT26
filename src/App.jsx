import {
  useEffect,
} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Lectures from "./pages/Lectures";
import Reports from "./pages/Reports";
import Certificates from "./pages/Certificates";
import Notices from "./pages/Notices";

function App() {

  const student =
    JSON.parse(localStorage.getItem("student"));
  
  useEffect(() => {

  if (!student) return;

  let timeout;

  const resetTimer = () => {

    clearTimeout(timeout);

    timeout = setTimeout(() => {

      alert(
        "Session expired due to inactivity."
      );

      localStorage.removeItem(
        "student"
      );

      window.location.reload();

    }, 30 * 60 * 1000); // 30 minutes
  };

  // Activity listeners
  window.addEventListener(
    "mousemove",
    resetTimer
  );

  window.addEventListener(
    "keydown",
    resetTimer
  );

  window.addEventListener(
    "click",
    resetTimer
  );

  window.addEventListener(
    "scroll",
    resetTimer
  );

  // Start timer initially
  resetTimer();

  return () => {

    clearTimeout(timeout);

    window.removeEventListener(
      "mousemove",
      resetTimer
    );

    window.removeEventListener(
      "keydown",
      resetTimer
    );

    window.removeEventListener(
      "click",
      resetTimer
    );

    window.removeEventListener(
      "scroll",
      resetTimer
    );
  };

}, [student]);  

  if (!student) {
    return <Login />;
  }

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/attendance"
          element={<Attendance />}
        />

        <Route
          path="/lectures"
          element={<Lectures />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

        <Route
          path="/certificates"
          element={<Certificates />}
        />

        <Route
          path="*"
          element={<Navigate to="/" />}
        />

        <Route
          path="/notices"
          element={<Notices />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;