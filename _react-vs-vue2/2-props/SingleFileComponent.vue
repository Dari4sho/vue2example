<template>
  <h1>Hello {{ name }}</h1>
</template>
<script>
export default {
  name: "MyVueComponent",
  props: {
    name: {
      type: String,
      required: true,
    },
    mark: {
      type: String,
      default: "!",
    },
  },
};
</script>


<!-- <MyVueComponent name="World" /> -->