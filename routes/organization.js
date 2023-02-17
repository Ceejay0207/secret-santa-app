const express = require('express')
const router = express.Router()
const users = require ('../models/users.js')

router.get("/getParticipants", (req, res) => {
    res.send('List of my participants');
})

module.exports = router
