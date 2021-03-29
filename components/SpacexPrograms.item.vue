<template>
  <div class="app-spacex-program-item card">
    <div class="image-container">
      <img
        v-lazy-load
        :data-src="spacexProgram.links.mission_patch_small"
        alt=""
        title=""
      />
    </div>
    <div class="app-spacex-program-details">
      <label class="program-name">
        {{ spacexProgram.mission_name }} #{{ spacexProgram.flight_number }}
      </label>
      <div><label>Mission Ids:</label> {{ missionIds }}<span></span></div>
      <div><label>Launch Year:</label> {{ spacexProgram.launch_year }}</div>
      <div>
        <label>Successful Launch:</label> {{ spacexProgram.launch_success }}
      </div>
      <div><label>Successful landing:</label></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SpacexProgramsItem',
  props: {
    spacexProgram: {
      type: Object,
      required: true,
    },
  },
  computed: {
    missionIds() {
      return this.spacexProgram.mission_id.join(',') || '--'
    },
  },
}
</script>
<style scoped>
.app-spacex-program-item {
  background: #fff;
  display: flex;
  padding: 10px;
  flex-direction: column;
}
.app-spacex-program-item img {
  background: #f2f2f2;
  width: 100%;
}
.program-name {
  color: #485393;
}
.app-spacex-program-details label {
  font-weight: bold;
}
</style>
