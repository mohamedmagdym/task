import express from "express"
const app  = express()
const students = [
    {
        name: "medo" , 
        id: 1 ,
        city: "cairo"
    } , 
    {
        name: "ahmed" , 
        id: 2 ,
        city: "mansora"
    }  , 
    {
        name: "mohamed" , 
        id: 3 ,
        city: "alex"
    } 
]
app.get("/student" , (req , res) =>{
       let out = "<ul>"
       for(let i  = 0 ; i<students.length ; i++){
        out += "<li>"+students[i].name+" </li>"

       }
       out += "</ul>"
       res.send(out);
})
    app.listen(5000);