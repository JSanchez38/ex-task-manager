const express = require('express')
// ModuleJS => import express from 'express'

// config
require('./configs/hbs.config')

const app = express()

app.set('view engine', 'hbs')
app.set('views', `${__dirname}/views`)

const routes = require('./configs/routes.config')
app.use('/', routes)  //comodin para ejecutar cualquier verbo



const port = 3000
app.listen(port, () => console.info(`Application running at port ${port}`))