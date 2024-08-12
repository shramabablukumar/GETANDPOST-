const express =  require("express");
const app = express();
let port = 8080
app.use(express.urlencoded({extended : true}));
app.get("/register",(req,res) => {
    let {username,password} = req.query;

    res.send(`standard GET Response .Welcome ${username}!`);
});
app.post("/register",(req,res) =>{
    let {username,password} =req.body;

    res.send(`standard POST Response .Welcome ${username}!`);

});

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
}); 