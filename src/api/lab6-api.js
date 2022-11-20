import {config} from "@/config";

async function GetCesarEncrypt(fileName, option) {
    let response = await fetch(config.base_url + "/lab6/get-cesar-encrypt?file_name=" + fileName + "&is_encoding=" + option, {
        method: "GET"
    });

    let data = await response.json();

    return {
        data: data,
        status: response.status
    };
}

export {GetCesarEncrypt}