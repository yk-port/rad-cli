<template>
  <v-container class="mx-auto my-16">
    <v-card max-width="640" outlined class="mx-auto pa-14">
      <div class="mb-8">
        <slot name="title" />
      </div>
      <div class="px-8">
        <slot name="form" />
      </div>
      <div class="text-center mt-4 caption">
        <slot name="link" />
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
