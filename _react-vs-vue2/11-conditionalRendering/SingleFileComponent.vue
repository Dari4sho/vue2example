<template>
  <div>
    <!--v-show: always render but change css base on the condition-->
    <span v-show="loading">Loading...</span>
    <div>
      <div v-if="loading">is loading</div>
      <div v-else>is loaded</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { loading: true };
  },
};
</script>