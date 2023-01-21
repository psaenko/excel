import {
    changeSomeStatus
} from "../models/status.model.js";

export const changeStatus = (req, res) => {
    const data = req.body;
    changeSomeStatus(data, (err, results) => {
        if (err) {
            res.status(401).json(err);
        } else {
            res.json(results);
        }
    });
}
