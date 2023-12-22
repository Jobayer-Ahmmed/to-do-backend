
import expres from "express"
import To_Do_Model from "../../models/To_Do_Model.js"

var router = expres.Router()

router.delete("/to-do-task/:id", async(req, res)=>{
    let getId = req.params.id
    console.log(getId)
    const result= await To_Do_Model.findByIdAndDelete(getId)

    res.send(result)

})

export default router