<template>
    <div>
        <div style="float:right; font-size:24px">{{item.grade}}</div>
        <h1>{{item.name}}</h1>
        <h5>{{item.id}}</h5>
        <div align="right">
            <button @click="$router.push('/editStudent/'+item.id)">Edit</button>
            <button @click="$emit('delete')">Delete</button>
        </div>
        <hr>
    </div>
</template>

<script>
    export default {
        props:['item']    
    }
</script>

<style scoped>
h1{
    font-size: 16px;
}
h5{
    font-size: 12px;
}
</style>