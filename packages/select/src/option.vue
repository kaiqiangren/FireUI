<template>
    <div class="fe-option">
        <template v-if="!label">
            <slot></slot>
        </template>
        <span v-else>{{label}}</span>
    </div>
</template>

<script>
    export default {
        name: "FeOption",
        props:{
            label:String,
            value:[String,Number,Object]
        }
    }
</script>

<style scoped>

</style>