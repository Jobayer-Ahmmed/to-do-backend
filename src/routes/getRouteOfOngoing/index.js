import expres from "express"
import Ongoing_Model from "../../models/Ongoing_Model.js"


var router = expres.Router()

router.get("/push-to-do-task", async(req, res)=>{
    const result = await Ongoing_Model.find()
    res.send(result)

})

export default router