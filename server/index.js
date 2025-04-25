import express from "express"
import dotenv from "dotenv";
import { dbconnct } from "./Db/Db.js";
import authroutes from "./Routes/Auth.routes.js"

const app = express();

dotenv.config();
app.use(express.json());
app.use("/auth/api",authroutes);

app.listen(3000,()=>{
    dbconnct();
    console.log("The Server has been started on the port 3000");
})