const express = require('express')
const router = express.Router()
const { login } = require ('../controllers/usersController')

router.post('/login', login )


router.get('/logout', (req, res) => {
    res.send('get my receiver');
});

module.exports = router
