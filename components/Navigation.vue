<template>
  <b-navbar toggleable="md" type="dark" sticky class="dj-nav">
    <b-navbar-brand>
      <nuxt-link to="/">
        <b-img height="38" src="~assets/img/brand/logo/SVG/djdesign-logo-initial-sign.svg" />
      </nuxt-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse class="mx-auto" id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto fp-menu-items">
        <b-nav-item class="dj-nav-item"><nuxt-link to="/">HOME</nuxt-link></b-nav-item>
        <b-nav-item class="dj-nav-item"><nuxt-link to="/#about">ABOUT</nuxt-link></b-nav-item>
        <b-nav-item class="dj-nav-item"><nuxt-link to="/portfolio">PORTFOLIO</nuxt-link></b-nav-item>
        <b-nav-item-dropdown class="dj-nav-dropdown" id="dropdown-1" text="WORK">
          <b-dropdown-item><nuxt-link class="dj-nav-dropdown-item" to="/tags/web">Web</nuxt-link></b-dropdown-item>
          <b-dropdown-item><nuxt-link class="dj-nav-dropdown-item" to="/logo">Logo</nuxt-link></b-dropdown-item>
          <b-dropdown-item><nuxt-link class="dj-nav-dropdown-item" to="/tags/print">Print</nuxt-link></b-dropdown-item>
          <b-dropdown-item><nuxt-link class="dj-nav-dropdown-item" to="/tags/branding">Branding</nuxt-link></b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item class="dj-nav-item" href="#contact"> CONTACT </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto dj-socials">
        <b-nav-item href="https://www.linkedin.com/" class="dj-icon" target="_blank" ><font-awesome-icon :icon="['fab', 'linkedin']"/></b-nav-item>
        <b-nav-item href="https://www.instagram.com/" class="dj-icon" target="_blank" ><font-awesome-icon :icon="['fab', 'instagram']"/></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    msg: String
  },
  data () {
    return {
      show: true
    }
  },
  methods: {
    toggleNavbar () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
.dj-nav {
  background-color: $dj-gray;
  color: $dj-white;
  .dj-nav-item {
    padding: 0 1vh;
    a {
      color: $dj-white;
    }
    :hover {
      color: $dj-red;
      text-decoration: none;
    }
  }
  .dj-nav-dropdown {
    padding: 0 1vh;
    :hover {
      color: $dj-red;
    }
    .dj-nav-dropdown-item:hover {
      color: $dj-blue;
      text-decoration: none;
    }
  }
  .dj-socials {
    .dj-icon {
      font-size: 1.4em;
      :hover {
        color: $dj-blue
      }
    }
  }
}
</style>
