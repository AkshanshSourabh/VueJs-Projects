<template>
    <div>
      <h1>Life Cycle Hooks</h1>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          counter: 0
        }
      },
      beforeCreate () {
        console.log("Before Create" + this.counter);
      },
  
      created () {
              console.log("Before Create" + this.counter);
      },
      mounted () {
        console.log("Mounted");
      },
      
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>