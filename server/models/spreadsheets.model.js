import db from "../config/config.js";

async function export_id() {
    return new Promise((resolve, reject) => {
        db.query("SELECT export_id FROM requests", (err, results) => {
            if (err) {
                reject(err);
            } else {
                let ids = []
                results.map((id) => {
                    ids.push(id.export_id)
                })
                resolve(ids);
            }
        });
    })
}

export const loadNewSpreadsheets = async (data, result) => {
    try {
        db.query("INSERT INTO spreadsheets SET file_name = ?", [data.file_name], async (err, results) => {
            if (err) {
                result(err, null);
            } else {
                for (let i = 0; i < data.json.length; i++) {
                    const values = Object.values(data.json[i])
                    if (values[1] && values[2]) {
                        const query = {
                            export_id: values[1],
                            address: values[2],
                            district: values[3],
                            applicant_name: values[4].split(':')[0],
                            applicant_phone: values[4].split(':')[1],
                            problem: values[5],
                            executor: values[6],
                            note: values[7],
                            regulations: values[8],
                            received: values[9],
                            сomment_when_closing: values[10],
                            spreadsheets_id: results.insertId,
                        }

                        const export_ids = await export_id()

                        if (!export_ids.includes(values[1])) {
                            db.query("INSERT INTO requests SET ?", [query], (err, results) => {
                                if (err) {
                                    result(err, null);
                                }
                            });
                        } else {
                            db.query("UPDATE requests SET ? WHERE export_id = ?", [query, query.export_id], (err, results) => {
                                if (err) {
                                    result(err, null);
                                }
                            });
                        }

                    }
                }
                result(null, results)
            }
        })
    } catch (err) {
        console.log(err)
    }
}
