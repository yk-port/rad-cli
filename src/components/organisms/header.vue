<template>
  <v-app-bar app color="grey darken-4" dark class="text-center">
    <router-link to="/" exact>
      <h2>Rad Post</h2>
    </router-link>
    <v-spacer></v-spacer>
    <template v-if="isAuthenticated">
      <v-btn text>
        <v-icon @click="$router.push({ name: 'search' })">mdi-magnify</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon @click="$router.push({ name: 'mypage' })"
          >mdi-account-circle</v-icon
        >
      </v-btn>
      <v-btn
        class="mx-2"
        color="red accent-2"
        @click="$router.push({ name: 'posts-new' })"
        >ポストする</v-btn
      >
    </template>
    <template v-else>
      <v-btn class="mx-2" text>
        <v-icon @click="$router.push({ name: 'search' })">mdi-magnify</v-icon>
      </v-btn>
      <v-btn
        class="mx-2 red--text text--accent-2"
        color="white"
        @click="$router.push({ name: 'login' })"
        >ログイン</v-btn
      >
      <v-btn
        class="mx-2"
        color="red accent-2"
        @click="$router.push({ name: 'register' })"
        >新規登録</v-btn
      >
    </template>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.getIdToken !== null
    },
  },
}
</script>

<style lang="scss" scoped></style>
