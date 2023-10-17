import { mount } from '@vue/test-utils'
import StartView from '../views/StartView.vue'
import { test, expect } from 'vitest'

test('初期表示', () => {
  const wrapper = mount(StartView, {
    props: {
      msg: 'ああああああああああ',
    },
  })

  expect(wrapper.text()).toContain('あああああああああ')
})