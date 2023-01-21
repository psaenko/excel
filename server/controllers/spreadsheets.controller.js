import {loadNewSpreadsheets} from '../models/spreadsheets.model.js'
import {xlsxToJSON} from "../utils/xlsx.converter.util.js"

export const loadSpreadsheets = (req, res) => {
    try {
        const JSON = xlsxToJSON('./uploads/' + req.file.filename)
        loadNewSpreadsheets({file_name: req.file.filename, json: JSON}, (err, results) => {
            if (err) {
                res.status(500).json('Помилка імпорту')
            } else {
                res.json(results);
            }
        });
    } catch (err) {
        console.log(err)
        res.status(500)
        throw new Error('Помилка імпорту');
    }
}
