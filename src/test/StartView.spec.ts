import { test, expect, describe, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useQuizeDataStore } from '../store/QuizeData'
import StartView from '../views/StartView.vue'

const pinia = { //mount先のコンポーネントにこの設定を適用させないとerrorでる
  global: {
    plugins: [createTestingPinia()]
  }, 
  props: {
  }
}

describe('StartView Test', () => {
  it('Should render あああああああああああ', () => {
    const wrapper = mount(StartView, { pinia, props: { //ここでpiniaが適用される
    }})
    expect(wrapper.text()).toContain('ああああああああああああ')
  })

  it('Should be QuizeData exist', () => {
    const QuizeDataStore = useQuizeDataStore()
    QuizeDataStore.QuizeFetch
    expect(QuizeDataStore.QuizeData.que).toEqual("")
  })
})
