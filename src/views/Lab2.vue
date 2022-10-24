<template>
    <h1>LAB 2</h1>
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
import {UploadFile} from "@/api/lab2-api";

export default {
    data() {
        return {
            file: {},
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
    },
    methods: {
        upload(event) {
            UploadFile(this.file).then(val => {
                let res = val.responseData;
                this.chars = res.chars;
                this.encodedText = res.encodedText;
                this.entropy1 = res.entropy1;
                this.entropy2 = res.entropy2;
                this.compression = res.compression;
            });
        },
        selectFile(event) {
            this.file = event.files[0];
        }
    }
}
</script>

<style scoped>

</style>