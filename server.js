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




//TURN SERVER ON
app.listen(3000, () => {console.log("it worked")})

