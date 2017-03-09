import Vue from 'vue'
import TeamDetail from 'src/components/TeamDetail.vue'

const testTeam = {
  id: 'celtic',
  name: 'Celtic',
  stadium: {
    name: 'Celtic Park',
    postcode: 'G40 3RE',
    capacity: '60,411'
  }
}

// helper function that mounts and returns the rendered text
function getVm (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm
}

describe('TeamDetail.vue', () => {
  it('should render correct contents', () => {
    expect(getVm(TeamDetail, {team: testTeam, closeHandler: () => {}}).$el.querySelector('form').childElementCount)
      .to.equal(6)
  })
})

describe('TeamDetail.vue', () => {
  it('has the correct closeHandler prop', () => {
    const closeHandler = function () {
    }
    expect(getVm(TeamDetail, {team: testTeam, closeHandler: closeHandler})
      .closeHandler).to.equal(closeHandler)
  })
})
