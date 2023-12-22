"/push-complete-task"



import expres from "express"
import Complete_Model from "../../models/Complete_Model.js"



var router = expres.Router()

router.get("/complete-task", async(req, res)=>{
    const result = await Complete_Model.find()
    res.send(result)

})

export default router