import { shallowMount } from '@vue/test-utils'
import SpacexProgramsItem from '../../components/SpacexPrograms.item.vue'

describe('SpacexProgramsItem', () => {
  const spacexProgramMockData = {
    flight_number: 5,
    mission_name: 'RazakSat',
    mission_id: [],
    links: {},
    launch_year: '2002',
    land_success: 'true',
    launch_success: 'true',
  }
  const create = (propsData) => {
    return shallowMount(SpacexProgramsItem, {
      propsData,
      directives: {
        'lazy-load'() {},
      },
    })
  }
  test('must render spacex program details', () => {
    const wrapper = create({
      spacexProgram: spacexProgramMockData,
    })
    expect(wrapper.vm).toBeTruthy()
    const appSpacexProgramItem = wrapper.find('.app-spacex-program-item')
    expect(appSpacexProgramItem.find('img').attributes()).toBeTruthy()
    const appSpacexProgramDetails = wrapper
      .find('.app-spacex-program-details')
      .text()
    expect(appSpacexProgramDetails).toMatch(spacexProgramMockData.mission_name)
    expect(appSpacexProgramDetails).toMatch(spacexProgramMockData.launch_year)
    expect(appSpacexProgramDetails).toMatch(
      spacexProgramMockData.launch_success
    )
    expect(appSpacexProgramDetails).toMatch(spacexProgramMockData.land_success)
  })
})
