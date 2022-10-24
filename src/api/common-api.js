import {config} from "@/config";

async function UploadFile(file) {
    let formData = new FormData();
    formData.append("file", file, "lab1.txt")

    let response = await fetch(config.base_url + "/api/upload-file", {
        method: "POST",
        body: formData,
    });

    return response.status;
}

export {UploadFile}