import { Router } from "express";
import {signupValidation, signinValidation} from "../Middlewares/AuthValidation.js"
import ProductRoute from "../Routes/ProductRouter.js"
import {signin, signup} from "../Controllers/AuthController.js"
const router = Router(); // create router instance

router.post("/signin", signinValidation , signin)

router.post("/signup", signupValidation, signup)

router.use("/products", ProductRoute)

export default router;
