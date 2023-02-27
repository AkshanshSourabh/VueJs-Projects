<template>
    <div>
        <span style="float:right"><router-link to="/editStudent/0">Add</router-link></span>
        <h1>Student List</h1>
        <div align="center" v-if="msg" style="background-color:lightgreen; padding:2%">{{msg}}</div>
        <template v-for="student in students">
            <student-card :item="student" :key="student.id"></student-card>
        </template>
    </div>
</template>

<script>
import StudentCard from "@/components/StudentCard.vue"
import studentList from "@/data/students.json"
export default {
        components: {
            StudentCard,
        },
        data() {
            return {
                students: studentList,
                msg: ""
            }
        },
        mounted(){
            this.initComponent()
        }
    }
</script>