<template>
    <h1>LAB4</h1>
    <div>
        <SelectButton v-model="selectedOption" :options="options" optionLabel="label" @change="changeSelectOptions"
                      aria-labelledby="single"/>
        <Dropdown placeholder="Выберите файл" v-model="selectedFile" :options="files" option-label="FileName"
                  option-value="FileName" @change="selectFile"/>
    </div>
    <div>
        <Textarea v-model="text" :disabled="true" :autoResize="true" rows="10" cols="50"/>
    </div>
</template>

<script>
import {GetFiles} from "@/api/common-api";
import {GammaEncryption} from "@/api/lab4-api";

export default {
    name: "Lab4",
    data() {
        return {
            selectedFile: null,
            selectedOption: null,
            options: [],
            files: [],
            text: ""
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
            GammaEncryption(this.selectedFile, this.selectedOption.option).then(val => {
                let res = val.data;

                this.text = res.text;
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