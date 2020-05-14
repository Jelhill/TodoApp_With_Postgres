const express = require("express")
const app = express()
const router = require("./router")
const morgan = require("morgan")
const cors =  require("cors")

//MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(morgan("tiny"))
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello")
})

app.use("/", router)


app.listen(5000, () => console.log("Server running on port 5000"))

module.exports = app