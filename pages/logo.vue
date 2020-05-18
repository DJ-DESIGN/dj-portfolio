<template>
  <div>
    <header class="container-fluid dj-page-header">
      <h1 class="pt-5">
        LOGO
      </h1>
    </header>
    <section class="container-fluid dj-page-section pt-2 pb-2">
      <b-row class="dj-logo-row">
        <b-col
          v-for="(image, index) in images"
          :key="index"
          md="4"
        >
          <b-img
            :src="image.url"
            :alt="image.alt"
            class="dj-logo"
            fluid-grow
          />
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        { url: 'https://res.cloudinary.com/derek-johnston-design/image/upload/v1589739384/content-titan-logo_fwrgcm.jpg', alt: 'Content Titan' },
        { url: 'https://res.cloudinary.com/derek-johnston-design/image/upload/v1572621651/fempaq-logo_nvp4ut.jpg', alt: 'femPAQ' },
        { url: 'https://res.cloudinary.com/derek-johnston-design/image/upload/v1589739391/cross-culture-logo_r1dgir.jpg', alt: 'Cross Culture' },
        { url: 'https://res.cloudinary.com/derek-johnston-design/image/upload/v1589740110/southern-manners-coffee-logo_copy_i4qf83.jpg', alt: 'Southern Manners Coffee' },
        { url: 'https://res.cloudinary.com/derek-johnston-design/image/upload/v1572621650/boost-health-media-logo_ctqdhf.jpg', alt: 'Boost Health Media' },
        { url: 'https://res.cloudinary.com/derek-johnston-design/image/upload/v1572621651/ghc-river-valley-logo_dsblcv.jpg', alt: 'Green House Cottages of River Valley' },
        { url: 'https://res.cloudinary.com/derek-johnston-design/image/upload/v1572621651/ghc-homewood-logo_qquqto.jpg', alt: 'Green House Cottages of Homewood' },
        { url: 'https://res.cloudinary.com/derek-johnston-design/image/upload/v1572621650/break-and-run-logo_c0n7ho.jpg', alt: 'Break and Run' },
        { url: 'https://res.cloudinary.com/derek-johnston-design/image/upload/v1572621651/bobys-project-logo_zsskp2.jpg', alt: 'Bobbys Projects' },
        { url: 'https://res.cloudinary.com/derek-johnston-design/image/upload/v1572621650/economy-construction-logo_xik5jd.jpg', alt: 'Economy Construction' },
        { url: 'https://res.cloudinary.com/derek-johnston-design/image/upload/v1572621650/eclection-logo_zgnuuo.jpg', alt: 'Eclection' },
        { url: 'https://res.cloudinary.com/derek-johnston-design/image/upload/v1572621651/the-landing-logo_jqc2k7.jpg', alt: 'The Landing' },
        { url: 'https://res.cloudinary.com/derek-johnston-design/image/upload/v1572621651/elenha-logo_albwdf.jpg', alt: 'Elenha' },
        { url: 'https://res.cloudinary.com/derek-johnston-design/image/upload/v1572621651/cartoon-lion-logo_pa5aaw.jpg', alt: 'Cartoon Lion' },
        { url: 'https://res.cloudinary.com/derek-johnston-design/image/upload/v1589750649/nerdsters-red-logo_f9pwy4.jpg', alt: 'The Bentonville Nerdsters' }
      ]
    }
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
.dj-logo-row {
    .dj-logo {
        padding: 2vh 1vh;
    }
}
</style>
