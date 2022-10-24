<template>
    <h1>LAB 2</h1>
    <div>
        <Dropdown placeholder="Выберите файл" v-model="selectedFile" :options="files" option-label="FileName"
                  option-value="FileName" @change="selectFile"/>
    </div>
    <div>
        <DataTable class="p-datatable-sm" :value="chars" responsive-layout="scroll" :paginator="true" :rows="10"
                   currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
            <Column headerStyle="width: 100px" v-for="col of columns" :field="col.field" :header="col.header"
                    :key="col.field"></Column>
        </DataTable>
        <Textarea v-model="encodedText" :disabled="true" :autoResize="true" rows="10" cols="110"/>
        <div>{{ this.entropy1 }}</div>
        <div>{{ this.entropy2 }}</div>
        <div>{{ this.compression }}</div>
    </div>
</template>

<script>
import {GetHuffmanCodes} from "@/api/lab2-api";
import {GetFiles} from "@/api/common-api";

export default {
    data() {
        return {
            selectedFile: null,
            files: [],
            chars: [],
            columns: null,
            encodedText: "",
            entropy1: 0,
            entropy2: 0,
            compression: 0
        }
    },
    created() {
        this.columns = [
            {field: "symbol", header: "Symbol"},
            {field: "code", header: "Code"},
            {field: "count", header: "Count"},
            {field: "huffmanCode", header: "HuffmanCode"}
        ]

        GetFiles().then(val => {
            if (val.error == null) {
                this.files = val.files;
            }

        });
    },
    methods: {
        selectFile(event) {
            GetHuffmanCodes(this.selectedFile).then(val => {
                let res = val.data;
                this.chars = res.chars;
                this.encodedText = res.encodedText;
                this.entropy1 = res.entropy1;
                this.entropy2 = res.entropy2;
                this.compression = res.compression;
            });
        }
    }
}
</script>

<style scoped>

</style>