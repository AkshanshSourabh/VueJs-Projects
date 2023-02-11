<template>
    <div>
      <ul>
        <li v-for="(str,index) in frameworks" :key="index">
            {{index}} - {{str}}</li>

    <!-- index will make this array entry unique even if we have the duplicTE ENTRIES -->
    <!-- also if we want to access from the 5th element of array then we can write index + 5 -->
      </ul>
      <h1>Object Array</h1>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.name }} Rs.{{ item.price }}/-
        </li>
      </ul>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          frameworks : ['Angular', 'React', 'Vue', 'Expressjs', 'Vue'],
          items: [
                  { id: 1, name: "Orange", price: 24 },
                  { id: 2, name: "Banana", price: 12 },
                  { id: 3, name: "Apple", price: 15 },
              ],
          student: [
            { name: "saakshi mundada",age: 20, city: hyd }
          ]
        }
      },
    }
  </script>

  <style lang="scss" scoped>

  </style>