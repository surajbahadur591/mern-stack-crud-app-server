import mongoose, { plugin } from "mongoose";
import autoIncrement from 'mongoose-auto-increment'

const userSchema = mongoose.Schema( {
    firstname : String,
    lastname : String,
    email : String,
    age : Number,
    location : String
    
})

autoIncrement.initialize(mongoose.connection)
userSchema/plugin(autoIncrement.plugin, 'user')

const user = mongoose.model('user', userSchema)

export default user;