import { shallowMount } from '@vue/test-utils'
import SpacexPropgramsItem from '../../components/SpacexPrograms.item.vue'
import SpacexPrograms from '../../components/SpacexPrograms.vue'

describe('SpacexPrograms', () => {
  const spacexProgramsMockData = [
    {
      flight_number: 5,
      mission_name: 'RazakSat',
    },
  ]
  const create = (propsData) => {
    return shallowMount(SpacexPrograms, {
      propsData,
    })
  }
  test('must render just fine', () => {
    const wrapper = create({
      spacexPrograms: spacexProgramsMockData,
    })
    expect(wrapper.vm).toBeTruthy()
  })
  test('must use SpacexPropgramsItem component and pass required props', () => {
    const wrapper = create({
      spacexPrograms: spacexProgramsMockData,
    })
    const componentSpacexPropgramsItem = wrapper.findComponent(
      SpacexPropgramsItem
    )
    expect(componentSpacexPropgramsItem).toBeTruthy()
    expect(componentSpacexPropgramsItem.attributes().spacexprogram).toBeTruthy()
  })
  test('must render message if no spacexprograms available', () => {
    const wrapper = create({
      spacexPrograms: [],
    })
    const messageEle = wrapper.find(
      '.app-spacex-programs div.app-no-data-found-message'
    )
    const componentSpacexPropgramsItem = wrapper.findComponent(
      SpacexPropgramsItem
    )
    expect(componentSpacexPropgramsItem.element).toBeFalsy()
    expect(messageEle).toBeTruthy()
    expect(messageEle.text()).toBe('No Programs found')
  })
})
