import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

async function prepareApp() {
	const { worker } = await import('./mocks/browser')
	return worker.start()
}

const pinia = createPinia()
const app = createApp(App)

prepareApp().then(() => {
	app.use(pinia).mount('#app')
})
