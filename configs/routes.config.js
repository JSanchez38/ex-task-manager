
const express = require('express')
const issues = require('../controllers/issues.controller')
const users = require('../controllers/users.controller')
const secure = require('../middlewares/auth.middleware')

const router = express.Router()

//Issue crud
router.get('/issues', secure.isAuthenticated, issues.list) //read
router.get('/create-issue', secure.isAuthenticated, issues.create) //create
router.post('/create-issue', secure.isAuthenticated, issues.doCreate) //create
router.get('/issues/:id', secure.isAuthenticated, issues.detail) //read
router.get('/issues/:id/delete', secure.isAuthenticated, issues.delete) //delete

router.get('/issues/:id/edit', secure.isAuthenticated, issues.edit)
router.post('/issues/:id/edit', secure.isAuthenticated, issues.doEdit)

//User crud
router.get('/login', users.login)
router.post('/login', users.doLogin)
router.get('/logout', users.logout)

router.get('/signup', users.create)
router.post('/signup', users.doCreate)

router.get('/profile', secure.isAuthenticated, users.profile)


router.get('/', (req, res, next) => {
    res.redirect('/issues')
})

module.exports = router