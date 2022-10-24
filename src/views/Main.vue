<template>
    <h1 class="m-2">Информационная безопасность</h1>
    <div class="flex justify-content-start m-2">
        <h2>Загрузка файла</h2>
        <FileUpload v-model="file" :custom-upload="true" @select="selectFile" class="m-1" mode="basic" accept=".txt"/>
        <Button class="m-1" label="Upload" @click="upload"/>
    </div>
    <Toast position="bottom-right"/>
</template>

<script>
import {UploadFile} from "@/api/common-api";

export default {
    name: "Main",
    data() {
        return {
            file: null,
        }
    },
    methods: {
        upload(event) {
            UploadFile(this.file).then(val => {
                if (val.status === 200) {
                    this.$toast.add({
                        severity: 'success',
                        summary: 'Успешно!',
                        detail: 'Файл загружен успешно!',
                        life: 3000
                    });
                }
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