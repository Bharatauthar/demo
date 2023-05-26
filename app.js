var app=require("express")()
var port=process.env.port || 8000
app.get('/',(req,res)=>
{
    res.end("bharat")
})
app.listen(port)
