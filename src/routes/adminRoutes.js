import express from "express";
import { registerAdmin } from "../controllers/adminAuthController.js";
import { loginAdmin } from "../controllers/adminAuthController.js";

const router = express.Router();

// Admin Registration
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

export default router;
