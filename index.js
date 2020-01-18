const express = require("express")
const routes = require('./src/routes')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors({ origin: 'http://192.168.0.8:8080'}))
app.use(express.json())
app.use('/', routes);
app.listen(port, () => console.log(`App listening on port ${port}!`))
