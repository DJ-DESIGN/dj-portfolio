<template>
<div>
  <form
  class="dj-form-style"
  name="Contact DJ"
  method="POST"
  netlify-honeypot="bot-field"
  action="/thank-you"
  netlify
  >
    <input
      id="djContactInputName"
      type="text"
      size="lg"
      required
      placeholder="Enter your name" />
    <input
      id="djContactInputEmail"
      type="email"
      placeholder="Enter your email"
      required
      />
    <textarea
      id="djContactInputTextarea"
      size="lg"
      placeholder="Enter your message"
      rows="3"
      max-rows="6"
    />
    <input type="hidden" name="Contact DJ" value="contact-form" />
  <b-button class="btn-block rounded-0 dj-sumbit-btn" type="submit">Submit</b-button>
  <p class="pt-4">Direct email: <a href="mailto:dj@derekjohnston.com">dj@derekjohnston.com</a></p>
  </form>
</div>
</template>

<script>
export default {
  name: 'DjContactForm',

  data () {
    return {
      form: {
        djContactInputName: '',
        djContactInputEmail: '',
        djContactInputTextarea: ''
      },
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
      /* Reset form values */
      this.form.djContactInputName = ''
      this.form.djContactInputEmail = ''
      this.form.djContactInputTextarea = ''
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped lang="scss">

.dj-form-style {
  border: 0;
  background-image: linear-gradient( #111111, #181818);
  background-color: #111111;
  padding: 2vh;
  border-radius: 0;
  margin-bottom: 5vh;
  p {
    color: $dj-white;
    a {
      color: $dj-white;
      :hover {
        text-decoration: none;
      }
    }
  }
  input::placeholder {
    color:$dj-blue;
    border-radius: 0;
  }
  input[type=text], input[type=email], select {
    color: $dj-blue;
    background-color: transparent;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border-top: 0;
    border-right: 0;
    border-left: 0;
    border-bottom: 2px solid $dj-white;
    border-radius: 0;
    &:hover, &.hover {
      border-bottom: 2px solid $dj-red;
      background-color: #000000;
      border-radius: 0;
    }
    &:focus, &.focus {
      color: $dj-blue;
      background-color: #000000;
      border-bottom: 2px solid $dj-red;
      border-radius: 0;
    }
  }
  textarea {
    background-color: transparent;
    border-radius: 0;
    border: solid 2px #ecebe7;
    &:hover {
      background-color: #000000;
    }
    &:focus, &.focus {
      color: $dj-blue;
      background-color: #000000;
      border: 2px solid $dj-red;
      border-radius: 0;
    }
  }
  textarea::-webkit-input-placeholder {
  color: $dj-blue;
  }
  textarea:-moz-placeholder { /* Firefox 18- */
  color: $dj-blue;
  }
  textarea::-moz-placeholder {  /* Firefox 19+ */
  color: $dj-blue;
  }
  textarea:-ms-input-placeholder {
  color: $dj-blue;
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
.hidden {
  display: none;
}
</style>
