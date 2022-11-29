const express = require('express')
const os = require("os");
const ip = require('ip');


const app = express()
const port = 3000
const host = '0.0.0.0'

var hostname = os.hostname();


app.get('/', (req, res) => {
    const ip_addr = ip.address();
    res.send(`Hello world! <hr> Server hostname: ${hostname} <hr> Server IP: ${ip_addr}`);
})

app.listen(port, host, () => {
    console.log(`Example app listening on port ${port}`)
})