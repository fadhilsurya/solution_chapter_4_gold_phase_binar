const express = require('express')
const router = express.Router()
const { GetStore,
    CreateStore,
    UpdateStore,
    DeleteStore } = require('../handler/store.handler')
router.get('/', GetStore)
router.post('/', CreateStore)
router.put('/:id', UpdateStore)
router.delete('/:id', DeleteStore)


module.exports = router