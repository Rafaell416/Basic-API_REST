'use strict'

const Product = require('../models/product') 

function getProducts(req, res){
	Product.find({}, (err, products) => {
		if (err) return res.status(500).send(`Hubo un error al realizar la petición ${err}`)
			if (!products) return res.status(404).send('Producto no encontrado')
					res.status(200).json({products})
	})
}

module.exports = getProducts