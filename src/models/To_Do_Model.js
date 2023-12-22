import { Schema, model } from "mongoose";

const To_Do_Schema = new Schema({
    task_name: {type: String},
    task_description: {type: String},
    task_initial_date: {type: String},
    task_expected_completed_date: {type: String},
})

const To_Do_Model = model("To_Do_Model", To_Do_Schema)

export default To_Do_Model