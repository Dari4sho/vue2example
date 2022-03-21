<template>
  <div>
    <span>{{count}}</span>
    <button @click="increaseCount()">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return { count: 0 };
  },
  methods: {
    increaseCount() {
      this.count = this.count + 1;
    },
  },
  watch: {
    count: function (newCount, oldCount) {
      localStorage.setItem("my_count", newCount);
    },
  },
};
</script>