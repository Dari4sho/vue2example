<!-- https://vuejs.org/v2/guide/render-function.html#Functional-Components -->

<template functional>
  <h1>Hello {{ name }}</h1>
</template>

<script>
export default {
  name: "MyVueComponent",
  props: {
    name: String,
  },
};
</script>