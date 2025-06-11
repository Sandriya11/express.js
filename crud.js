const express=require('express');
const app=express();
const PORT=3000;

app.use(express.json())

let user=[];
let id =1;

//post
app.post('/users',(req,res)=>{
    const {fname,lname,age,gender}=req.body;
    if (!fname) return res.status(400).json ({message :"inavlid"});
    const newid ={new_id:id++,fname,lname,age,gender};
    user.push(newid);
    res.status(201).json(newid);
    console.log("Student profile: ",req.body)
});

//get
app.get('/users',(req,res)=>{
    res.json(user);
});


//update
app.put('/users/:id',(req,res)=>{
    const {age}=req.body;
    const update=user.find(u=>u.id==req.params.id)
    
  if (update) {
    update.age = age;
    res.json({message: "Age updated",update});
  }
})

//delete
app.delete('/users/:id',(req,res)=>{
    user=user.filter(s=> s.id==req.params.id)
    res.json({ message: "Student deleted" });

})
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});


