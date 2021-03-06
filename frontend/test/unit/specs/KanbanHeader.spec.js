import Vue from 'vue'
import KanbanHeader from '@/components/KanbanHeader'

describe('KanbanHeader.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(KanbanHeader)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h2').textContent)
      .to.equal('This is the header')
  })
})
