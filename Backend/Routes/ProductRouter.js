import { Router } from "express";
import { ensureAuthenticated } from "../Middlewares/Auth.js";
const router = Router();


router.get("/", ensureAuthenticated , (req, res)=>
{
    console.log("----Login user details--", req.user);

    res.status(200).json([
        {
            name:"Mobile",
            price:123456,
        },
        {
            name:"TV",
            price:9999,
        }
    ])
})

export default router;
