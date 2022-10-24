import {config} from "@/config";

async function GetEncoding(fileName) {
    let response = await fetch(config.base_url + "/lab1/get-file-encoding?file_name=" + fileName, {
        method: "GET"
    });

    let data = await response.json();

    return {
        data: data,
        status: response.status
    };
}


export {GetEncoding}