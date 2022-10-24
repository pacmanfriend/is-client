import {config} from "@/config";

async function UploadFile(file) {
    let formData = new FormData();
    formData.append("file", file)

    let response = await fetch(config.base_url + "/api/upload-file", {
        method: "POST",
        body: formData,
    });

    return await response.json();
}

async function GetFiles() {
    let response = await fetch(config.base_url + "/api/get-files", {
        method: "get",
    });

    return await response.json()
}

export {UploadFile, GetFiles}