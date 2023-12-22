import expres from "express"
import To_Do_Model from "../../models/To_Do_Model.js"

var router = expres.Router()

router.post("/to-do-task", async(req, res)=>{
    console.log("I am hitted")
    const toData = new To_Do_Model(req.body)
    const result = await toData.save()
    res.send(result)

})

export default router