

import expres from "express"
import Ongoing_Model from "../../models/Ongoing_Model.js"




var router = expres.Router()

router.delete("/ongoing-task/:id", async(req, res)=>{
    
    const getId = req.params.id
    const result = await Ongoing_Model.findByIdAndDelete(getId)
    res.send(result)

})

export default router