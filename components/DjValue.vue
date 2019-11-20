<template>
    <b-container-fluid>
        <b-row class="p-0 m-0">
            <b-col lg="6" class="dj-bottom-left-image">
                <div class="dj-bottom-left-reveal">
                  <div class="dj-test-reveal-text-left">
                    <h1 class="dj-3d-text">LET'S<br>BUILD<br>SOMETHING<br>AMAZING</h1>
                  </div>
                </div>
            </b-col>
            <b-col lg="5" class="indust-worked">
              <div class="indust-list">
                <h3>Industries I've Worked Worked With:</h3>
                <b-row>
                  <b-col>
                    <ul class="indust-list">
                      <li
                      v-for="(djlist1,index) in djlist1s"
                      :key=index
                      >
                        <span class="dj-bullet"><font-awesome-icon style="display:inline;" :icon="['fas', 'check']"/></span> {{djlist1}}
                      </li>
                    </ul>
                  </b-col>
                  <b-col>
                    <ul class="indust-list">
                      <li
                      v-for="(djlist2,index) in djlist2s"
                      :key=index
                      >
                        <span class="dj-bullet"><font-awesome-icon style="display:inline;" :icon="['fas', 'check']"/></span> {{djlist2}}
                      </li>
                    </ul>
                  </b-col>
                </b-row>
              </div>
            </b-col>
            <b-col lg="1"></b-col>
        </b-row>
    </b-container-fluid>
</template>

<script>
export default {
  name: 'DjValue',
  data () {
    return {
      djlist1s: ['Financial', 'Healthcare', 'Technology', 'Entertainment', 'Agencies', 'Cosmetics', 'Fashion', 'Music'],
      djlist2s: ['Food & Drink', 'Construction', 'Automotive', 'Education', 'Wellness & Health', 'Agriculture', 'Gym & Fitness', 'Political']
    }
  }
}
</script>

<style lang="scss" scoped>
/* left side svg reveal - 3D audience - blue */
.dj-bottom-left-reveal {
  background-image: url('../assets/img/graphics/SVG/dj-left-side-reveal.svg');
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: cover;
  min-height: 100.1%;
  padding: 2vh;
  display: flex;
  align-items: center;
  text-align: left;
}
.dj-test-reveal-text-left {
    width: 100%;
    margin: 0;
    padding: 0;
  h1 {
    color: white;
    text-align: left;
    font-size: 3.5em;
    font-weight: 900;
    font-family: 'Raleway', sans-serif;
    font-style: italic;
  }
}
.dj-bottom-left-image {
  background-image: url('https://res.cloudinary.com/derek-johnston-design/image/upload/v1571628766/audience-face-right-3d-glasses_qaarpx.jpg');
  background-size: cover;
  background-color: #010000;
  background-position:center;
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
  min-height: 80vh;
}
.indust-worked {
  display: flex;
  align-self: center;
  @media only screen and (max-width: 576px) {
    padding-top: 2vh;
  }
  .indust-list ul {
    padding-top: 2vh;
    list-style: none;
    font-size: 1.2em;
    li {
      display: flex;
      align-items: flex-start;
      font-size: 1em;
      padding-top: 1vh;
    }
  }
  .dj-bullet {
    color: $dj-blue;
    padding-right: 7px;
  }
}
</style>
