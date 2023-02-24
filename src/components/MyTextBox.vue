<template>
    <div>
        <input type="text" v-model="textValue" @change="validate()">
        <label class="hint-text" v-if="hint">{{hint}}</label>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                textValue: null,
                hint:""
            }
        },
        methods:{
            validate(){
                if(this.textValue.length <= 0){
                    this.hint="Value cannot be empty"
                }else{
                    this.$emit('input', this.textValue)
                }
            }
        }
    }
</script>

<style scoped>
.hint-text{
    color: red;
    font-size: 10px;
}
</style>