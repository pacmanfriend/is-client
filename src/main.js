import {createApp} from 'vue';
import {createPinia} from 'pinia';
import PrimeVue from "primevue/config";
import ToastService from 'primevue/toastservice';

import App from './App.vue';
import router from './router';

import './assets/main.css';
import "primevue/resources/themes/arya-orange/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import FileUpload from "primevue/fileupload";
import Button from "primevue/button";
import Textarea from 'primevue/textarea';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Row from "primevue/row";
import Dropdown from 'primevue/dropdown';
import Toast from 'primevue/toast';
import SelectButton from "primevue/selectbutton";

const app = createApp(App);
app.component("FileUpload", FileUpload);
app.component("Button", Button);
app.component("Textarea", Textarea);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("Row", Row);
app.component("Dropdown", Dropdown);
app.component("Toast", Toast);
app.component("SelectButton", SelectButton)

app.use(createPinia());
app.use(PrimeVue);
app.use(ToastService);
app.use(router);

app.mount('#app');
