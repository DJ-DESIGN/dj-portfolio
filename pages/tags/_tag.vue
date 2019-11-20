<template>
  <div>
    <header class="container-fluid dj-page-header pt-5">
      <h2 class="pt-5">#{{ tag }}</h2>
    </header>
    <section class="container-fluid dj-page-section pb-5">
      <b-row>
        <h3 class="tag-title">All work tagged with #{{ tag }} ({{ posts.length }})</h3>
      </b-row>
      <b-row class="items-list wrapper pr-2 pl-2">
        <b-col
          v-for="(post, index) in posts"
          :key="index"
          class="item"
          md="3"
        >
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
      'fields.tags[in]': params.tag,
      order: '-sys.createdAt'
    }).then((entries) => {
      return {
        posts: entries.items,
        tag: params.tag
      }
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
