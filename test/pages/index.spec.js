import { shallowMount } from '@vue/test-utils'
import DashboardPage from '../../pages/index.vue'
import SpacexProgramFilter from '../../components/SpacexProgramFilter.vue'
import SpacexPrograms from '../../components/SpacexPrograms.vue'

describe('DashboardPage', () => {
  const $route = {
    query: {
      launch_year: 2006,
      launch_success: true,
      land_success: true,
    },
    fullPath: 'full/path',
  }
  const create = (propsData) => {
    return shallowMount(DashboardPage, {
      propsData,
      mocks: {
        $route,
        $router: {
          push: () => {},
        },
      },
    })
  }
  test('must use SpacexProgramFilter with passed filter attributes', () => {
    const wrapper = create({})
    expect(wrapper.vm).toBeTruthy()
    const componentSpacexProgramFilter = wrapper.findComponent(
      SpacexProgramFilter
    )
    expect(componentSpacexProgramFilter).toBeTruthy()
    expect(componentSpacexProgramFilter.attributes().filters).toBeTruthy()
  })
  test('must use update query params with set-filter-value is emitted on SpacexProgramFilter', () => {
    const wrapper = create({})
    expect(wrapper.vm).toBeTruthy()
    const componentSpacexProgramFilter = wrapper.findComponent(
      SpacexProgramFilter
    )
    componentSpacexProgramFilter.vm.$emit('set-filter-value', {
      key: 'launch_success',
      value: true,
    })
    expect(componentSpacexProgramFilter.vm).toBeTruthy()
  })
  test('must use SpacexPrograms to render programs', () => {
    const wrapper = create({})
    expect(wrapper.vm).toBeTruthy()
    const componentSpacexPrograms = wrapper.findComponent(SpacexPrograms)
    expect(componentSpacexPrograms).toBeTruthy()
  })
})
