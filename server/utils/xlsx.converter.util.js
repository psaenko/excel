import XLSX from 'xlsx'

export const xlsxToJSON = (file) => {
    try {
        const workbook = XLSX.readFile(file);
        const sheet_name_list = workbook.SheetNames;
        const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
        return data

    } catch (err) {
        throw new Error(err);
    }
}
