<template>
  <div>
    <h1>Welcome to the Home page!</h1>
    <p>This is the content of the Home page.</p>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        message: "Hello, World!",
      }
    },
    methods: {
      greet() {
        console.log(this.message)
      },
    },
  }
</script>

<style scoped></style>
