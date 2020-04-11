//  April 9
// this test file uses localVue;
// error message: [Vuetify] Multiple instances of Vue detected;
// error messages "Unknown custom element" for each Vuetify component;
// tests pass;
import Vuetify from 'vuetify'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TitleTimeAxisTab from '@/components/TitleTimeAxisTab.vue'

describe('TitleTimeAxisTab.vue', () => {
  let localVue

  const shallowMountFn = () => {
    localVue = createLocalVue()
    localVue.use(Vuetify)
    const wrapper = shallowMount(TitleTimeAxisTab, {
      localVue,
      propsData: {
        tl: { title: "Test Title", startYear: 1900, stopYear: 2000, tickInterval: 20 }
      }
    })
    return wrapper;
  }

  it('should match previous snapshot', () => {
    const wrapper = shallowMountFn()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have h1 text', () => {
    const wrapper = shallowMountFn({})
    expect(wrapper.find('h1').text()).toBe('Title/subtitle and Time Axis')
  })
})
