import {
    getAllRequests,
} from "../models/requests.model.js";

export const getRequests = (req, res) => {
    const data = req.body;
    getAllRequests(data, (err, results) => {
        if (err) {
            res.status(401).json(err);
        } else {
            res.json(results);
        }
    });
}

export const addComment = (req, res) => {
    try {
        const data = req.body;
        addNewComment(data, (err, results) => {
            if (err) {
                res.status(500)
                throw new Error('Помилка створення');
            } else {
                res.json(results);
            }
        });
    } catch (err) {
        console.log(err)
        res.status(500)
        throw new Error('Помилка створення');
    }
}

export const changeComment = (req, res) => {
    const data = req.params.id;
    changeSomeComment(data, (err, results) => {
        if (err) {
            res.status(401).json(err);
        } else {
            res.json(results);
        }
    });
}
