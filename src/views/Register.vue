<template>
  <AccountForm>
    <template v-slot:title><h2 class="text-center">新規登録</h2></template>

    <template v-slot:form>
      <v-text-field
        label="Email"
        placeholder="yokokura.tatsuya@gmail.com"
        type="email"
        outlined
      ></v-text-field>
      <v-text-field label="Password" type="password" outlined></v-text-field>
      <v-btn color="red accent-2" block large>登録</v-btn>
    </template>

    <template v-slot:link>
      <router-link
        :to="{ name: 'login' }"
        class="grey--text text--darken-1 text-center"
      >
        ログインはこちら
      </router-link>
    </template>
  </AccountForm>
</template>

<script>
import AccountForm from '@/components/layouts/AccountForm.vue'

export default {
  components: {
    AccountForm,
  },
  data: () => ({
    email: '',
    password: '',
  }),
}
</script>
