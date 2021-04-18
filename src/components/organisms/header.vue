<template>
  <v-app-bar app color="grey darken-4" dark class="text-center">
    <router-link to="/" exact>
      <h2>Rad Post</h2>
    </router-link>
    <v-spacer></v-spacer>
    <v-btn class="mx-2">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn
      class="mx-2 red--text text--accent-2"
      color="white"
      @click="$router.push({ path: 'login' })"
      >ログイン</v-btn
    >
    <v-btn
      class="mx-2"
      color="red accent-2"
      @click="$router.push({ path: 'signup' })"
      >新規登録</v-btn
    >
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped></style>
