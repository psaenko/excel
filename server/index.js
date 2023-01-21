import express from 'express'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
import morgan from 'morgan'
import colors from 'colors'


import { errorHandler, notFound } from './middleware/error.middleware.js'

import fileRouter from './routes/files.router.js'
import requestsRouter from './routes/requests.router.js'
import commentsRouter from './routes/comments.router.js'
import statusRouter from './routes/status.router.js'


dotenv.config()

const app = express()

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

app.use(express.json())

const __dirname = path.resolve()

const corsOptions = {
    credentials: true,
    origin: ['http://localhost:8080', 'https://subdomain.dniprorada.gov.ua/api'],
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH', 'OPTIONS']
}

app.use(cors(corsOptions))

app.use('/api/uploads', express.static(path.join(__dirname, '/uploads/')))

app.use('/api/upload/', fileRouter)
app.use('/api/requests/', requestsRouter)
app.use('/api/comments/', commentsRouter)
app.use('/api/status/', statusRouter)

if (process.env.NODE_ENV === 'production') {
    // Step 1:
    app.use(express.static(path.resolve(__dirname, './client')))
    // Step 2:
    app.get('*', function (request, response) {
        response.sendFile(path.resolve(__dirname, './client', 'index.html'))
    })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 50000

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
)
