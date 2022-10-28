<template>
    <h1>LAB3</h1>
    <div>
        <Dropdown placeholder="Выберите файл" v-model="selectedFile" :options="files" option-label="FileName"
                  option-value="FileName" @change="selectFile"/>
    </div>
    <div>
        <Textarea v-model="text" :disabled="true" :autoResize="true" rows="10" cols="50"/>
    </div>
    <div>
        {{ result }}
    </div>
    <div>
        {{ bites }}
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
            result: 0,
            bites: 0,
            text: ""
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
            ArithmeticEncoding(this.selectedFile).then(val => {
                let res = val.data;
                this.result = res.result;
                this.text = res.text;
                this.bites = res.bites;
            });
        }
    }
}
</script>

<style scoped>

</style>