<template>
  <span v-once>This will never change: {{msg}}</span>
</template>

<script>
export default {
  data() {
    return { msg: "" };
  },
};
</script>