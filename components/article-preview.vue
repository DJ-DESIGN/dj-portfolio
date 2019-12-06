<template>
  <article>
    <b-row>
      <b-col>
        <b-card class="mb-4 dj-portfolio-card">
          <nuxt-link
          :to="{ name: 'portfolio-slug',
          params: { slug: post.fields.slug }}"
           class="btn-img"
          >
          <div class="img-wrap">
            <img
              :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
              :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=196&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=562&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=1125&fit=fill 2000w`"
              sizes="(min-width: 1024px) 400px, 100vw"
              class="thumbnail"
            />
          </div>
          </nuxt-link>
          <div class="dj-card-info">
            <div>
              <b>Client:</b>
              <h4 class="pt-0">
                <nuxt-link
                :to="{ name: 'portfolio-slug',
                params: { slug: post.fields.slug }}"
                class="title">{{ post.fields.client }}
                </nuxt-link>
              </h4>
            </div>
            <div>
              <b>Industry:</b>
              <h5 class="pt-0">
                {{ post.fields.industry }}
              </h5>
            </div>
            <b>About the company:</b>
            <p>{{ post.fields.description }}</p>
            <div
              class="tags">
              <div class="title">#tags:</div>
              <nuxt-link
                v-for="tag in post.fields.tags"
                :key="tag"
                :to="{ name: 'tags-tag', params: { tag: tag }}"
                class="tag">{{ tag }}</nuxt-link>
            </div>
          </div>
          <b-row class="mr-0 ml-0">
              <b-col class="dj-bg-blue col-blue"></b-col>
              <b-col class="dj-bg-red col-red"></b-col>
              <b-col class="dj-bg-gray col-gray"></b-col>
            </b-row>
        </b-card>
      </b-col>
    </b-row>
  </article>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss" scoped>
.thumbnail {
  margin-bottom: 1em;
  max-width: 100%;
  padding: 0;
}
.dj-portfolio-card {
  background-color: white;
  border: none;
  border-radius: 0;
  padding: 0;
  box-shadow: -10px -7px 1px rgba(238, 43, 70, 0.2), 10px 7px 1px rgba(121, 154, 208, 0.2), -5px -5px 1px rgba(238, 43, 70, 0.2), 5px 5px 1px rgba(121, 154, 208, 0.2),;
  border-radius: 0;
  .dj-card-info {
    padding: 1vh 2vh;
  }
  h4 a {
    color: $dj-blue;
  }
  a {
    text-decoration: none;
  }
  h5 {
    color: $dj-red;
  }
}
//* Thumbnail Hover Styling - START *//
.btn-img {
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
  cursor: pointer;
  background-color: white;
}
.btn-img img {
  display: block;
}
.btn-img:hover .img-wrap {
  background-color: $dj-gray;
  background-image: url(../assets/img/graphics/100w/3d-glasses.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50px;
}
.btn-img:hover img {
  opacity: 0.2;
}
//* Thumbnail Hover Styling - END *//
.card-body {
  padding: 0;
  margin: 0;
  img {
    min-width:100%;
  }
}
.col-blue {
  max-width:50%;
  padding: 3px
}
.col-red {
  max-width:33%;
  padding: 3px
}
.col-gray {
  max-width:17%;
  padding: 3px
}
.card-view-btn {
  text-align: center;
  display: inline;
  button {
    float: left;
    vertical-align: top;
    border: none;
    padding: 4px 6px;
    background-color: $dj-red;
    color: white;
    letter-spacing: 1px;
    font-size: .6em;
    font-weight: 600;
    border-radius: inherit;
    margin-right: 7px;
    margin-top: 4px;
  }
  button:hover {
    background-color: $dj-blue;
    color: white;
  }
}
.title {
  text-decoration: none;
  font-size: 22px;
  color: $dj-gray;
}
.tags {
  padding : 1vh;
  margin-bottom: 1vh;
  .title {
    font-size: .9em;
    font-weight: 600;
  }
}
.tag:link,
.tag:visited {
  background-color: white;
  color: $dj-red;
  text-decoration: none;
  display: inline-block;
  padding: 0;
  line-height: 1;
  border-radius: 2px;
  border: 0px solid #A0A0A0;
  margin: .4em .5em;
}

.tag:active,
.tag:hover,
.tag:focus {
  color: $dj-blue;
}
</style>
