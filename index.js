'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
//const ProductCTRL = require('./controllers/product')
const Product = require('./models/product') 


mongoose.connect('mongodb://localhost:27017/shop2')
	let db = mongoose.connection

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())






app.get('/api/product', (req, res) => {

	Product.find({}, (err, products) => {
		if (err) return res.status(500).send(`Hubo un error al realizar la petición ${err}`)
			if (!products) return res.status(404).send('Producto no encontrado')
					res.status(200).json({products})
	})

})






db.on('error', console.error.bind(console, 'Hubo un error de conexión a la base de datos')) 
db.once('open', () => {
	console.log('-->Conexión a la base de datos establecida...')
})

app.listen(port, (err) => {
	if (err) return console.error(`There was an error starting the server ${err}`)
		console.log(`application listening at port ${port}`)
})