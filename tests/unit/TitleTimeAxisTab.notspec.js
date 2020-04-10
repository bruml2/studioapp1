import Vue from 'vue'
import Vuetify from 'vuetify'
// shallowMount stubs out any child components; here TimeAxisView (tested separately);
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TitleTimeAxisTab from '@/components/TitleTimeAxisTab.vue'

const localVue = createLocalVue()
const tl = { title: "Test Title", startYear: 1900, stopYear: 2000 }

describe('TitleTimeAxisTab.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should have a custom title and match snapshot', () => {
    const wrapper = shallowMount(TitleTimeAxisTab, {
      localVue,
      vuetify,
      propsData: {
        tl: { title: "Test Title", startYear: 1900, stopYear: 2000 },
      },
    })

    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot()

    // We could also verify this differently
    // by checking the text content
    const title = wrapper.find('h1')

    expect(title.text()).toBe('Foobar')
  })

  it('should emit an event when the action v-btn is clicked', () => {
    const wrapper = shallowMount(TitleTimeAxisTab, {
      localVue,
      vuetify,
      propsData: {
        title: 'Foobar',
      },
    })

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
// import TimeAxisView from "../../../studioTimelineView/src/components/TimeAxisView.vue"
