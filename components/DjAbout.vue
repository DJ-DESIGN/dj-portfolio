<template>
  <b-container-fluid>
    <a name="about" />
    <b-row class="about">
      <b-col lg="1" />
      <b-col lg="5" class="text-left pt-4">
        <floating-derek />
      </b-col>
      <b-col lg="5" class="p-3 text-left">
        <h2 class="p-5">
          First, a little about myself–
        </h2>
        <p class="text-grey">
          I am a product designer with over a decade of designing and developing cohesive digital experiences and products for numerous brands. I am more of a binary artist than a simple designer. I've spent multiple years working within large and mid-range companies creatively building experiences that enhanced company outcomes. When not in the corporate environment I have also worked with various startup companies and small businesses in multiple sectors while offering design solutions to keep projects moving forward.
        </p>
        <div class="pt-5">
          <a class="dj-button" href="#contact"><font-awesome-icon :icon="['fas', 'angle-double-right']" />
            CONTACT ME
          </a>
        </div>
      </b-col>
      <b-col lg="1" />
    </b-row>
    <b-row class="what-i-do pb-5">
      <b-col lg="1" />
      <b-col lg="5" class="p-3 pt-5 text-left">
        <h2 class="p-5">
          What I Do
        </h2>
        <h4>See the vision. Build the experience.</h4>
        <p class="pb-4">
          I utilize stimulating visual communication, information architecture, user-friendly interfaces and wonderful digital interaction to transform basic URLs into truly unique brand experiences.
        </p>
        <h4>Probelm Solving through the medium of design.</h4>
        <p class="pb-4">
          Design is not just about creating amazing digital journys or enhanced visual aesthetic, it is also about resolving bottlenecks and stagnant user interaction to optimize paths to success while reaching end goals.
        </p>
      </b-col>
      <b-col lg="5">
        <FloatingGlasses />
      </b-col>
      <b-col lg="1" />
    </b-row>
  </b-container-fluid>
</template>

<script>
import FloatingDerek from '~/components/FloatingDerek.vue'
import FloatingGlasses from '~/components/FloatingGlasses.vue'

export default {
  name: 'DjAbout',
  components: {
    FloatingDerek,
    FloatingGlasses
  }
}
</script>

<style lang="scss" scoped>
.about {
  background-color: $dj-white;
  padding: 4vh 1vh 1vh 1vh;
  display: flex;
  @media only screen and (max-width: 992px) {
    padding-left: 8vh;
    padding-right: 8vh;
  }
  @media only screen and (max-width: 768px) {
    padding-left: 4vh;
    padding-right: 4vh;
  }
  @media only screen and (max-width: 576px) {
    padding-left: 2vh;
    padding-right: 2vh;
  }
}
.what-i-do {
  padding: 1vh 1vh 4vh 1vh;
  @media only screen and (max-width: 992px) {
    padding-left: 8vh;
    padding-right: 8vh;
  }
  @media only screen and (max-width: 768px) {
    padding-left: 4vh;
    padding-right: 4vh;
  }
  @media only screen and (max-width: 576px) {
    padding-left: 2vh;
    padding-right: 2vh;
  }
}
</style>
