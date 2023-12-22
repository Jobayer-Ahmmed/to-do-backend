import { Schema, model } from "mongoose";

const Complete_Schema = new Schema({
    task_name: {type: String},
    task_description: {type: String},
    task_initial_date: {type: String},
    task_expected_completed_date: {type: String},
})

const Complete_Model = model("Complete_Model", Complete_Schema)

export default Complete_Model