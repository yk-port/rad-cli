<template>
  <v-app>
    <Header />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/organisms/header.vue'
export default {
  name: 'App',

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
