import express from "express"
import { logout, signin, signup } from "../Controllers/auth.controller.js";
import { usermiddleware } from "../Middlewares/user.middleware.js";

const router = express.Router();

router.get("/signin",usermiddleware,signin);
router.get("/logout",logout);
router.get("/signup",signup);

export default router;