<template>
  <div>
    <header class="container-fluid dj-bg">
      <b-row>
        <b-col md="2"></b-col>
        <b-col md="8" class="p-5">
          <div class="dj-logo-hero text-center">
              <h1>BIO</h1>
            <h4 class="pt-4">{{ portfolio.fields.djAbout }}</h4>
          </div>
        </b-col>
        <b-col md="2"></b-col>
      </b-row>
    </header>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  asyncData ({ env }) {
    return Promise.all([
      // fetch the owner of the blog
      client.getEntries({
        'content_type': env.CTF_PORTFOLIO_TYPE_ID
      }),
      // fetch all blog posts sorted by creation date
      client.getEntries({
        'content_type': env.CTF_PROJECT_TYPE_ID,
        'fields.tags[all]': 'feature'
      })
    ]).then(([entries, posts]) => {
      // return data that should be available
      // in the template
      return {
        portfolio: entries.items[0],
        posts: posts.items
      }
    }).catch(console.error)
  }
}
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 300ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
