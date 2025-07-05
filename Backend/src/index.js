import express from 'express'
import "dotenv/config";
import "../Models/db.js";  // not need to export connection url from db, 
import AuthRouter from "../Routes/AuthRouter.js"
import bodyParser from 'body-parser';
import cors from "cors"


const Port = process.env.PORT;
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/auth", AuthRouter);

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.get('/', (req, res) => {
    res.send('PONG');
});


console.log("PORT from .env:", process.env.PORT);


app.listen(Port , ()=>
{
    console.log("Server is running on Port no-: "+ Port);
})
