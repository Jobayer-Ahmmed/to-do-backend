import expres from "express"
import To_Do_Model from "../../models/To_Do_Model.js"

var router = expres.Router()

router.get("/to-do-task", async(req, res)=>{
    const result = await To_Do_Model.find()
    res.send(result)

})

export default router