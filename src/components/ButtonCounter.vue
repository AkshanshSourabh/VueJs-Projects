<template>
  <div>
      <button class="orange" @click="counter++">You clicked {{counter}}</button>
  </div>
</template>

<script>
  export default {
      data() {
          return {
              counter: 0
          }
      },
  }
</script>

<style scoped>
.orange{
  background-color: orange !important;
}
</style>