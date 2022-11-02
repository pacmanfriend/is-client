import {config} from "@/config";

async function GammaEncryption(fileName, option) {
    let response = await fetch(config.base_url + "/lab4/get-gamma-encryption?file_name=" + fileName + "&is_encoding=" + option,
        {
            method: "GET",
        });

    let data = await response.json();

    return {
        data: data,
        status: response.status
    };
}

export {GammaEncryption}