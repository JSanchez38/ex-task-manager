const express = require('express')

// ModuleJS => import express from 'express'

const app = express()


const port = 3000
app.listen(port, () => console.info(`Application running at port ${port}`))