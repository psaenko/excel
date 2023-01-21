import db from "../config/config.js";

export const changeSomeComment = async (data, result) => {
    try {
        db.query("UPDATE requests SET comment = ? WHERE id = ?", [data.data, data.id], (err, results) => {
            if (err) {
                console.log(err)
                result(err, null);
            } else {
                result(null, results)
            }
        });
    } catch (err) {
        console.log(err)
    }
}
