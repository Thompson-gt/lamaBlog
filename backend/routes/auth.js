import express from "express";
//import controllers
import {
	loginController,
	logoutController,
	registerController,
} from "../controllers/auth.js";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/logout", logoutController);

export default router;
