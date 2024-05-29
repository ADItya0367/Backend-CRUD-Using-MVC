// STEP-1 Connecting to MongoDB
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Aditya:abcde12345@nodejs.euh2mao.mongodb.net/?retryWrites=true&w=majority&appName=NodeJs')
.then(()=>console.log('Connected to MongoDB')).catch(err=>console.log('Error:',err))

exports.mongoose = mongoose;