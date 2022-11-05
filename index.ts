import express from "express";
import  RouterReminders  from "./src/routers/reminders"
const app = express()
app.use(express.json())
app.use("/reminders", RouterReminders)
app.get("/", (req, res) => {
    res.end("hello wolrd")
});
app.listen(8000, () => { 
    console.log("server started")
})