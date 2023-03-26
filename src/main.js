import "./assets/scss/index.scss";
import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/shared'
import router from './router';

const app = createApp(App);

components.forEach(component => app.component(component.name, component))

app
  .use(router)
  .mount('#app')

// =================================
// import { createApp } from 'vue'
// import App from './App.vue'
// import "./assets/scss/index.scss";

// createApp(App).mount('#app')