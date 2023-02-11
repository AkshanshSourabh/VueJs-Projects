<template>
    <div>
      <input type ="text" v-model = "user">
      <h1>Hello World, {{ user }}</h1>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          user: 'Akshansh Sourabh'
        }
      },
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>