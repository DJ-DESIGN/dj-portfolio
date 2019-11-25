<template>
  <div>
    <header class="container-fluid dj-page-header">
      <h1 class="pt-5">PORTFOLIO</h1>
    </header>
    <section class="container-fluid dj-page-section pb-5">
      <b-row>
        <b-col>
          <h3 class="tag-title">All Projects ({{ posts.length }})</h3>
        </b-col>
      </b-row>
      <b-row class="pr-2 pl-2">
        <b-col v-for="(post, index) in posts" :key="index" md="3" class="item">
          <article-preview :post="post" />
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import ArticlePreview from '~/components/article-preview.vue'

const client = createClient()

export default {
  components: {
    ArticlePreview
  },
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_PROJECT_TYPE_ID,
      order: '-sys.createdAt'
    }).then((entries) => {
      return {
        posts: entries.items
      }
    })
  }
}
</script>

<style lang="scss">

</style>
