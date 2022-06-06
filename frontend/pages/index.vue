<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <p>
            Vuetify is a progressive Material Design component framework for
            Vue.js. It was designed to empower developers to create amazing
            applications.
          </p>
          <p>
            Thank you for developing with Vuetify and I look forward to bringing
            more exciting features in the future.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
          <v-spacer />
          <v-btn color="primary" @click="onCreateArticle"> Create Article </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { GET_ARTICLES, CREATE_ARTICLE } from '~/graphql';
export default {
  name: 'IndexPage',
  async fetch({ app }) {
    const client = app.apolloProvider.defaultClient
    const res = await client.query({
      query: GET_ARTICLES,
      variables: { page: 1, limit: 10 }
    })
    console.info(res.data)
  },
  methods: {
    async onCreateArticle() {
      const client = this.$nuxt.context.app.apolloProvider.defaultClient
      const res = await client.mutate({
        mutation: CREATE_ARTICLE,
        variables: { title: 'the news', content: 'the content' }
      })
      console.info(res.data)
    }
  }
}
</script>
