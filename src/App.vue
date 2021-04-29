<template>
  <v-app>
    <Header />
    <v-main class="blue-grey lighten-5">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/organisms/Header.vue'

export default {
  components: {
    Header,
  },
}
</script>

<style lang="scss">
a {
  color: white !important;
  text-decoration: none;
}
</style>
