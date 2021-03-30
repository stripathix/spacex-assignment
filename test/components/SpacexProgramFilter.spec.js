import { shallowMount } from '@vue/test-utils'
import SpacexProgramFilter from '../../components/SpacexProgramFilter.vue'

describe('SpacexProgramFilter', () => {
  const filtersMockData = {
    launch_success: null,
    land_success: null,
    launch_year: null,
  }
  const create = (propsData) => {
    return shallowMount(SpacexProgramFilter, {
      propsData,
    })
  }
  test('must render all launch years filter', () => {
    const wrapper = create({
      filters: filtersMockData,
    })
    const launchYearFilters = wrapper.findAll('.app-launch-years button')
    expect(launchYearFilters.length).toBe(wrapper.vm.launchYears.length)
  })
  test('must emit set-filter-value when launch year filter is clicked', async () => {
    const wrapper = create({
      filters: filtersMockData,
    })
    const launchYearFilter = wrapper.find('.app-launch-years button')
    await launchYearFilter.trigger('click')
    expect(wrapper.emitted('set-filter-value')).toBeTruthy()
    expect(wrapper.emitted('set-filter-value')[0]).toEqual([
      {
        key: 'launch_year',
        value: 2006,
      },
    ])
  })
  test('must emit set-filter-value with null when active launch year filter is clicked', async () => {
    const wrapper = create({
      filters: { ...filtersMockData, launch_year: 2006 },
    })
    const launchYearFilter = wrapper.find('.app-launch-years button')
    await launchYearFilter.trigger('click')
    expect(wrapper.emitted('set-filter-value')).toBeTruthy()
    expect(wrapper.emitted('set-filter-value')[0]).toEqual([
      {
        key: 'launch_year',
        value: null,
      },
    ])
  })
  test('must emit set-filter-value when launch success filter is clicked', async () => {
    const wrapper = create({
      filters: filtersMockData,
    })
    const launchYearFilter = wrapper.find('.app-launch-years button')
    await launchYearFilter.trigger('click')
    expect(wrapper.emitted('set-filter-value')).toBeTruthy()
    expect(wrapper.emitted('set-filter-value')[0]).toEqual([
      {
        key: 'launch_year',
        value: 2006,
      },
    ])
  })
})
