import { defineComponent } from 'vue'
import App from '@/App.jsx'
import { NConfigProvider } from 'naive-ui'
import themeOverrides from '@/common/naive-ui-theme-overrides.json'

export default defineComponent({
  render() {
    return (
      <NConfigProvider themeOverrides={themeOverrides}>
        <App />
      </NConfigProvider>
    )
  },
})
