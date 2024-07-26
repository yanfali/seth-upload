import Aura from '@primevue/themes/aura'
import FileUpload from 'primevue/fileupload'
import Button from 'primevue/button'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.component('Button', Button)
app.component('FileUpload', FileUpload)
app.mount('#app')
