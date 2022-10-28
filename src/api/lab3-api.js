import {config} from "@/config";

async function ArithmeticEncoding(fileName) {
    let response = await fetch(config.base_url + "/lab3/get-arithmetic-encoding?file_name=" + fileName, {
        method: "GET"
    });

    let data = await response.json();

    return {
        data: data,
        status: response.status
    };
}

export {ArithmeticEncoding}