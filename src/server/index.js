var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();
const MeaningCloudAPIRequest = require('./MeaningCloudAPI.js')

const app = express()

app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(JSON.stringify(MeaningCloudAPIRequest))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


app.post('/result', MeaningCloudAPIRequest.getResult);

