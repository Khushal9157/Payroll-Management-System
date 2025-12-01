import express from "express";
import { setSalary, getSalary } from "../controllers/salary.controller.js";
import { protect, adminOrAccountant } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", protect, adminOrAccountant, setSalary);
router.get("/:empId", protect, adminOrAccountant, getSalary);

export default router;
