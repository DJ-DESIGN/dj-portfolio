<template>
  <div>
    <div class="dj-head">
      <div class="dj-bg">
        <div class="dj-bg-darken">
          <b-row class="dj-reveal">
            <b-col md="1" />
            <b-col md="10" class="p-2">
              <div class="dj-logo-hero">
                <img
                  src="../assets/img/brand/logo/SVG/derek-johnston-design-logo.svg"
                >
                <h1
                  class="pt-5">
                  <!-- Product designer that codes. -->
                  {{ portfolio.fields.djAbout }}
                </h1>
              </div>
            </b-col>
            <b-col md="1" />
          </b-row>
        </div>
      </div>
    </div>
    <div class="container-fluid dj-about">
      <DjAbout />
    </div>
    <div class="p-5 bg-white mx-auto text-center">
      <b-row class="pt-4">
        <b-col>
          <h1 class="pb-3">
            What I Deliver
          </h1>
        </b-col>
      </b-row>
      <b-row class="text-center pb-3">
        <b-col md="4">
          <div class="p-2">
            <span class="eye-con"><font-awesome-icon :icon="['fas', 'eye']" /></span>
          </div>
          <h2>Visual Design</h2>
          <h5 class="text-center p-2">
            Branding, Graphics, Style guides, Packaging, Print.
          </h5>
        </b-col>
        <b-col md="4">
          <div class="p-2">
            <span class="eye-con"><font-awesome-icon :icon="['fas', 'th']" /></span>
          </div>
          <h2>UI/UX Design</h2>
          <h5 class="text-center p-2">
            Research, Wireframes, Lofi and Hifi Mockups, Interactive Prototypes, User Journies.
          </h5>
        </b-col>
        <b-col md="4">
          <div class="p-2">
            <span class="eye-con"><font-awesome-icon :icon="['fas', 'sitemap']" /></span>
          </div>
          <h2>Development</h2>
          <h5 class="text-center p-2">
            Web Applications, Brand Websites, Landing Pages, Microsites.
          </h5>
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
      <b-row class="pb-4">
        <b-col class="text-center">
          <div class="pb-5">
            <nuxt-link class="dj-button" to="/portfolio">
              <font-awesome-icon :icon="['fas', 'angle-double-right']" />
              VIEW ALL PROJECTS
            </nuxt-link>
          </div>
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
.page-enter-active, .page-leave-active {
  transition: all .30s ease-out;
}
.page-enter, .page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}
.dj-head {
  overflow: hidden;
  position: relative;
  min-height: 93vh;
  color: #fff;
  min-width: 100%;
  padding: 0;
  @media only screen and (max-width: 576px) {
    min-height: 40vh;
  }
}
.dj-bg-darken {
  min-height: 93vh;
  min-width: 100%;
  padding: 0;
  animation-name: dj-bg-darken;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
}
@keyframes dj-bg-darken{
  from {
    background-color: rgba(0, 0, 0, 0.1);
    }
  to {
    background-color: rgba(0, 0, 0, 0.86);
  }
}
.dj-bg {
  background-color: black;
  padding: 0;
  animation-name: dj-bg;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  background-image: url('https://res.cloudinary.com/derek-johnston-design/image/upload/v1571022993/movie-theater-audience-with-3d-glasses_kqgkub.jpg')
}
@keyframes dj-bg {
  from {
    background-image: url('https://res.cloudinary.com/derek-johnston-design/image/upload/v1574536633/movie-theater-audience-with-3d-glassesMIX_o0am0s.jpg');
    background-blend-mode:screen;
    opacity: 1;
    }
  to {
    background-image: url('https://res.cloudinary.com/derek-johnston-design/image/upload/v1574536633/movie-theater-audience-with-3d-glassesMIX_o0am0s.jpg');
    opacity: 1;
    background-blend-mode: normal;
  }
}
.dj-reveal {
  background-image: url('../assets/img/graphics/SVG/dj-hero-bg-reveal-fade.svg');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: -1px;
  min-height: 93vh;
  min-width: 100%;
  opacity: 1;
}
.dj-logo-hero {
  padding: 20vh 1vh;
  text-align: center;
  animation-name: dj-logo-hero;
  animation-duration: 1s;
  animation-delay: 1s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  opacity: 0;
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
@keyframes dj-logo-hero {
  from {opacity: 0; }
  1% { opacity: .1; }
  to { opacity: 1; }
}
.dj-about {
  background-color: $dj-white;
}
.eye-con {
  font-size: 2em;
  color: $dj-gray;
}
section {
  background-color: $dj-white;
}
.home .person-name:link,
.home .person-name:visited {
  color: #fff;
}
</style>
