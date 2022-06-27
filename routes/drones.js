const express = require('express');
const router = express.Router();
const Drone= require('../models/Drone.model.js')

// require the Drone model here

router.get('/drones', async (req, res, next) => {
	try {
		const drones = await Drone.find();
		console.log('estos son los drones', drones)
		res.render('./drones/list', {drones} )

	} catch (error) { 
		console.log(error)

  }
  
});

router.get('/drones/create', (req, res, next) => {
	res.render('drones/create-form')
});

router.post('/drones/create', async (req, res, next) => {
	try {
		console.log('body del POST', req.body)
		await Drone.create(req.body);
		console.log('creado')
		res.redirect('/drones')

	} catch (error) {
		console.log(error)
	 }
});

router.get('/drones/:id/edit',async (req, res, next) => {
	try { 
		const id= req.params.id
		const drone = await Drone.findById(id);
		console.log('DRONEEEEEEEEEEEEE',drone )
		res.render('drones/update-form', {drone} )
		
	} catch (error) {
		
		console.log('error',error)
	}
 
});

router.post('/drones/:id/edit',async (req, res, next) => {
	try {

		const id = req.params.id
		const body=req.body
		const drone = await Drone.findByIdAndUpdate(id, body)
		console.log('ACTUALIZADO', drone)
		res.redirect('/drones')
	} catch (error) { 
		console.log(error)

	}
});

router.post('/drones/:id/delete',async (req, res, next) => {
	try { 
		await Drone.findByIdAndRemove(req.params.id)
		console.log('borrado')
		res.redirect('/drones')

	} catch (error) {
		console.log(error)
	}
});

module.exports = router;
