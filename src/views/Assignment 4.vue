<template>
    <div>
    <!-- index will make this array entry unique even if we have the duplicTE ENTRIES -->
    <!-- also if we want to access from the 5th element of array then we can write index + 5 -->
      <h1>Books Details</h1>
      <ul>
        <li v-for="item in books" :key="item.id">
          {{item.id}} - {{ item.Bname }} written by {{ item.Aname }} with {{ item.pages }} pages is {{ item.Availability }}
        </li>
      </ul>
      <br>
      <center>
      <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Author Name</th>
            <th>Page Count</th>
            <th>Availability</th>
          </tr>
          <tr v-for="item in books" :key=""item.id>
            <td>
            {{ item.id }}
            </td>
            <td>{{ item.Bname }}</td>
            <td>{{ item.Aname }}</td>
            <td>{{ item.pages }}</td>
            <td>{{ item.Availability }}</td>
          </tr>
  
  
      </table>
      </center>
  
  
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          books: [
                  { id: 1, Bname: "Orange", Aname: "Peter", pages: 35, Availability: "Available" },
                  { id: 2, Bname: "Banana", Aname: "Max", pages: 45, Availability: "Issued"},
                  { id: 3, Bname: "Apple", Aname: "Sebasian", pages: 56, Availability: "Issued" },
              ]
        }
      },
    }
  </script>
  
  <style lang="scss" scoped>
  table, th, td {
    border: 1px solid black;
  }
  </style>