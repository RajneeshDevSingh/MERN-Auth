import mongoose from "mongoose"

const mondo_url = process.env.DB_URL;

mongoose.connect(mondo_url).then(()=>
{
    console.log("MongoDB Connected ..... ")
}).catch((err)=>
{
    console.log("MongoDb Connection error ......")
})