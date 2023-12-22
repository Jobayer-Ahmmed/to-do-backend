import expres from "express"
import Complete_Model from "../../models/Complete_Model.js"



var router = expres.Router()

router.delete("/complete-task/:id", async(req, res)=>{
    
    const getId = req.params.id
    const result = await Complete_Model.findByIdAndDelete(getId)
    res.send(result)

})

export default router