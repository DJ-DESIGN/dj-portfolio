<template>
  <div>
    <b-form
      name="newsletter"
      action="/thank-you/"
      method="post"
      data-netlify-honeypot="bot-field"
      class="dj-form-style"
    >
      <b-form-group
        id="djNewsletterInputGroup2"
        class="text-left"
      >
        <input
          type="hidden"
          name="newsletter"
          value="ask-another-question"
        >
        <p class="hidden">
          <label>Don’t fill this out:
            <input name="bot-field">
          </label>
        </p>
        <b-form-input
          id="djNewsletterInputName"
          type="text"
          size="lg"
          placeholder="Enter your name"
        />
      </b-form-group>
      <b-form-group
        id="djNewsletterInputGroup2"
        description="* I will never share your email with anyone else."
        class="text-left"
      >
        <b-form-input
          id="djNewsletterInputEmail"
          type="email"
          size="lg"
          placeholder="Enter your email"
        />
      </b-form-group>
      <b-button class="btn-block rounded-0 dj-sumbit-btn" type="submit">Sign me up!</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Newsletterform'
}
</script>

<style lang="scss" scoped>
.dj-form-style {
  border: 0;
  background-color: $dj-white;
  padding: 2vh;
  border-radius: 0;
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
    border-bottom: 2px solid $dj-gray;
    border-radius: 0;
    &:hover, &.hover {
      border-bottom: 2px solid $dj-red;
      border-radius: 0;
      background-color: white;
    }
    &:focus, &.focus {
      color: $dj-red;
      background-color: white;
      border-bottom: 2px solid $dj-red;
      border-radius: 0;
    }
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
