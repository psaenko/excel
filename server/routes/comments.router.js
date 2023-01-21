import express from 'express'
import {
    changeComment
} from "../controllers/comments.controller.js"

const router = express.Router()

router
    .route('/')
    .patch(changeComment)

export default router
