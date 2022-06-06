<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title>
          <div class="display-1">Article List</div>
          <v-spacer />
          <v-btn
            to="/create"
            class="mx-2"
            fab
            small
            dark
            color="indigo"
          >
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="records"
          :server-items-length="pagination.total"
          :items-per-page.sync="limit"
          :options.sync="options"
          :footer-props="{
        itemsPerPageOptions: [10, 30, 50, 100, -1],
      }"
          loading-text="Loading..."
          class="v-data-table elevation-1"
        >
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { GET_ARTICLES, CREATE_ARTICLE } from '~/graphql';
export default {
  name: 'IndexPage',
  data() {
    return {
      limit: 10,
      records: [],
      pagination: { page: 1, limit: 10 },
      options: {},
      headers: [
        { text: 'Id', value: 'id', sortable: false },
        { text: 'Title', value: 'title', sortable: false },
      ]
    }
  },
  async mounted() {
    const client = this.$nuxt.context.app.apolloProvider.defaultClient
    const res = await client.query({
      query: GET_ARTICLES,
      variables: { page: 1, limit: 10 }
    })
    this.records = res.data.getAllArticles.items
    this.pagination = res.data.getAllArticles.pagination
  },
}
</script>
