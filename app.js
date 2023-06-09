const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const profileRoutes = require("./routes/profileRoutes");

app.use(express.json());
app.use(cors());

const mongoUrl=process.env.MONGO_URL

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://task_manager:Task%401234@cluster0.aum99mm.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true }, err => {
  if (err) throw err;
  console.log("Mongodb connected...");
});


app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/profile", profileRoutes);

app.get('/vivek',(req,res)=>{
  res.send("hello vivek tested")
})


const port =  process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});
