<template>
  <v-container fluid ma-0 pa-0>
    <v-row no-gutters class="mb-16">
      <v-img
        src="https://picsum.photos/510/300?random"
        width="100%"
        height="300"
      >
        <div class="d-flex justify-center align-center fill-height">
          <h2>カテゴリー#{{ category }}</h2>
        </div>
      </v-img>
    </v-row>

    <v-container style="max-width: 780px">
      <v-row>
        <v-col v-for="n in 10" :key="n" cols="6">
          <v-card class="mx-auto" max-width="360">
            <v-card-action @click="$router.push({ name: 'posts' })">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                :aspect-ratio="16 / 9"
              ></v-img>
              <v-card-title> Top western road trips </v-card-title>
              <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
            </v-card-action>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  props: ['category'],
}
</script>

<style lang="scss" scoped></style>
