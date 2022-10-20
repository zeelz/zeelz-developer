const express = require('express')
const cors = require('cors')
const os = require('os')

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.json({
        data: `Node App runing on ${os.hostname()}`
    })
})

app.listen(3000, () => console.log('Listening on port 3000'))