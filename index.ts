import express from "express";
import { Execute } from "./src/models/mysql";
import  RouterReminders  from "./src/routers/reminders"
const app = express()
app.use(express.json())
app.use("/reminders", RouterReminders)
app.get("/", (req, res) => {
    res.end("hello wolrd")
});
app.listen(8000, () => { 
    console.log("server started")
    Execute<string[] | any>("SELECT * FROM `table` WHERE name = ?", ["ALien"]).then((v) => {
        console.log(v[0]?.name);
    }).catch(e => console.error(e))
})