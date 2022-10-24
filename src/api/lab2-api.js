import {config} from "@/config";

async function GetHuffmanCodes(fileName) {
    let response = await fetch(config.base_url + "/lab2/get-huffman-codes?file_name=" + fileName, {
        method: "GET",
    });

    let data = await response.json()

    return {
        data: data,
        status: response.status,
    }
}


export {GetHuffmanCodes}