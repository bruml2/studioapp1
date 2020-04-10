import { shallowMount } from '@vue/test-utils'
import TabUI from '@/components/TabUI.vue'

describe('TabUI.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(TabUI, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
