const express = require('express')
const router = express.Router()

router.get('/getOrganization', (req, res) => {
    return res.send('list of organizations');
});

router.get('/getParticipant', (req, res)=>{
    return res.send('list of Participants');
})

module.exports = router