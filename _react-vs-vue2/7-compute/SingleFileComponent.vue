<template>
  <div>{{displayName}}</div>
</template>

<script>
export default {
  name: "display-name",
  props: {
    firstName: String,
    lastName: String,
  },
  computed: {
    displayName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  },
};
</script>


<!-- <DisplayName firstName="Hello" lastName="World" /> -->