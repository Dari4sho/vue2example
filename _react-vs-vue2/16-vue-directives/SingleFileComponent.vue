<template>
  <button v-on:click="save()">Save</button>
  <button @click="save()">Save</button> <!-- e.g. @submit, @mouseover, @mouseenter, @click.ctrl.prevent, @keyup, @scroll, @drag, etc. -->

  <a v-bind:href="url">Jameda GmbH</a>
  <a :href="url">Jameda GmbH</a>

  <input v-model="url" /> <!-- v-bind:value="something" + v-on:input="something = $event.target.value" -->

  <p v-show="url.length > 0">
    Show via text if url
  </p>

  <p v-if="url.length > 0">
    Show conditional text if url
  </p>

  <p v-else-if="url.length > 100">
    Show conditional text if large url
  </p>

  <p v-else>
    Show fallback text
  </p>

  <div v-for="item in items">
    {{ item.number }}
  </div>

  <div v-for="(item, index) in items"></div>

  <div v-for="(value, name, index) in items"></div>

  <!-- v-slot, v-pre, v-once, v-memo (3.2+), v-cloak - full list: https://vuejs.org/api/built-in-directives.html#v-model -->

</template>

<script>
export default {
  data() {
    return {
      url: 'https://www.jameda.de/',
      items: [
        {number: 1},
        {number: 2},
        {number: 3},
      ],
    }
  },
  methods: {
    save() {
      console.log("save");
    },
  },
};
</script>