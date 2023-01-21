import db from "../config/config.js";

export const getAllRequests = async (data, result) => {
    try {
        db.query("SELECT * FROM requests ORDER BY id ", data, (err, results) => {
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
