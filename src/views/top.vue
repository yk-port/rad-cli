<template>
  <v-row no-gutters>
    <v-col v-for="n in 6" :key="n" class="d-flex child-flex" cols="4">
      <v-img
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        @click="$router.push({ name: 'posts-detail', params: { id: n } })"
        aspect-ratio="1.7778"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Top',
}
</script>
