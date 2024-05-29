
// STEP-2 Defining schema
const { mongoose } = require('../config/db');

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password_hash: {
        type: String,
        required: true
    
    },
   
    role: [{
        type:String,
        enum: ["Admin","Teacher","Student"],
        default: 'Student',
    }],
   
},{
    timestamps: true
})

exports.userSchema = userSchema;
exports.mongoose = mongoose;