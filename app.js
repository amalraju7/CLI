const fs = require('fs/promises');
const express = require("express");
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const path = require('path');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');
const app = express();
const session = require('express-session');

let globalUsername;

const dir ="notebook";
const filename = "Sdds";

app.use(session({
  secret: 'yourkeykey'
}));

app.use(cors());
app.use(express.json());
app.use(cookieParser());


// Connect to MongoDB
mongoose.connect('mongodb+srv://amalraju7:amal@cluster0.acgs0ce.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });




  const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });
  
  const User = mongoose.model('User', userSchema);



  // Register endpoint
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Check if username is already taken
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(409).json({ error: 'Username already taken' });
      }

      
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  const verifyJwt = (req,res,next) => {
    const token = req.headers["x-access-token"];

    if(!token){
      res.send({auth:false,message:"Authentication failed"});
     
    }
    else{
      jwt.verify(token,"jwtSecret",(err,decoded)=>{
        if(err){
          res.json({auth:false,message:"Failed to authenticate"});
        }else{
          console.log(decoded);
          req.username = decoded.username;
          next();
        }
      })
    }
  }

app.get('/isUserAuth',verifyJwt, (req,res)=>{
  res.send("hii");
});


  app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Find the user by username
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      
      globalUsername = username;
     
      // Check if the provided password matches the stored hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ auth:false, error: 'Invalid credentials' });
      }
  
console.log(req.session.username)


      const usernametoken = user.username;
      const token = jwt.sign({usernametoken},"jwtSecret",{
        expiresIn:300,
      })
      res.status(200).json({ auth:true, token:token, result:user, message: 'Login successful' });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ auth:false, error: 'Internal server error' });
    }
  });
  



app.get("/cells", async(req,res) => {
  let filename = globalUsername.toString();
  console.log(filename);
    fullPath = path.join(dir,filename);
 
 try{
    const result = await fs.readFile(fullPath, { encoding: 'utf-8'});
    res.send(JSON.parse(result));
}
catch(err){
if(err.code === 'ENOENT'){
await fs.writeFile(fullPath,'[]','utf-8');
res.send([]);
}else{
    throw err;
}
}
});


app.post("/cells",verifyJwt,async(req,res) => {
   let filename = globalUsername.toString();
   
    

  fullPath = path.join(dir,filename);

 
    const {cells} = req.body;

    await fs.writeFile(fullPath,JSON.stringify(cells),'utf-8')

    res.send({status:'ok'});
});
 
  
  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));