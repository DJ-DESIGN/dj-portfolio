<template>
  <div>
    <div class="dj-head">
      <div class="container-fluid dj-bg">
        <div class="dj-bg-darken">
          <b-row class="dj-reveal">
            <b-col md="1"></b-col>
            <b-col md="10" class="p-2">
              <div class="dj-logo-hero">
                <b-img
                  fluid-grow
                  src="../assets/img/brand/logo/SVG/derek-johnston-design-logo.svg"
                  />
                <h1
                  class="pt-5">
                  {{ portfolio.fields.djAbout }}
                </h1>
              </div>
            </b-col>
            <b-col md="1"></b-col>
          </b-row>
        </div>
      </div>
    </div>
    <a name="about"></a>
    <div class="container-fluid dj-about">
      <DjAbout />
    </div>
    <div class="p-5 bg-white mx-auto text-center">
      <b-row class="pt-4">
        <b-col>
          <h1 class="pb-3">What I Deliver</h1>
        </b-col>
      </b-row>
      <b-row class="text-center pb-3">
        <b-col md="4">
          <div class="p-2">
            <span class="eye-con"><font-awesome-icon :icon="['fas', 'eye']"/></span>
          </div>
          <h2>Visual Design</h2>
          <p class="text-center p-2">Branding– logo, color palette, identity, style guide-book.  Packaging– lables, tags, boxed, containers, foods, bottles, clothing.  Print– business cards, brochures, folders, magazine and newspaper, poster, presentations.</p>
        </b-col>
        <b-col md="4">
          <div class="p-2">
            <span class="eye-con"><font-awesome-icon :icon="['fas', 'sitemap']"/></span>
          </div>
          <h2>User Experience Design</h2>
          <p class="text-center p-2">Static and dynamic websites, single-page web applications, information architecure, wire-framing, email marketing campaigns, user engagment strategy, user flow, visual aesthetics, ecommerce.</p>
        </b-col>
        <b-col md="4">
          <div class="p-2">
            <span class="eye-con"><font-awesome-icon :icon="['fas', 'th']"/></span>
          </div>
          <h2>User Interface Design</h2>
          <p class="text-center p-2">Interactive prototyping, dynamic components, static mock-ups, single and multi-page forms, flow-chart, sitemaps, navigation, learning managment systems.</p>
        </b-col>
      </b-row>
    </div>
    <DjValue />
    <section class="container-fluid p-4">
      <b-row>
        <b-col>
          <div class="pt-5 pb-2 text-center">
            <h3>Featured Projects</h3>
          </div>
        </b-col>
      </b-row>
      <b-row class="pt-2 pb-5">
        <b-col
          v-for="(post, index) in posts"
          :key="index"
          lg="4"
          class="item"
        >
          <article-preview :post="post" />
        </b-col>
      </b-row>
    </section>
    <Testimonial />
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import ArticlePreview from '~/components/article-preview.vue'
import DjAbout from '~/components/DjAbout.vue'
import DjValue from '~/components/DjValue.vue'
import Testimonial from '~/components/Testimonial.vue'

const client = createClient()

export default {
  components: {
    ArticlePreview,
    DjAbout,
    DjValue,
    Testimonial
  },
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
.dj-head {
  overflow: hidden;
  position: relative;
  min-height: 93vh;
  background: #000;
  color: #fff;
  @media only screen and (max-width: 576px) {
    min-height: 40vh;
  }
}
.dj-bg-darken {
  background-color: rgba(0, 0, 0, 0.8);
  min-height: 93vh;
}
.dj-bg {
  background-image: url('https://res.cloudinary.com/derek-johnston-design/image/upload/v1571022993/movie-theater-audience-with-3d-glasses_kqgkub.jpg');
  background-color: black;
  padding: 0;
  margin: 0;
}
.dj-reveal {
  background-image: url('../assets/img/graphics/SVG/dj-hero-bg-reveal-fade.svg');
  background-position: bottom;
  background-repeat: no-repeat;
  margin-bottom: -1px;
  min-height: 94vh;
}
.dj-logo-hero {
  padding: 20vh 1vh;
  text-align: center;
  animation-name: djlogo-slide;
  animation-duration: 1;
  animation-delay: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  @media only screen and (max-width: 576px) {
      padding: 10vh 2vh;
    }
  img {
    max-width: 800px;
  }
  h1 {
    color: $dj-white;
    letter-spacing: .1em;
    font-size: 2.3em;
    font-weight: 400;
    @media only screen and (max-width: 576px) {
      font-size: 1.9em;
    }
  }
}
@keyframes djlogo-slide {
  from { margin-top: 100px; opacity: 0; }
  to { margin-top: 0px; opacity: 1; }
}
.dj-about {
  background-color: $dj-white;
}
.eye-con {
  font-size: 2em;
  color: $dj-gray;
}
h5 {
  background-color: $dj-gray;
  color: $dj-white;
}
section {
  background-color: $dj-white;
}
.home .person-name:link,
.home .person-name:visited {
  color: #fff;
}
</style>
