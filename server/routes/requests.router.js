import express from 'express'
import {
    getRequests
} from "../controllers/requests.controller.js"


const router = express.Router()

router
    .route('/:id?')
    .get(getRequests)

export default router
