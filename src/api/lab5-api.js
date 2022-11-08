import {config} from "@/config";

async function GetBlockEncrypt(fileName, option) {
    let response = await fetch(config.base_url + "/lab5/get-block-encrypt?file_name=" + fileName + "&is_encoding=" + option, {
        method: "GET"
    });

    let data = await response.json();

    return {
        data: data,
        status: response.status
    };
}

export {GetBlockEncrypt}