<template>
    <h1>LAB3</h1>
    <div>
        <!--        <SelectButton v-model="selectedOption" :options="options" optionLabel="label" @change="changeSelectOptions"-->
        <!--                      aria-labelledby="single"/>-->
        <Dropdown placeholder="Выберите файл" v-model="selectedFile" :options="files" option-label="FileName"
                  option-value="FileName" @change="selectFile"/>
    </div>
    <div>
        <Textarea v-model="text" :disabled="true" :autoResize="true" rows="10" cols="50"/>
        <Textarea v-model="resText" :disabled="true" :autoResize="true" rows="10" cols="50"/>
    </div>
    <div>
        <h3>Символы с кодировкой</h3>
        <DataTable class="p-datatable-sm" :value="chars" responsive-layout="scroll" :paginator="true" :rows="10"
                   currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
            <Column headerStyle="width: 100px" v-for="col of columns" :field="col.field" :header="col.header"
                    :key="col.field"></Column>
        </DataTable>
    </div>
    <div>
        <h3>Частотный анализ</h3>
        <DataTable class="p-datatable-sm" :value="segments" responsive-layout="scroll" :paginator="true" :rows="10"
                   currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
            <Column header-style="width: 100px" v-for="col of frequencyTableColumns" :field="col.field"
                    :header="col.header" :key="col.field"/>
        </DataTable>
    </div>
    <div>
        <span>Коды: </span> {{ result }}
    </div>
    <div>
       <span>Степень сжатия: </span> {{ bites }}
    </div>
</template>

<script>
import {ArithmeticEncoding} from "@/api/lab3-api";
import {GetFiles} from "@/api/common-api";

export default {
    name: "Lab3",
    data() {
        return {
            selectedFile: null,
            files: [],
            chars: null,
            segments: null,
            columns: null,
            frequencyTableColumns: null,
            result: 0,
            bites: 0,
            text: "",
            resText: "",
            selectedOption: null,
            options: []
        }
    },
    created() {
        this.columns = [
            {field: 'symbol', header: 'Символ'},
            {field: 'code', header: 'Кодировка'},
        ]

        this.frequencyTableColumns = [
            {field: 'character', header: 'Символ'},
            {field: 'frequency', header: 'Частота'},
            {field: 'probability', header: 'Вероятность'},
            {field: 'interval', header: 'Интервал'}
        ]

        this.options = [
            {option: true, label: "Закодировать текст"},
            {option: false, label: "Раскодировать текст текст"}
        ]

        GetFiles().then(val => {
            if (val.error == null) {
                this.files = val.files;
            }
        });
    },
    methods: {
        selectFile() {
            ArithmeticEncoding(this.selectedFile, true).then(val => {
                let res = val.data;

                this.result = res.result;
                this.text = res.text;
                this.bites = res.bites;
                this.chars = res.chars;
                this.segments = res.segments;
                this.resText = res.restext;
            });
        },
        changeSelectOptions(event) {
            this.selectedOption = event.value;
        }
    }
}
</script>

<style scoped>

</style>