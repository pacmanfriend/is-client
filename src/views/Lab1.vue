<template>
    <h1>LAB 1</h1>
    <div class="flex justify-content-start">
        <FileUpload v-model="file" :custom-upload="true" @select="selectFile" class="m-1" mode="basic" accept=".txt"/>
        <Button class="m-1" label="Upload" @click="upload"/>
    </div>
    <div>
        <Textarea v-model="rawText" :disabled="true" :autoResize="true" rows="10" cols="50"/>
        <Textarea v-model="formatText" :disabled="true" :autoResize="true" rows="10" cols="50"/>
        <div>
            <DataTable class="p-datatable-sm" :value="chars" responsive-layout="scroll" :paginator="true" :rows="10"
                       currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
                <Column headerStyle="width: 100px" v-for="col of columns" :field="col.field" :header="col.header"
                        :key="col.field"></Column>
            </DataTable>
        </div>
    </div>
</template>

<script>
import {UploadFile} from "../api/lab1-api";

export default {
    data() {
        return {
            file: {},
            rawText: "",
            formatText: "",
            chars: [],
            columns: null
        }
    },
    created() {
        this.columns = [
            {field: 'symbol', header: "Symbol"},
            {field: 'code', header: 'Code'},
        ]
    },
    methods: {
        upload(event) {
            UploadFile(this.file).then(val => {
                let res = val.responseData;

                this.rawText = res.rawText;
                this.chars = res.chars;
                this.formatText = res.formatText;
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