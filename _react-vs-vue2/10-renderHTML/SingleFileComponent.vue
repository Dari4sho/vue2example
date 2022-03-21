<template>
  <div v-html="html"></div>
</template>

<script>
export default {
  data() {
    return {
      html: "<pre>...</pre>",
    };
  },
};
</script>