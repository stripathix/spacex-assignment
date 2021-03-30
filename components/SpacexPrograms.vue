<template>
  <div class="app-spacex-programs">
    <div v-if="!spacexPrograms.length" class="app-no-data-found-message">
      No Programs found
    </div>
    <spacex-propgrams-item
      v-for="program in spacexPrograms"
      v-else
      :key="program.flight_number"
      :spacex-program="program"
    />
  </div>
</template>
<script>
import SpacexPropgramsItem from './SpacexPrograms.item.vue'

export default {
  components: {
    SpacexPropgramsItem,
  },
  props: {
    spacexPrograms: {
      type: Array,
      default: null,
    },
  },
}
</script>
<style scoped>
.app-spacex-programs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}
@media only screen and (max-width: 700px) {
  .app-spacex-programs {
    grid-template-columns: 1fr;
  }
}
@media only screen and (min-width: 700px) and (max-width: 1024px) {
  .app-spacex-programs {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
