var x=require('express')
var y=x()

y.get('/this',(req,res)=>{
    res.send("have a nice day")

})
y.get('/about',(req,res)=>{
    res.send('good mrng')

})
y.get('/read',(req,res)=>{
    res.send('welcome')
})
y.listen(3000,()=>{
    console.log("server started at http://localhost:3000")
})
