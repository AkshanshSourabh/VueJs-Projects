<template>
    <div>
      <h1>Computed Property Setter Example</h1>
      <input type="text" placeholder="Firstname" v-model="fname">
      <input type="text" placeholder="Lastname" v-model="lname">
      {{ fullName }}
      <br>
      <input type="text" placeholder="FullName" v-model="fullName">
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          fname: "",
          lname: ""
        }
      },
      computed: {
        /* fullName() {
          return this.fname+' '+this.lname 
        }, */
        fullName:{
          get(){
            return this.fname+' '+this.lname 
          },
          set(newValue){
            let name = newValue.split(' ')
            this.fname = name[0]
            this.lname = name[1]
          }
        }
      },
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>