<template>
    <h1>LAB 5</h1>
    <div>
        <SelectButton v-model="selectedOption" :options="options" optionLabel="label" @change="changeSelectOptions"
                      aria-labelledby="single"/>
        <Dropdown placeholder="Выберите файл" v-model="selectedFile" :options="files" option-label="FileName"
                  option-value="FileName" @change="selectFile"/>
    </div>
    <div>
        <Textarea v-model="text" :disabled="true" :autoResize="true" rows="10" cols="50"/>
        <Textarea v-model="result_text" :disabled="true" :autoResize="true" rows="10" cols="50"/>
    </div>
    <div>
        <span>{{ rowKey }}</span>
    </div>
    <div>
        <span>{{ colKey }}</span>
    </div>
</template>

<script>
import {GetFiles} from "@/api/common-api";
import {GetBlockEncrypt} from "@/api/lab5-api";

export default {
    name: "Lab5.vue",
    data() {
        return {
            text: "",
            result_text: "",
            selectedFile: "",
            files: [],
            selectedOption: null,
            options: [],
            rowKey: "",
            colKey: ""
        }
    },
    created() {
        GetFiles().then(val => {
            if (val.error == null) {
                this.files = val.files;
            }
        });

        this.options = [
            {option: true, label: "Закодировать текст"},
            {option: false, label: "Раскодировать текст текст"}
        ]
    },
    methods: {
        selectFile() {
            GetBlockEncrypt(this.selectedFile, this.selectedOption.option).then(value => {
                let res = value.data;

                this.text = res.text;
                this.result_text = res.result;
                this.rowKey = res.row_key;
                this.colKey = res.col_key;
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