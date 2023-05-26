var app=require("express")()
var port=process.env.port || 8000

app.set('view engine','hbs')
app.get('/',(req,res)=>
{
    res.render('abc')
})
app.listen(port)
