// Iteration #1
const drones = [
    
        { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
        { name: "Racer 57", propellers: 4, maxSpeed: 20 },
        { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
    
]

const Drone = require('../models/Drone.model');
const mongoose = require('mongoose');
MONGO_URI="mongodb://localhost/lab-express-drones"

mongoose
    .connect(MONGO_URI)
    .then((response) => { 
        console.log('DB conectada')
        return Drone.insertMany(drones);
    })
    .then((response) => {
        console.log('Drones creados en la DB')
        mongoose.connection.close();
    }).catch((e)=> console.log('ERROR', e))
