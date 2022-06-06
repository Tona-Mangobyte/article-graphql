<template>
  <v-card>
    <v-form @submit.prevent="onCreateArticle">
      <v-card-title>
        <div class="display-1">Create Article</div>
        <v-spacer />
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-text-field
              label="Title"
              v-model="form.title"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea
              label="Content"
              v-model="form.content"
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-btn type="submit" class="ma-2" color="primary" depressed>
        Create
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
import {CREATE_ARTICLE} from "~/graphql";

export default {
  name: "create",
  data() {
    return {
      form: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
        async onCreateArticle() {
          const client = this.$nuxt.context.app.apolloProvider.defaultClient
          const res = await client.mutate({
            mutation: CREATE_ARTICLE,
            variables: this.form
          })
          if (res.data) {
            console.info(res.data)
            await this.$router.back()
          }
        }
      }
    }
</script>

