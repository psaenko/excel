import {DefaultAPIInterface, WithAuthAPIInterface} from "@/api";

export const FilesAPI = {
    getFiles(requestID) {
        const url = '/files/';
        return WithAuthAPIInterface(url + requestID)
    },

    loadFile(requestsID, fileURL){
        const url = '/files';
        const data = {requestsID, fileURL};
        console.log(data)
        return WithAuthAPIInterface.post(url, data)
    }
}
