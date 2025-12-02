import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Salary from "./pages/Salary";
import Attendance from "./pages/Attendance";
import Payroll from "./pages/Payroll";
import Payslip from "./pages/Payslip";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } />

      <Route path="/employees" element={
        <PrivateRoute roles={["admin"]}>
          <Employees />
        </PrivateRoute>
      } />

      <Route path="/salary" element={
        <PrivateRoute roles={["admin","accountant"]}>
          <Salary />
        </PrivateRoute>
      } />

      <Route path="/attendance" element={
        <PrivateRoute roles={["admin","accountant"]}>
          <Attendance />
        </PrivateRoute>
      } />

      <Route path="/payroll" element={
        <PrivateRoute roles={["admin","accountant"]}>
          <Payroll />
        </PrivateRoute>
      } />

      <Route path="/payslip" element={
        <PrivateRoute roles={["employee","admin","accountant"]}>
          <Payslip />
        </PrivateRoute>
      } />
    </Routes>
  );
}

export default App;

