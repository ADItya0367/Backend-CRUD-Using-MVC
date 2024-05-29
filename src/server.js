const express = require('express');
const app = express();

const env = require('dotenv');
const { userSchema,mongoose } = require('./models/User');

env.config();




let port = process.env.PORT || 3000;







//Registration routes for Admin teachers and students  inside user collection


app.get('/students',(req,res)=>{
    // STEP-3 Creating model
const user = mongoose.model('User',userSchema);

const User= new user({
    name: 'Last', 
    email: 'Last@123',
    password_hash:8165862,
    role: 'Admin'
})

User.save().then((d)=>console.log('Data saved successfully'))
.catch(err=>console.log('Error:',err))

  
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})