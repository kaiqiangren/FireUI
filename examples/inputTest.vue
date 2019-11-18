<template>
    <div>
        <fe-input v-model="model"
                  :autofocus="true"
                  :disabled="true"
        >
            <div slot="prefix">123</div>
        </fe-input>

    </div>
</template>

<script>
    import "../packages/theme/index";
    import FeInput from "../packages/input/src/input.vue";
    export default {
        name: "inputTest",
        data(){
            return {
                model:""
            }
        },
        watch:{
            model(val){
                console.log(val)
            }
        },
        components:{
            FeInput
        }
    }
</script>
