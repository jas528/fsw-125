const express = require('express')
const app = express()

app.use('/', express.json())

// bounty route
app.use('/bounties', require('./routes/bounterRouter'))

app.listen(9000, () => {
    console.log('The server is listening on port 9000!')
})

// Steps:
// npm init -y
// npm install express -- save
// created server.js file: import express, use express etc., server listening on port 9000
// run/start server: node server.js

// UUID - creates unique id's
// npm install uuid