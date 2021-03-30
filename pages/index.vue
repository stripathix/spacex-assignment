<template>
  <div class="app-launch-screen">
    <h4 class="app-heading">Spacex Launch Programs</h4>
    <div class="app-launch-content">
      <spacex-program-filter
        :filters="filters"
        @set-filter-value="onSetFilterValue"
      />
      <div class="app-launch-program-container">
        <spacex-programs :spacex-programs="spacexProgramsData" />
      </div>
    </div>
    <div class="app-footer">
      <strong>Developed by:</strong> Shashwat Tripathi
    </div>
  </div>
</template>

<script>
import SpacexProgramFilter from '../components/SpacexProgramFilter.vue'
import SpacexPrograms from '../components/SpacexPrograms.vue'

export default {
  name: 'AppDashboardPage',
  components: {
    SpacexProgramFilter,
    SpacexPrograms,
  },
  data() {
    return {
      filters: {
        launch_success: null,
        land_success: null,
        launch_year: null,
      },
      spacexProgramsData: null,
    }
  },
  async fetch() {
    const queryString = Object.keys(this.$route.query)
      .filter((key) => this.$route.query[key])
      .map((key) => key + '=' + this.$route.query[key])
      .join('&')
    const apiURL = `https://api.spacexdata.com/v3/launches?limit=100&${queryString}`
    this.spacexProgramsData = await fetch(apiURL).then((res) => res.json())
  },
  watch: {
    '$route.query': '$fetch',
  },
  mounted() {
    this.initializeFilters()
  },
  methods: {
    initializeFilters() {
      if (this.$route.query.launch_year) {
        this.filters.launch_year = Number(this.$route.query.launch_year)
      }
      if (this.$route.query.launch_success) {
        this.filters.launch_success =
          this.$route.query.launch_success === 'true'
      }
      if (this.$route.query.land_success) {
        this.filters.land_success = this.$route.query.land_success === 'true'
      }
    },
    updateQueryParams() {
      this.$router.push({
        path: this.$route.path,
        query: { ...this.filters },
      })
    },
    onSetFilterValue({ key, value }) {
      this.filters[key] = value
      this.updateQueryParams()
    },
  },
}
</script>
<style scoped>
.app-launch-content {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 50px;
}
@media only screen and (min-width: 1440px) {
  .app-launch-screen {
    max-width: 1440px;
    margin: auto;
  }
}
@media only screen and (max-width: 700px) {
  .app-launch-content {
    grid-template-columns: 1fr;
  }
  .app-spacex-program-filter {
    width: auto;
  }
}
</style>
