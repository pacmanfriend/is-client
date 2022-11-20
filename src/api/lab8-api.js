import {config} from "@/config";

async function GetRsaEncrypt(fileName, option) {
    let response = await fetch(config.base_url + "/lab8/get-rsa-encrypt?file_name=" + fileName + "&is_encoding=" + option, {
        method: "GET"
    });

    let data = await response.json();

    return {
        data: data,
        status: response.status
    };
}

export {GetRsaEncrypt}