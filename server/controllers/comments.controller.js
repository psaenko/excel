import {
    changeSomeComment
} from "../models/commets.model.js";

export const changeComment = (req, res) => {
    const data = req.body;
    changeSomeComment(data, (err, results) => {
        if (err) {
            res.status(401).json(err);
        } else {
            res.json(results);
        }
    });
}
