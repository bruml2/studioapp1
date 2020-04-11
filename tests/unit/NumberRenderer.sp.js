import { mount } from "@vue/test-utils"
import NumberRenderer from "@/components/NumberRenderer.vue"

describe("NumberRenderer", () => {
  it("renders even numbers", () => {
    const wrapper = mount(NumberRenderer, {
      propsData: {
        even: true
      }
    })
    console.log(wrapper.html())
    expect(wrapper.text()).toBe("2, 4, 6, 8")
  })

  // without even mounting!
  it("renders odd numbers", () => {
    const localThis = { even: false }
    // vue binds this to props on mount; here must provide value to this with call;
    expect(NumberRenderer.computed.numbers.call(localThis)).toBe("1, 3, 5, 7, 9")
  })
})
