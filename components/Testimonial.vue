<template>
    <b-container-fluid>
        <b-row class="p-0 m-0">
          <b-col md="1"></b-col>
          <b-col md="5" class="dj-testimonial-conatiner">
            <div class="dj-slide">
              <h3><span class="quote-con-left"><font-awesome-icon :icon="['fas', 'quote-left']"/></span>As the owner of femPAQ the first thing people comment on is the packaging, the ooo's & ahhh's are always rewarding. He gave us exactly what we needed. <span class="quote-con-right"><font-awesome-icon :icon="['fas', 'quote-right']"/></span></h3>
              <h2 class="pt-5">April Roy</h2>
              <h4>CEO of femPAQ</h4>
            </div>
          </b-col>
          <b-col md="6" class="dj-bottom-right-image">
              <div class="dj-bottom-right-reveal">
                <div class="dj-test-reveal-text-right">
                  <h2 class="dj-3d-text">THAT'S<br>WHAT<br>THEY<br>SAY</h2>
                </div>
              </div>
          </b-col>
        </b-row>
    </b-container-fluid>
</template>

<script>
export default {
  name: 'Testimonial'
}
</script>

<style scoped lang="scss">
/* Right side svg reveal - 3D audience - red */
.dj-bottom-right-reveal {
  background-image: url('../assets/img/graphics/SVG/dj-bottom-right-reveal.svg');
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
  min-height: 82vh;
  margin-left: -1px;
  margin-top: -1px;
  padding: 2vh;
  display: flex;
  align-items:flex-end;
  text-align: right;
}
.dj-test-reveal-text-right {
    width: 100%;
    margin: 0;
    padding: 0;
  p {
    color: $dj-white;
    font-size: 1.3em;
    padding-left:4vh;
  }
  h2 {
    color: white;
    text-align: right;
    font-size: 4em;
    font-weight: 900;
    font-family: 'Raleway', sans-serif;
    font-style: italic;
  }
}
.quote-con-right {
  display: inline;
  color: $dj-blue;
  padding: 0 1vh;
}
.quote-con-left {
  display: inline;
  color: $dj-blue;
  padding: 0 1vh;
}
.dj-bottom-right-image {
  background-image: url('https://res.cloudinary.com/derek-johnston-design/image/upload/v1571599931/3d-audience-time-mag_o4s0yc.jpg');
  background-size: cover;
  background-color: #010000;
  background-position:center;
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
}
.dj-testimonial-conatiner {
  padding: 2vh;
  text-align: left;
  height: 50vh;
  display: flex;
  align-self: center;
  @media only screen and (max-width: 576px) {
    min-height: 60vh;
  }
  .dj-slider-component {
    padding: 2vh;
  }
}
.slider-indicators .slider-indicators-center{
  .slider-indicator-icon {
    background-color: $dj-red!important;
  }
}
</style>
