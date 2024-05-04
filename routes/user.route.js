const express = require('express')
const router = express.Router()
const {
    // TestUserHealth,
    GetEmployee,
    UpdateEmployee,
    CreateEmployee,
    DeleteEmployee } = require('../handler/user.handler')

// router.get('/test', TestUserHealth)
// router.get('/greet', (req, res) => {
//     res.render('greet_user', {
//         initial: req.query.initial,
//         name: req.query.name
//     })
// })
router.get('/emp/login', (req, res) => {
    res.render('login')
})

router.get('/emp', GetEmployee)
router.post('/emp', CreateEmployee)
router.put('/emp/:id', UpdateEmployee)
router.delete('/emp/:id', DeleteEmployee)

module.exports = router