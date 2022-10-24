<template>
    <h1>LAB 1</h1>
    <div>
        <Dropdown placeholder="Выберите файл" v-model="selectedFile" :options="files" option-label="FileName"
                  option-value="FileName" @change="selectFile"/>
    </div>
    <div>
        <Textarea v-model="rawText" :disabled="true" :autoResize="true" rows="10" cols="50"/>
        <Textarea v-model="formatText" :disabled="true" :autoResize="true" rows="10" cols="50"/>
        <div>
            {{ encodingType }}
        </div>
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
import {GetEncoding} from "@/api/lab1-api";
import {GetFiles} from "@/api/common-api";

export default {
    data() {
        return {
            selectedFile: null,
            files: [],
            rawText: "",
            formatText: "",
            encodingType: "",
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
    methods: {
        selectFile(event) {
            GetEncoding(this.selectedFile).then(res => {
                this.rawText = res.data.rawText;
                this.encodingType = res.data.encodingType;
                this.formatText = res.data.formatText;
                this.chars = res.data.chars;
            });
        }
    }
}
</script>

<style scoped>

</style>