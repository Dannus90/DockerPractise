const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.json({ message: "Ze Docker practise"})
})

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`App up and running on port ${port}`))