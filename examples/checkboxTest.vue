<template>
    <div>
        <fe-checkbox v-model="checkTest">选项1</fe-checkbox>
        <fe-checkbox v-model="checkTest" @change="handleChange">选项2</fe-checkbox>
    </div>
</template>

<script>
    import "../packages/theme/index";
    import FeCheckbox from "../packages/checkbox/src/checkbox.vue";
    export default {
        name: "checkboxTest",
        data(){
            return {
                checkTest:false
            }
        },
        methods:{
            handleChange(val){
                // console.log("test",val)
            }
        },
        components:{
            FeCheckbox
        }
    }
</script>
