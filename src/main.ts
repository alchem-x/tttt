import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import AppWrapper from '@/AppWrapper.tsx'

function startApp() {
  const app = createApp({
    render() {
      return h(AppWrapper)
    },
  })
  app.use(createPinia())
  const divRef = document.createElement('div')
  document.body.appendChild(divRef)
  app.mount(divRef)
}

startApp()
