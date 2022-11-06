import { Router } from "express"
import ProfileCreateDto from "../dto/reminders-create";
import { Execute, SqlInsert } from "../models/mysql";
import Reminder from "../models/reminder";
const router  = Router();
const storage : Reminder[] = []
router.get("/", (req , res) => {
    res.json(storage)
})
router.post("/", (req, res) =>{
    const {titel} = req.body as ProfileCreateDto
    const reminder = new Reminder(titel)
    storage.push(reminder)
    Execute<Object, Array<number | boolean | string>>("INSERT INTO `reminder` (`id`, `IsCompelt`, `titel`) VALUES (?, ?, ?);", [reminder.id, reminder.IsCompelt, reminder.titel]).then(v => {
        if (!v.hasOwnProperty("affectedRows")) return;
        const {affectedRows, insertId} = v as SqlInsert;
        console.log(affectedRows, insertId); // You Can See here affectedRows and insertid to console
    }).catch(err => console.error(err)); // if you look here and test it you can check it is worked good
    res.status(201).json(reminder)
})

export default router;