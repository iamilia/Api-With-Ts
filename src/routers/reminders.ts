import { Router } from "express"
import ProfileCreateDto from "../dto/reminders-create";
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
    res.status(201).json(reminder)
})

export default router;