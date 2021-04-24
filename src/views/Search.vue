<template>
  <v-container class="py-14">
    <v-row no-gutters class="mb-10">
      <v-col cols="12">
        <v-text-field
          outlined
          label="Append"
          append-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
    </v-row>

    <h2 class="mb-4">ハッシュタグ</h2>
    <v-row class="mb-10">
      <div class="d-flex flex-wrap">
        <v-chip v-for="n in 15" :key="n" outlined link class="ma-2">
          #{{ n }}タグイベント
        </v-chip>
      </div>
    </v-row>

    <h2 class="mb-4">カテゴリー</h2>
    <v-row class="mb-10">
      <v-col v-for="n in 10" :key="n" cols="6" sm="4" md="3" lg="2">
        <v-card height="135">
          <v-card-action>
            <v-btn
              text
              block
              height="100%"
              @click="
                $router.push({
                  name: 'category-index',
                  params: { category: n },
                })
              "
            >
              #{{ n }}カテゴリー
            </v-btn>
          </v-card-action>
        </v-card>
      </v-col>
    </v-row>

    <h2 class="mb-4">エリア</h2>
    <v-row class="mb-10"></v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
