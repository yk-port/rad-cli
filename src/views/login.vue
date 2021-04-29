<template>
  <AccountForm>
    <template v-slot:title><h2 class="text-center">ログイン</h2></template>

    <template v-slot:form>
      <v-text-field
        label="Email"
        placeholder="yokokura.tatsuya@gmail.com"
        type="email"
        v-model="email"
        outlined
      ></v-text-field>
      <v-text-field
        label="Password"
        type="password"
        outlined
        v-model="password"
      ></v-text-field>
      <div class="caption text-right mb-8">
        <router-link
          :to="{ name: 'forget-password' }"
          class="grey--text text--darken-1 text-center"
        >
          パスワードを忘れた
        </router-link>
      </div>
      <v-btn color="red accent-2" block large @click="login()">ログイン</v-btn>
    </template>

    <template v-slot:link>
      <router-link
        :to="{ name: 'register' }"
        class="grey--text text--darken-1 text-center"
      >
        新規登録はこちら
      </router-link>
    </template>
  </AccountForm>
</template>

<script>
import AccountForm from '@/components/layouts/AccountForm.vue'
import axios from '@/api/axios-auth.js'

export default {
  components: {
    AccountForm,
  },

  data: () => ({
    email: '',
    password: '',
  }),

  methods: {
    login() {
      axios
        .post(
          '/accounts:signInWithPassword?key=AIzaSyAgAHss_S5xeI37DStGTysgzCXWGjoEtlc',
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          console.log(response)
        })
    },
  },
}
</script>
