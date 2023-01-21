import express from 'express'
import {
    changeStatus
} from "../controllers/status.controller.js"

const router = express.Router()

router
    .route('/')
    .patch(changeStatus)

export default router
