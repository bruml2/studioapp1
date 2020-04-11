// April 9
// this test file does NOT use localVue;
// as stated in https://vuetifyjs.com/en/getting-started/unit-testing/;
import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)
// shallowMount stubs out any child components; here TimeAxisView (tested separately);
import { shallowMount } from '@vue/test-utils'
import TitleTimeAxisTab from "@/components/TitleTimeAxisTab.vue"

const shallowMountFn = function () {
  // let vuetify = new Vuetify()
  const wrapper = shallowMount(TitleTimeAxisTab, {
    // vuetify,
    propsData: {
      tl: {}
      // tl: { title: "Test Title", startYear: 1900, stopYear: 2000, tickInterval: 20 }
    }
  })
  return wrapper;
}

describe('TitleTimeAxisTab.vue', () => {
  /*
  it('should match previous snapshot', () => {
    const wrapper = shallowMountFn()
    expect(wrapper.html()).toMatchSnapshot()
  })
  */

  it('should have h1 text', () => {
    const wrapper = shallowMountFn({})
    expect(wrapper.find('h1').text()).toBe('Title/subtitle and Time Axis')
  })

  it('should have empty text input for Title', () => {
    const wrapper = shallowMountFn({})
    const titleinput = wrapper.find('[data-j="title"]')
    // begins empty;
    expect(titleinput.text()).toMatch('')
  })

  it('input value should appear in v-model data', () => {
    const wrapper = shallowMountFn({})
    // const titleinput = wrapper.find('[data-testtitle]')
    // titleinput.setValue('Title For Test')
    wrapper.find('[data-j="title"]').setValue('Title For Test')
    expect(wrapper.vm.title).toBe('Title For Test')
  })

})
  /*
  it('should emit an event when the action v-btn is clicked', () => {
    const wrapper = shallowMountFn({propsData: { title: 'Foobar' } })
    const event = jest.fn()
    const button = wrapper.find('.v-btn')
    // Here we bind a listener to the wrapper
    // instance to catch our custom event
    // https://vuejs.org/v2/api/#Instance-Methods-Events
    wrapper.vm.$on('action-btn:clicked', event)

    expect(event).toHaveBeenCalledTimes(0)

    // Simulate a click on the button
    button.trigger('click')

    // Ensure that our mock event was called
    expect(event).toHaveBeenCalledTimes(1)
  })
})
*/
/*
describe('TitleTimeAxisTab.vue', () => {
  let vuetify

  // more stuff

  it('renders props.msg when passed', () => {
    const tl = { title: "Test Title", startYear: 1900, stopYear: 2000 }
    const wrapper = shallowMount(TitleTimeAxisTab, {
      propsData: { tl }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
*/
/* import TimeAxisView from "../../../studioTimelineView/src/components/TimeAxisView.vue"
*/
