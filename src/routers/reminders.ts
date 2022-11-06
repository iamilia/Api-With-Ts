import { Router } from "express"
import ProfileCreateDto from "../dto/reminders-create";
import { Execute, SqlInsert } from "../models/mysql";
import Reminder from "../models/reminder";
const router  = Router();
const storage : Reminder[] = []
router.get("/", (req , res) => {
    Execute<Object, null>("SELECT * FROM `test`.`reminder` LIMIT 1000;", null).then(v => {
        res.status(201).json(v)
    }).catch(err => console.error(err)); // Here You Can Check your Storage
})
router.post("/", (req, res) =>{
    const {titel} = req.body as ProfileCreateDto
    const reminder = new Reminder(titel)
    storage.push(reminder)
    Execute<Object, Array<number | boolean | string>>("INSERT INTO `reminder` (`id`, `IsCompelt`, `titel`) VALUES (?, ?, ?);", [reminder.id, reminder.IsCompelt, reminder.titel]).then(v => {
        if (!v.hasOwnProperty("affectedRows")) return;
        const {affectedRows, insertId} = v as SqlInsert;
        console.log(affectedRows, insertId); // You Can See here affectedRows and insertid to console
        res.status(201).json(reminder)
    }).catch(err => console.error(err)); // if you look here and test it you can check it is worked good
})

export default router;