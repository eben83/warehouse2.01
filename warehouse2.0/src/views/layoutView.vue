<template>
  <div>
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar";
export default {
  name: "layoutView",
  components: {NavBar},
  data: () => ({}),
  beforeCreate() {
  },
  created() {
  },
  beforeMount() {
  },
  mounted() {
  },
  beforeUpdate() {
  },
  updated() {
  },
  methods: {},
  computed: {},
}
</script>

<style scoped>
</style>