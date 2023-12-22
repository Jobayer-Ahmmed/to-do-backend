import express from "express"
import applyMiddleWare from "./middlewares/applyMiddleWare.js"
import postRouteOfToDo from "./routes/postRouteOfToDo/index.js"
import getRouteOfToDoTask from "./routes/getRouteOfToDoTask/index.js"
import postRouteOfOngoing from "./routes/postRouteOfOngoing/index.js"
import getRouteOfOngoing from "./routes/getRouteOfOngoing/index.js"
import deleteRouteOfToDo from "./routes/deleteRouteOfToDo/index.js"
import postComplete from "./routes/postRouteOfComplete/index.js"
import getComplete from "./routes/getRouteOfComplete/index.js"
import deleteComplete from "./routes/deleteRouteOfComplete/index.js"
import deleteComplete2 from "./routes/deleteRouteOfComplete2/index.js"


const app =express()

applyMiddleWare(app)

app.use(postRouteOfToDo)
app.use(getRouteOfToDoTask)
app.use(postRouteOfOngoing)
app.use(getRouteOfOngoing)
app.use(deleteRouteOfToDo)
app.use(postComplete)
app.use(getComplete)
app.use(deleteComplete)


app.get("/health", (req, res)=>{
    res.send("To Do server is running")
})




app.all("*", (req, res, next)=>{
    const myErr = new Error(`The request URL is invalid : [${req.url}]`)
    myErr.status=404
    next(myErr)
})

app.use((err, req, res, next)=>{
    res.status(err.status || 500).json({message : err.message})
})

export default app