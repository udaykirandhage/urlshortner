const express = require('express')
const router = express()
router.use(express.Router())
const controller = require('../Controllers/url.controller')

router.get('/',controller.home)
router.get('/:code',controller.convertshorturltoFull)
router.post('/shorten',controller.post_Fullurl)


module.exports = {router}
