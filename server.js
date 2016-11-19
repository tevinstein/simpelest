let express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    port = 8080,
    item = require('./controllers/routes/item'),
    logger = require('morgan'),
    cors = require('cors')

app.use(cors())
app.use(logger('dev'))
mongoose.connect("mongodb://localhost/simple-to-do-list")
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/json' }))

app.get("/", (req, res) => res.json({ message: "Welcome!" }))

app.route("/item")
    .get(item.getItems)
    .post(item.postItem)

app.route("/item/:id")
    .get(item.getItem)
    .delete(item.deleteItem)
    .put(item.updateItem)

app.listen(port)
console.log("Ya udah jalan di port" + port)

module.exports = app
