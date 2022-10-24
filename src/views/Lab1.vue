<template>
    <h1>LAB 1</h1>
    <div>
        <Dropdown placeholder="Выберите файл" v-model="selectedFile" :options="files" option-label="FileName"
                  option-value="FileName"/>
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
import {UploadFile} from "@/api/lab1-api";
import {GetFiles} from "@/api/common-api";

export default {
    data() {
        return {
            selectedFile: null,
            files: [],
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

        GetFiles().then(val => {
            if (val.error == null) {
                this.files = val.files;
            }

        });
    },
    methods: {}
}
</script>

<style scoped>

</style>