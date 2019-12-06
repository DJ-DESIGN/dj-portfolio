<template>
  <div>
    <Navigation />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navigation,
    Footer
  }
}
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
body {
  background-color: black;
}
h1 {
  color: $dj-blue;
  font-family: 'Raleway', sans-serif;
}
h2 {
  color: $dj-red;
  font-weight: 900;
  letter-spacing: .2em;
  font-family: 'Big Shoulders Text', sans-serif;
}
h3 {
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
}
a {
  color: $dj-red;
  :hover {
    color: $dj-blue;
  }
}
.dj-button {
  background-color: $dj-gray;
  border: none;
  color: $dj-white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1em;
  padding: .5vh 2vh;
  margin: 2vh 1vh;
  cursor: pointer;
  font-weight: 600;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.dj-button:hover {
  background-color: $dj-red;
  color: $dj-white;
  text-decoration: none;
}
.dj-bg-red {
  background-color: $dj-red;
}
.dj-bg-blue {
  background-color: $dj-blue;
}
.dj-bg-white {
  background-color: $dj-white;
}
.dj-bg-gray {
  background-color: $dj-gray;
}
.dj-bg-black {
    background-color: rgb(2, 2, 2);
}
.dj-footer {
  background-color: $dj-red;
}
.dj-red-text {
  color: $dj-red;
}
.dj-blue-text {
  color: $dj-blue;
}
.dj-white-text {
  color: $dj-white;
}
.dj-3d-box {
  box-shadow: -10px -3px 1px rgba(238, 43, 70, 0.2), 10px 3px 1px rgba(121, 154, 208, 0.2);
  border-radius: 0;
}
.dj-3d-text {
  text-shadow: 1px 1px 7px rgba(0, 0, 0, 1), -20px -7px 1px rgba(238, 43, 70, 0.4), 20px 7px 1px rgba(121, 154, 208, 0.4), -10px -7px 1px rgba(238, 43, 70, 0.5), 10px 7px 1px rgba(121, 154, 208, 0.5);
}
.dj-text-shadow {
  text-shadow: 1px 1px 7px rgba(0, 0, 0, 1);
}
.right-align {
  float: right;
}
#dj-fade-in {
  animation: fadein 1s;
  -moz-animation: fadein 1s; /* Firefox */
  -webkit-animation: fadein 1s; /* Safari and Chrome */
  -o-animation: fadein 1s; /* Opera */
}
#djSlow-fade-in {
  animation: fadein 2s;
  -moz-animation: fadein 2s; /* Firefox */
  -webkit-animation: fadein 2s; /* Safari and Chrome */
  -o-animation: fadein 2s; /* Opera */
}
.dj-page-header {
  background-color: $dj-gray;
  padding: 4vh;
  text-align: center;
  h1, h2 {
    color: $dj-red;
    font-size: 2em;
    letter-spacing: .2em;
    font-family: 'Big Shoulders Text', sans-serif;
    text-transform: uppercase;
  }
}
.dj-page-section {
  background-color: $dj-white;
  .tag-title {
    padding: 4vh;
  }
}
</style>
