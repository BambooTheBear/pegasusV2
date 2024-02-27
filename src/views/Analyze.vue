<template>
  <div>
    <h1 class="bg-red-500">Welcome to the Home page!</h1>
    <p>This is the content of the Home page.</p>
  </div>
</template>

<script>
  export default {
    name: "Analyze",
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
