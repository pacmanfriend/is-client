import {config} from "@/config";

async function UploadFile(file) {
    let formData = new FormData();
    formData.append("file", file, "lab2.txt")

    let response = await fetch(config.base_url + "/lab2/upload-file", {
        method: "POST",
        body: formData,
    });


    let data = await response.json()

    return {
        responseData: data,
        statusCode: response.status,
    }
}


export {UploadFile}