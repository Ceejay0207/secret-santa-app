const express = require('express')
const router = express.Router()

router.get("/getParticipants", (req, res) => {
    res.send('List of my participants');
})

module.exports = router
