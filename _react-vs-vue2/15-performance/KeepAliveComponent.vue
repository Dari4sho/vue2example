<!-- https://vuejs.org/v2/api/#keep-alives -->

<template>
  <keep-alive>
    <component :is="view"></component>
  </keep-alive>
</template>

<script>
export default {
  data() {
    return { view: true };
  },
};
</script>