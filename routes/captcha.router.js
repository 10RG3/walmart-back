const express = require('express')
const router = express.Router()

const CaptchaController = require('../controllers/captcha.controller')

router.get('/:door?', CaptchaController.get)

router.post('/', CaptchaController.validate)

module.exports = router