import { Schema, model } from "mongoose";

const Ongoing_Schema = new Schema({
    task_name: {type: String},
    task_description: {type: String},
    task_initial_date: {type: String},
    task_expected_completed_date: {type: String},
})

const Ongoing_Model = model("Ongoing_Model", Ongoing_Schema)

export default Ongoing_Model