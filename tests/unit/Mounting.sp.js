import Vue from "vue"
import { mount, shallowMount } from '@vue/test-utils'

const Child = Vue.component("Child", {
  name: "Child",

  template: "<div>Child component</div>"
})

const Parent = Vue.component("Parent", {
  name: "Parent",

  template: "<div><child /></div>"
})

let shallowWrapper = shallowMount(Child)
let mountWrapper = mount(Child)

console.log(shallowWrapper.html())
console.log(mountWrapper.html())

shallowWrapper = shallowMount(Parent)
mountWrapper = mount(Parent)

console.log(shallowWrapper.html())
console.log(mountWrapper.html())

test('dummy', () => {
  expect(1).toBe(1)
})
