

import expres from "express"
import Complete_Model from "../../models/Complete_Model.js"



var router = expres.Router()

router.post("/complete-task", async(req, res)=>{
    const toData = new Complete_Model(req.body)
    const result = await toData.save()
    res.send(result)

})

export default router