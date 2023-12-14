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

//Tip Calculator
app.get("/tip/:total/:tipPercentage", (req, res) => {
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage
    const result = `${total}`*(`${tipPercentage}`/100)
   res.send(`<h1>${result}</h1>`)
})

//Magic 8 Ball
app.get("/magic/:question", (req, res) => {
    const question = req.params.question
    const magic8Ball = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const random = magic8Ball[Math.floor(Math.random() * (magic8Ball.length))]
    res.send(
        `<h2>${question}</h2>
        <h1>${random}</h1>`
    )

} )

//TURN SERVER ON
app.listen(3000, () => {console.log("it worked")})

