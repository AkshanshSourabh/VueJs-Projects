
<template>
    <div>
        <div style="float:right">Rs. {{item.price}}/-</div>
        <h1>{{item.name}}</h1>
        <h5>{{item.id}}</h5>
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