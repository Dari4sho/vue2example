<template>
  <input ref="input" type="text" v-model="content" />
</template>

<script>
export default {
  name: "autofocus-input",
  data() {
    return { content: "" };
  },
  mounted() {
    this.$refs.input.focus();
  },
};
</script>