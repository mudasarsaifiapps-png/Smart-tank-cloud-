const express = require("express");
const app = express();

let tankData = {
  level: 0,
  motor: 0
};

app.get("/", (req,res)=>{
  res.send("Smart Tank Cloud Running");
});

app.get("/update",(req,res)=>{
  if(req.query.level){
    tankData.level=req.query.level;
    console.log("LEVEL:",tankData.level);
  }
  res.send("OK");
});

app.get("/level",(req,res)=>{
  res.json(tankData);
});

app.get("/motor",(req,res)=>{
  if(req.query.state){
    tankData.motor=req.query.state;
    console.log("MOTOR:",tankData.motor);
  }
  res.send("Motor Updated");
});

app.get("/command",(req,res)=>{
  res.json({motor:tankData.motor});
});

app.listen(3000,()=>{
  console.log("Cloud Running");
});
