<template>
  <div>
    <h2>posts No.{{ id }}</h2>
  </div>
</template>

<script>
export default {
  props: ['id'],
  created() {
    console.log('初回レンダリング')
  },
}
</script>

<style lang="scss" scoped></style>
