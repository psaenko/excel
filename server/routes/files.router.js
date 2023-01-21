import express from 'express'
import multer from 'multer'
import {v1 as uuidv4} from 'uuid'

import {loadSpreadsheets} from "../controllers/spreadsheets.controller.js";

const router = express.Router()

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'uploads')
    },
    filename: async (_, file, cb) => {
        const fileName = uuidv4().toString() + '.' + file.originalname.split('.').pop().toString()
        cb(null, fileName)
    }
})

const upload = multer({storage})

router
    .route('/')
    .post(upload.single('file'), loadSpreadsheets)
export default router
