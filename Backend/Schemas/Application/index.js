import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ApplicationSchema = new Schema({
  email: { type: String },
  name: { type: String },
  password: { type: String },
  linkedInId: { type: String },
  githubId: { type: String },
  year: { type: String },
  branch: { type: String }
})
export default ApplicationSchema