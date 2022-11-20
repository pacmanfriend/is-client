import {config} from "@/config";

async function GetVigenereEncrypt(fileName, option) {
    let response = await fetch(config.base_url + "/lab7/get-vigenere-encrypt?file_name=" + fileName + "&is_encoding=" + option, {
        method: "GET"
    });

    let data = await response.json();

    return {
        data: data,
        status: response.status
    };
}

export {GetVigenereEncrypt}