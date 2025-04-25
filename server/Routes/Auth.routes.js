import express from "express"
import { logout, signin, signup } from "../Controllers/auth.controller.js";

const router = express.Router();

router.get("/signin",signin);
router.get("/logout",logout);
router.get("/signup",signup);

export default router;