import expres from "express"
import Ongoing_Model from "../../models/Ongoing_Model.js"


var router = expres.Router()

router.post("/push-to-do-task", async(req, res)=>{
    const toData = new Ongoing_Model(req.body)
    const result = await toData.save()
    res.send(result)

})

export default router