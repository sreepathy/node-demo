const express = require('express')

const app = express()
const port = 3000
const host = '0.0.0.0'


app.get('/', (req, res) => {
    res.send(`
    <html>
    <head>
        <title>Welcome page</title>
        <style>
            body {
                background-color: white;
            }

            #message {
                width:60%;
                margin-left:20%;
                margin-top:100px;
                height:300px;
                /*background-color:#edcccc;*/
                background-color:#ccffcc;
                border: thin solid #e00;
            }
        </style>
    </head>
    <body>
        <div id="message">
            <h2 align="center" style="color:#000;padding:40px;">This is a test page</h2>
        </div>
    </body>
    </html>
    `);
})

app.listen(port, host, () => {
    console.log(`Example app listening on port ${port}`)
})