import express from 'express';

const app=express();

app.get('/user', (req,res)=>{
    res.send("Server is on");
})

app.post("/register",createUser)
app.get("/profile",authenticateToken,getUser)
app.post("/updateuser",authenticateToken, updateUser)
app.get("/deleteUser",authenticateToken, deleteUser)

app.listen(5000,(req,res)=>{
    console.log("listening to 5000")
    // res.send("Server is on");
})


