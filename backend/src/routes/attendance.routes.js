import express from "express";
import { markAttendance, getAttendance } from "../controllers/attendance.controller.js";
import { protect, adminOrAccountant } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Create or update attendance
router.post("/", protect, adminOrAccountant, markAttendance);

// Query using params: ?employee=ID&month=2025-03
router.get("/", protect, getAttendance);

export default router;
