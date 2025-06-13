import { NSelect } from 'naive-ui'
import { defineComponent, watch } from 'vue'
import { useT4Store } from '@/store/t4.ts'

export default defineComponent({
  setup() {
    const t4Store = useT4Store()
    watch(() => t4Store.languageList, t4Store.fetchTranslation)
    return { t4Store }
  },
  render({ t4Store }) {
    return (
      <div>
        <NSelect
          vModel:value={t4Store.languageList}
          options={t4Store.languageOptions}
          multiple
          clearable
          filterable
          placeholder="Select languages"
        />
      </div>
    )
  },
})
