<template>
    <h1>LAB 8</h1>
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
</template>

<script>
import {GetFiles} from "@/api/common-api";
import {GetRsaEncrypt} from "@/api/lab8-api";

export default {
    name: "Lab8",
    data() {
        return {
            text: "",
            result_text: "",
            selectedFile: "",
            files: [],
            selectedOption: null,
            options: [],
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
            GetRsaEncrypt(this.selectedFile, this.selectedOption.option).then(value => {
                let res = value.data;

                this.text = res.text;
                this.result_text = res.result;
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