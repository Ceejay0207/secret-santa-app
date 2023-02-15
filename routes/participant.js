const express = require('express')
const router = express.Router()

router.get('/getMyWishList', (req, res) => {
    res.send({message:'list of my wishlist'});
});

router.get('/drawname', (req, res) => {
    res.send('get my receiver');
});

module.exports = router
