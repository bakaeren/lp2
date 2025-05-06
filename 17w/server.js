const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()
app.use(cors())
app.use(express.static('public'))

app.get("/api/employees", (req, res)=>{
    res.json(JSON.parse(fs.readFileSync("employees.json","utf-8")))
})

app.listen(3000)