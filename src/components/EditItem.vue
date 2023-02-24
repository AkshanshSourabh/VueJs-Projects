<template>
    <div>
        <input type="number" v-model="id">
        <input type="text" v-model="name">
        <input type="number" v-model="price">
        <button @click="saveItem()">Save</button>
        <button>Cancel</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: 0,
                name: "",
                price: 0
            }
        },
        methods: {
            saveItem() {
                console.log("Sending Event")
                this.$emit('save', {"id":this.id, "name":this.name, "price":this.price})
            }
        },
    }
</script>
<style scoped>
</style>