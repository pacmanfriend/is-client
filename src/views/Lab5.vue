<template>
    <h1>LAB 5</h1>
    <div>
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
    name: "Lab5.vue",
    data() {
        return {
            text: "",
            selectedFile: "",
            files: []
        }
    },
    created() {
        GetFiles().then(val => {
            if (val.error == null) {
                this.files = val.files;
            }
        });
    },
    methods: {
        selectFile() {
            GammaEncryption(this.selectedFile, this.selectedOption.option).then(val => {
                let res = val.data;

                this.text = res.text;
            });
        },
    }
}
</script>

<style scoped>

</style>