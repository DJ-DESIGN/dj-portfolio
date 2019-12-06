<template>
  <div class="dj-bg-white">
    <header class="container-fluid dj-page-header pt-5">
      <h1 class="pt-5">{{ post.fields.client }}</h1>
    </header>
    <section class="container">
      <!-- First Image -->
      <b-row>
        <b-col>
          <img
              :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=00'"
              :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=87&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=650&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=1000&fit=fill 2000w`"
              size="100vw"
              :alt="post.fields.heroImage.fields.description"
              style="max-width:100%; padding-top: 2vh;"
            >
        </b-col>
      </b-row>
      <!-- First Row Description -->
      <b-row>
        <b-col md="2"></b-col>
        <b-col md="8">
          <div class="project-description">
            <!--<time class="tiny">{{ ( new Date(post.fields.publishDate)).toDateString() }}</time>-->
            <div class="title">Client:</div>
            <h4>{{ post.fields.client }}</h4>
            <div class="title">Industry:</div>
            <h5>{{ post.fields.industry }}</h5>
            <div class="title">Company Description:</div>
            <p>{{post.fields.description }}</p>
            <div class="title">Role:</div>
            <vue-markdown>{{ post.fields.role }}</vue-markdown>
            <div class="title">Tools Used:</div>
            <vue-markdown>{{ post.fields.tools }}</vue-markdown>
            <div class="title">Project Summary:</div>
            <vue-markdown>{{ post.fields.projectSummary }}</vue-markdown>
          </div>
        </b-col>
        <b-col md="2"></b-col>
      </b-row>
      <!-- Row 2 -->
      <b-row class="p-2">
        <b-col class="p-2 mx-auto presentation-imgs">
          <!-- Third Client Image -->
          <div>
            <img
              :src="post.fields.imageTwo.fields.file.url"
              class="modal-image"
              fluid
            >
          </div>
          <div>
            <img
              :src="post.fields.imageThree.fields.file.url"
              class="modal-image"
              fluid
            >
          </div>
          <div>
            <img
              :src="post.fields.imageFour.fields.file.url"
              class="modal-image"
              fluid
            >
          </div>
          <div>
            <img
              :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
              :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=87&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=650&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=1000&fit=fill 2000w`"
              size="100vw"
              :alt="post.fields.heroImage.fields.description"
              style="max-width:100%; padding-top: 2vh;"
            >
          </div>
          <!-- Second Image START-->
          <div>
            <img
              :src="post.fields.imageOne.fields.file.url"
              class="image-one"
              fluid
            >
          </div>
          <!-- Second Image END-->
        </b-col>
      </b-row>
      <!-- Row 4 -->
      <b-row>
        <b-col md="3"></b-col>
        <b-col md="6" class="p-5">
          <div class="project-summary">
          </div>
        </b-col>
        <b-col md="3"></b-col>
      </b-row>
      <b-row>
        <b-col class="text-center">
          <div class="pb-5">
            <nuxt-link class="dj-button" to="/portfolio"><font-awesome-icon :icon="['fas', 'angle-double-right']"/> VIEW ALL PROJECTS </nuxt-link>
          </div>
        </b-col>
      </b-row>
    </section>
    <div class="container-fluid">
      <b-row class="bg-white pt-5">
        <b-col>
          <h5 class="text-center dj-blue-text">#tags</h5>
          <div
            class="tags mx-auto text-center p-3">
            <nuxt-link
              v-for="tag in post.fields.tags"
              :key="tag"
              :to="{ name: 'tags-tag', params: { tag: tag }}"
              class="tag">{{ tag }}</nuxt-link>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_PROJECT_TYPE_ID,
      'fields.slug': params.slug
    }).then((entries) => {
      return {
        post: entries.items[0]
      }
    })
      .catch(console.error)
  },
  components: {
    VueMarkdown
  }
}
</script>

<style lang="scss" scoped>
section {
  background-color: $dj-white;
}
.project-header {
  max-width:100%;
  background-color: $dj-gray;
}
.project-description {
  padding: 2vh;
  @media only screen and (max-width: 576px) {
    padding: 0;
  }
  .title {
    padding: 2vh 0 .5vh 0;
    font-weight: 600;
  }
  h4 {
    color: $dj-blue;
  }
  h5 {
    color: $dj-red;
  }
}
.presentation-imgs img{
  padding-bottom: 2vh;
  width: 100%;
}
.tags {
    padding : 1em 0;
    margin-bottom: 2em;
  }
  .tag {
    margin:1vh;
  }
  .tag:link,
  .tag:visited {
    color: #A0A0A0;
    text-decoration: none;
    display: inline-block;
    padding: .33333rem .5rem;
    line-height: 1;
    border-radius: 2px;
    border: 1px solid #A0A0A0;
    margin-right: .5em;
  }
  .tag:active,
  .tag:hover,
  .tag:focus {
    color: #606060;
    border-color: #606060;
  }
.image-one {
  max-width:100%;
}
.last-img img {
  max-width:100%;
  vertical-align: middle;
}
.img-view-modal {
  vertical-align: left;
  align-self: center;
}
.modal-image {
  max-width: 100%;
}
</style>
