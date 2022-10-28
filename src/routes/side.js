const express = require('express')
const route = express.Router()
const sideController = require('../app/controllers/SideController')

route.use('/search', sideController.search)
route.use('/', sideController.index)
module.exports = route