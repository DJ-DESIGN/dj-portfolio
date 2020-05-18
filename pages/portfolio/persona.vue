<template>
  <div>
    <header class="container-fluid dj-page-header">
      <h1 class="pt-5">
        Persona
      </h1>
    </header>
    <section class="dj-page-section demographic-profile">
      <b-row>
        <b-col md="2" />
        <b-col md="4">
          <div class="persona-avatar">
            <img src="https://res.cloudinary.com/derek-johnston-design/image/upload/v1572621651/cartoon-lion-logo_pa5aaw.jpg" alt="Avatar Placeholder">
          </div>
        </b-col>
        <b-col md="4">
          <div class="personal-info">
            <h2>Name</h2>
            <h3>Age/Gender</h3>
            <h4>Education</h4>
            <h4>Family</h4>
            <h4>Persona Group</h4>
          </div>
        </b-col>
        <b-col md="2" />
      </b-row>
      <b-row>
        <b-col md="2" />
        <b-col md="4">
          <div class="professional-info">
            <h1>Professional Background</h1>
            <h2>Occupation</h2>
            <h3>Income</h3>
            <h4>Work Experience</h4>
          </div>
        </b-col>
        <b-col md="4">
          <div class="user-environment">
            <h1>User Environment</h1>
            <h2>Devices Used</h2>
            <h3>Time Spent</h3>
            <h4>Other</h4>
          </div>
        </b-col>
        <b-col md="2" />
      </b-row>
      <b-row>
        <b-col md="2" />
        <b-col md="4">
          <div class="psycho-graphic">
            <h1>Psychographics</h1>
            <h2>Attitude</h2>
            <h3>Interests</h3>
            <h4>Motivations</h4>
            <h4>Pain Points</h4>
          </div>
        </b-col>
        <b-col md="6" />
      </b-row>
      <b-row>
        <b-col md="2" />
        <b-col md="8">
          <div class="end-goals">
            <h1>End Goals</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex voluptatem illum, voluptates facere molestias iste rerum odit officiis, quam facilis quia vitae magni nostrum asperiores ea excepturi distinctio eum.</p>
          </div>
        </b-col>
        <b-col md="2" />
      </b-row>
      <b-row>
        <b-col md="2" />
        <b-col md="8">
          <div class="scenarios">
            <h1>Senarios</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex voluptatem illum, voluptates facere molestias iste rerum odit officiis, quam facilis quia vitae magni nostrum asperiores ea excepturi distinctio eum.</p>
          </div>
        </b-col>
        <b-col md="2" />
      </b-row>
    </section>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
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
.demographic-profile {
    padding: 4vh;
    .persona-avatar {
        img {
            max-width: 100%;
        }
    }
    .personal-info {
        padding-top: 2vh;
    }
    .professional-info {
        padding-top: 2vh;
    }
    .user-environment {
        padding-top: 2vh;
    }
}

</style>
