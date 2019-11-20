<template>
  <div class="container-fluid">
    <a name="contact"></a>
    <b-row>
      <b-col class="dj-bg-blue form-container" xl="6">
        <h3>Get in touch.</h3>
        <DjContactForm />
      </b-col>
      <b-col class="dj-bg-red form-container" xl="4">
        <div class="quote-container">
          <div class="quote-box">
            <h3 class="dj-white-text">Need a quote?</h3>
            <b-button class="btn-block rounded-0 dj-quote-btn" v-b-modal.quote-modal>
              <font-awesome-icon :icon="['fas', 'angle-double-right']"/> Yes, I would like a quote
            </b-button>
          </div>
        </div>
        <h3>Sign up for news and updates!</h3>
        <Newsletterform />
      </b-col>
      <b-col class="dj-bg-gray dj-foot-last" xl="2">
        <div class="dj-logo-foot">
          <h1>Derek Johnston <span class="dj-red-text">Design</span></h1>
          <h4>Contact:</h4>
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
      <b-form
        class="p-5"
        name="quote-request"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/thank-you/">
        <p>Please fill out all fields.</p>
        <b-form-group
          id="djQuoteInputGroup1"
          class="text-left"
          >
          <p class="hidden">
            <label>Don’t fill this out:
              <input name="bot-field">
            </label>
          </p>
          <b-form-input
            id="djQuoteInputName"
            type="text"
            size="lg"
            placeholder="Name"
            required />
        <b-form-input
            id="djQuoteInputCompany"
            type="text"
            size="lg"
            placeholder="Company" />
          <b-form-input
            id="djQuoteInputDeadline"
            type="text"
            size="lg"
            placeholder="How soon do you need this completed?" />
        </b-form-group>
        <b-form-group
          id="djQuoteInputGroup2"
          description="* I will never share your email with anyone else."
          class="text-left"
        >
          <b-form-input
            id="djQuoteInputEmail"
            type="email"
            size="lg"
            placeholder="Contact Email"
            required />
        </b-form-group>
        <b-form-group id="djQuoteInputGroup3">
          <p>Project Category:</p>
          <b-form-checkbox-group v-model="form.projectChecked" id="djQuoteInputProjectType">
            <b-form-checkbox value="website">Website</b-form-checkbox>
            <b-form-checkbox value="logo">Logo</b-form-checkbox>
            <b-form-checkbox value="illustration">Illustration</b-form-checkbox>
            <b-form-checkbox value="packaging">Packaging</b-form-checkbox>
            <b-form-checkbox value="other">Other</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-form-group
          id="djQuoteInputGroup4"
          class="text-left"
          >
          <b-form-textarea
            id="djQuoteInputTextarea"
            size="lg"
            placeholder="Tell me a little about your project"
            rows="3"
            max-rows="6"
            required />
      </b-form-group>
      <b-button class="btn-block rounded-0 dj-sumbit-btn" type="submit">SUBMIT QUOTE REQUEST</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import DjContactForm from '@/components/DjContactForm.vue'
import Newsletterform from '@/components/Newsletterform.vue'

export default {
  name: 'Footer',
  components: {
    DjContactForm,
    Newsletterform
  },
  data () {
    return {
      form: {
        email: '',
        name: '',
        message: '',
        projectType: null,
        projectChecked: []
      },
      projectTypes: [{ text: 'Select One', value: null }, 'Website', 'Logo', 'Package Design', 'Illustration'],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.email = ''
      this.form.name = ''
      this.form.message = ''
      this.form.projectType = null
      this.form.projectChecked = []
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
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
.form-container {
  padding: 2vh 2vw;
  @media only screen and (max-width: 576px) {
    padding: 2vh 4vw;
  }
  h3 {
    padding: 2vh 0;
  }
}
.quote-container {
  display: flex;
  .quote-box {
    padding-bottom: 6vh;
    @media only screen and (max-width: 576px) {
    padding: 2vh 4vw 6vh 4vw;
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
.dj-all-rights-reserved {
  color: white;
  padding: 4vh 2vh;
  font-size: .8em;
}
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: $dj-white;
  background-clip: padding-box;
  border: 0px solid rgba(0, 0, 0, 0.2);
  border-radius: 0;
  outline: 0;
  input {
    margin-bottom: 1vh;
  }
  .form-control-lg {
    padding: 0.5rem 1rem;
    font-size: 1.2em;
    line-height: 1.3;
    border-radius: 0;
  }
  .custom-select {
    display: inline-block;
    width: 100%;
    padding: 0.375rem 1.75rem 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: $dj-gray;
    vertical-align: middle;
    border-radius: 0;
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
    color: $dj-white;
  }
}
.hidden {
  display: none;
}
</style>
