const express = require("express")
const cors = require('cors')
const cron = require('node-cron')
const routes = require('./src/routes')
const { generateRandomStatus } = require("./scripts/generateRandomStatus")
const app = express()
const port = process.env.PORT || 3000
const consumerUrl = process.env.CONSUMER_URL || 'http://192.168.0.8:8080'

cron.schedule('*/30 * * * *', () => {
    generateRandomStatus()
});

app.use(cors({ origin: consumerUrl }))
app.use(express.json())
app.use('/', routes);
app.listen(port, () => console.log(`App listening on port ${port}!`))
