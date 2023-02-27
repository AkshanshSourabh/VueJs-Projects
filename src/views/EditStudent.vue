<template>
    <div align="center" style="padding:10%">
        <input type="number" v-model="student.id" placeholder="Enter id"><br>
        <input type="text" v-model="student.name" placeholder="Enter name"><br>
        <input type="text" v-model="student.grade" placeholder="Enter grade"><br>
        <br>
        <button @click="saveStudent()">Save</button>
        <button @click="$router.go(-1)">Cancel</button>
    </div>
    </template>
    
    <script>
    import studentsList from "@/data/students.json"
    export default {
        data() {
            return {
                students: studentsList,
                student: { id: 0, name: "", grade: "C" },
                id: 0
            }
        },
        mounted(){
            this.id = this.$route.params.id
            if(this.id>0){
                this.student = this.students.find(rec => rec.id == this.id)
            }
        },
        methods: {
            saveStudent() {
                //this.$router.push({name:"Students", params:{entity:this.student, add:this.id > 0 ? false : true}})
                this.$router.push({path:"/students", query:{entity:this.student, add:this.id > 0 ? false : true}})
            }
        },
    }
    </script>