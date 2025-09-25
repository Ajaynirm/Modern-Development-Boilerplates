import express from "express"
import morgan from "morgan";


const app=express();
const port=3000;
app.use(morgan("dev"));


app.get("/test-curl",(req,res)=>{return res.json({"message ": "Your server listening properly "})});
app.post("/test/post-curl", (req,res)=>{return res.json(req)})
app.listen(port,()=>console.log(`server listening on port: ${port}`));

