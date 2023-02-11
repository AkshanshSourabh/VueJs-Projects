<template>
    <div>
      <button @click="sayHello()">Click Me</button> <!-- @ is used for events in vue -->
      <h1>You presses button {{ counter }} times</h1>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          counter: 0
        }
      },
      methods: {
        sayHello() {
           console.log("Hello from method");
           this.counter++;        
        }
      },
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>
  
  <!-- //vbase is used for creating the whole block
  //vdata is used for creating data function -->