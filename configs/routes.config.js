
const express = require('express')
const issues = require('../controllers/issues.controller')

const router = express.Router()

router.get('/issues', issues.list)
router.get('/create-issue', issues.create)
router.post('/create-issue', issues.doCreate)
router.get('/issues/:id/delete', issues.delete)

router.get('/', (req, res, next) =>{
    res.redirect('/issues')
})

module.exports = router