require("dotenv").config();
const express=require("express")
require ("./db/conn");
const router=require("./routes/router")
const cors=require("cors");
const app=express();
const port=8001;

app.use(express.json());
app.use(cors());
app.use(router);
app.use("/uploads",express.static("./uploads"));

app.listen(port,()=>{
    console.log("port started at",port);
});

