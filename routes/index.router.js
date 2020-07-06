const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
    res.send('Captcha Service Running!')
})

module.exports = router