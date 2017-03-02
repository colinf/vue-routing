import Vue from 'vue'
import FormGroup from 'src/components/FormGroup.vue'

// helper function that mounts and returns the rendered text
function getVm (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm
}

describe('FormGroup.vue', () => {
  it('should render correct contents', () => {
    expect(getVm(FormGroup).$el.childElementCount)
      .to.equal(2)
  })
})

describe('FormGroup.vue', () => {
  it('renders the correct label and input', () => {
    const el = getVm(FormGroup, {
      id: 'testId',
      label: 'testLabel',
      value: 'testValue'
    }).$el
    expect(el.querySelector('label')).to.have.attr('for', 'testId')
    expect(el.querySelector('label')).to.have.text('testLabel')
    expect(el.querySelector('input')).to.have.id('testId')
    expect(el.querySelector('input')).to.have.value('testValue')
  })
})
