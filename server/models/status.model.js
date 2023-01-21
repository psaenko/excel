import db from "../config/config.js";

export const changeSomeStatus = async (data, result) => {
    try {
        db.query("UPDATE requests SET status = ? WHERE id = ?", [data.data, data.id], (err, results) => {
            if (err) {
                result(err, null);
            } else {
                result(null, results)
            }
        });
    } catch (err) {
        console.log(err)
    }
}
