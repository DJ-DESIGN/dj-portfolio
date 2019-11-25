<template>
  <div class="container-fluid">
    <a name="contact"></a>
    <b-row>
      <b-col class="dj-bg-blue dj-contact-container" xl="6">
        <h3 class="p-2">Get in touch.</h3>
        <div class="dj-contact-form">
          <form
            name="dj-contact"
            method="POST"
            netlify-honeypot="bot-field"
            action="/thank-you"
            netlify
            >
              <b-row>
                <b-col xl="6">
                  <input type="hidden" name="form-name" value="dj-contact" />
                  <p>
                    <input class="fp-form-group-input" type="text" name="name" placeholder="Enter your name:" />
                  </p>
                  <p>
                    <input class="fp-form-group-input" type="email" name="email" placeholder="Enter your email:" required />
                  </p>
                  <p class="dj-white-text">* I don't share your information with 3rd parties.</p>
                </b-col>
                <b-col xl="6">
                  <p>
                    <textarea class="fp-message" name="message" rows="3" placeholder="Enter your message:" ></textarea>
                  </p>
                  <p class="hidden">
                    <label>Don’t fill this out:
                      <input name="bot-field">
                    </label>
                  </p>
                  <p>
                    <b-button class="btn-block rounded-0 dj-sumbit-btn" type="submit" >Submit</b-button>
                  </p>
                </b-col>
              </b-row>
            </form>
          </div>
      </b-col>
      <b-col class="dj-bg-red dj-quote-container" xl="4">
        <div class="quote-box">
          <h3 class="dj-white-text p-2">Need a quote?</h3>
          <b-button class="btn-block rounded-0 dj-quote-btn" v-b-modal.quote-modal>
            <font-awesome-icon :icon="['fas', 'angle-double-right']"/> Yes, I would like a quote
          </b-button>
        </div>
      </b-col>
      <b-col class="dj-bg-gray dj-foot-last" xl="2">
        <div class="dj-logo-foot">
          <h1>Derek Johnston <span class="dj-red-text">Design</span></h1>
          <h4 class="pt-2">Contact:</h4>
          <p><a href="mailto:dj@derekjohnston.com">dj@derekjohnston.com</a></p>
          <p>(312) 608-4894</p>
        </div>
      </b-col>
    </b-row>
    <b-row class="dj-bg-black">
      <b-col class="dj-all-rights-reserved">
        <p>© 2019 Derek Johnston Design All rights reserved</p>
      </b-col>
    </b-row>
    <!-- Quote Form Modal -->
    <b-modal
      id="quote-modal"
      class="dj-quote-modal"
      size="lg"
      title="Quote Request"
      hide-footer
      >
      <div class="dj-quote-form">
        <p>Please try to fill out as many fields as possible. Thanks</p>
        <form
          name="dj-quote"
          method="POST"
          netlify-honeypot="bot-field"
          action="/thank-you"
          netlify
          >
          <b-row>
            <b-col>
              <input type="hidden" name="form-name" value="dj-quote" />
              <p>
                  <input type="text" name="name" placeholder="Name:" required />
              </p>
              <p>
                  <input type="text" name="company" placeholder="Company:" />
              </p>
              <p>
                  <input type="email" name="email" placeholder="Contact email:" required />
              </p>
              <p class="dj-gray-text">* I don't share your information with 3rd parties.</p>
              <h6 class="pt-2 dj-blue-text">Project Type:</h6>
              <p>
                <b-form-checkbox-group
                  type="checkbox"
                  v-model="selected"
                  :options="options"
                  name="projectType"
                ></b-form-checkbox-group>
              </p>
              <p>
                  <input type="text" name="deadline" placeholder="How soon do you need this?" />
              </p>
              <p>
                  <textarea name="project-info" rows="4" placeholder="Describe your project..." required ></textarea>
              </p>
              <p class="hidden">
                  <label>Don’t fill this out:
                  <input name="bot-field">
                  </label>
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p>
                <b-button class="btn-block rounded-0 dj-sumbit-btn" type="submit" >Submit</b-button>
              </p>
            </b-col>
          </b-row>
        </form>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      selected: [], // Must be an array reference!
      options: [
        { text: 'Website', value: 'website' },
        { text: 'App', value: 'app' },
        { text: 'Logo', value: 'logo' },
        { text: 'Packaging', value: 'packaging' },
        { text: 'Print', value: 'print' },
        { text: 'Illustration', value: 'illustration' },
        { text: 'Other', value: 'other' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dj-foot-last {
  display: flex;
  align-items: flex-end;
  .dj-logo-foot {
    padding: 2vh;
    @media only screen and (max-width: 576px) {
      padding: 8vh 2vh;
    }
    h1 {
      font-size: 2em;
    }
    h4, p {
    color: $dj-white;
    }
    a {
      color: $dj-white;
    }
  }
}
.dj-contact-container {
  padding: 4vh;
  @media only screen and (max-width: 576px) {
    padding: 6vh 2vh;
  }
}
.dj-quote-container {
  display: flex;
  align-items:center;
  .quote-box {
    padding: 4vh 2vh;
    @media only screen and (max-width: 576px) {
      padding: 8vh 2vh;
    }
    .dj-quote-btn {
      background-color: $dj-gray;
      border: none;
      color: $dj-white;
      font-weight: 600;
      text-transform: uppercase;
      border-radius: 0;
    }
    .dj-quote-btn:hover {
      background-color: $dj-blue;
    }
  }
}

.dj-contact-form {
  padding: 2vh 2vw;
  background-color: $dj-gray;
  margin-bottom: 4vh;
  @media only screen and (max-width: 576px) {
    padding: 2vh 4vw;
  }
  form {
    padding: 2vh 0;
  }
  input {
    color: $dj-blue;
    background-color: $dj-gray;
    border-radius: 0;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 2px solid $dj-white;
    font-size: 1.3em;
    padding: 12px 20px;
    min-width: 100%;
     &:hover, &.hover {
      background-color: black;
      border-bottom: 2px solid $dj-red;
    }
    &:focus, &.focus {
      background-color: black;
      border-bottom: 2px solid $dj-red;
      border-radius: 0;
    }
  }
  input::placeholder, textarea::placeholder {
    color:$dj-blue;
    opacity: .6;
  }
  textarea {
    margin-top: 1vh;
    background-color: $dj-gray;
    border-radius: 0;
    border: solid 2px $dj-white;
    font-size: 1.3em;
    padding: 12px 20px;
    color: $dj-blue;
    min-width: 100%;
    &:hover, &.hover {
      background-color: black;
      border: 2px solid $dj-red;
    }
    &:focus, &.focus {
      color: $dj-blue;
      background-color: black;
      border: 2px solid $dj-red;
      border-radius: 0;
    }
  }
  .dj-sumbit-btn {
    background-color: $dj-red;
    border: none;
    color: $dj-white;
    font-weight: 600;
    text-transform: uppercase;
  }
  .dj-sumbit-btn:hover {
    background-color: $dj-blue;
  }
}
.dj-quote-form {
  padding: 0 2vw;
  background-color: $dj-white;
  margin: 4vh 2vh;
  @media only screen and (max-width: 576px) {
    padding: 2vh 4vw;
  }
  form {
    padding: 2vh 0;
  }
  input {
    color: $dj-blue;
    background-color: $dj-white;
    border-radius: 0;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 2px solid $dj-gray;
    font-size: 1.3em;
    margin-top: 1vh;
    padding: 12px 20px;
    min-width:100%;
     &:hover, &.hover {
      background-color: white;
      border-bottom: 2px solid $dj-red;
    }
    &:focus, &.focus {
      background-color: white;
      border-bottom: 2px solid $dj-red;
      border-radius: 0;
    }
  }
  input::placeholder, textarea::placeholder {
    color:$dj-blue;
    opacity: .8;
  }
  textarea {
    background-color: $dj-white;
    border-radius: 0;
    border: solid 2px $dj-gray;
    font-size: 1.3em;
    margin-top: 1vh;
    padding: 12px 20px;
    color: $dj-blue;
    min-width:100%;
    &:hover, &.hover {
      background-color: white;
      border: 2px solid $dj-red;
    }
    &:focus, &.focus {
      color: $dj-blue;
      background-color: white;
      border: 2px solid $dj-red;
      border-radius: 0;
    }
  }
  input[type="checkbox"] {
    display:none;
  }
  input[type="checkbox"] + label:before {
    content:"☐";
    border-radius: 0;
    transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    font-size: 1.2em;
  }
  input:checked + label:before {
    content:"☑";
    border-radius: 0;
  }
  label:hover {
    color: $dj-blue;
    }
  .dj-sumbit-btn {
    background-color: $dj-red;
    border: none;
    color: $dj-white;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 2vh;
  }
  .dj-sumbit-btn:hover {
    background-color: $dj-blue;
  }
  .mess-p {
    font-size: .9em;
    color: black;
  }
}
.dj-all-rights-reserved {
  color: white;
  padding: 4vh 2vh;
  font-size: .8em;
}
.hidden {
  display: none;
}
</style>
