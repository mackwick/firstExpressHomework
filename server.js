const express = require("express")
const app = express()

//************ */
//ROUTES
//************ */
app.get("/", (req, res) => {res.send("<h1>I'm listening</h1>")})

//Greeting route
app.get("/greeting/:name", (req, res) => {
    const name = req.params.name
    res.send(`<h1>Hello, ${name}.</h1>`)
})

app.get("/tip/:total/:tipPercentage", (req, res) => {
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage
    const result = `${total}`*(`${tipPercentage}`/100)
   res.send(`<h1>${result}</h1>`)
})

//TURN SERVER ON
app.listen(3000, () => {console.log("it worked")})

