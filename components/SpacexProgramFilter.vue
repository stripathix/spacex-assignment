<template>
  <div class="app-spacex-program-filter">
    <h5>
      <strong>Filters</strong>
    </h5>
    <div class="text-center">Launch Year</div>
    <hr />
    <div class="filters">
      <button
        v-for="launchYear in launchYears"
        :key="launchYear"
        type="button"
        :class="filters.launch_year === launchYear ? 'active' : ''"
        @click="
          onSetFilterValue({
            key: 'launch_year',
            value: launchYear,
          })
        "
      >
        {{ launchYear }}
      </button>
    </div>
    <div class="text-center">Successful Launch</div>
    <hr />
    <div class="filters">
      <button
        type="button"
        :class="filters.launch_success === true ? 'active' : ''"
        @click="
          onSetFilterValue({
            key: 'launch_success',
            value: true,
          })
        "
      >
        True
      </button>
      <button
        type="button"
        :class="filters.launch_success === false ? 'active' : ''"
        @click="
          onSetFilterValue({
            key: 'launch_success',
            value: false,
          })
        "
      >
        False
      </button>
    </div>
    <div class="text-center">Successful Landing</div>
    <hr />
    <div class="filters">
      <button
        type="button"
        :class="filters.land_success === true ? 'active' : ''"
        @click="
          onSetFilterValue({
            key: 'land_success',
            value: true,
          })
        "
      >
        True
      </button>
      <button
        type="button"
        :class="filters.land_success === false ? 'active' : ''"
        @click="onSetFilterValue({ key: 'land_success', value: false })"
      >
        False
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppSpacexProgramFilter',
  props: {
    filters: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      launchYears: [...Array(15)].map((_, i) => {
        return 2006 + i
      }),
    }
  },
  methods: {
    onSetFilterValue(data) {
      if (this.filters[data.key] === data.value) {
        data.value = null
      }
      this.$emit('set-filter-value', data)
    },
  },
}
</script>
<style scoped>
hr {
  margin-top: 4px;
  margin-bottom: 8px;
}
.text-center {
  text-align: center;
}
.app-spacex-program-filter {
  padding: 10px;
  background: #fff;
  height: fit-content;
  width: 170px;
}
.app-spacex-program-filter > h5 {
  margin-bottom: 10px;
}
.app-spacex-program-filter .filters {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 10px;
  grid-column-gap: 25px;
  margin-bottom: 10px;
}
.app-spacex-program-filter .filters button {
  background: #c5e09b;
  padding: 3px 10px;
  border: none;
  border-radius: 4px;
}
.app-spacex-program-filter .filters button:focus {
  outline: none;
}
.app-spacex-program-filter .filters button.active {
  background: #7aba03;
}
</style>
