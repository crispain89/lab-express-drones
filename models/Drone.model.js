const mongoose = require('mongoose'); 
const droneSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            default: 'General Atomics MQ-9 Reaper'
        },
        propellers: {
            type: Number,
            default:4
        }, 
        maxSpeed: {
            type: Number,
            default:18
        }
    })
const Drone = mongoose.model('Drone', droneSchema)
module.exports = Drone;