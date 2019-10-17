<template>
    <div class="fe-button">
        <button type="native-type">
            <slot></slot>
        </button>
    </div>
</template>
<script>
    export default{
        name: 'FeButton',
        props:{
            type:{
                type:String,
                default:""
            },
            loading:{
                type:Boolean,
                default:false
            },
            disabled:{
                type:Boolean,
                default:false
            },
            "native-type":{
                type:String,
                default:"button"
            }
        },
        data(){
            return {}
        },
        methods: {},
        mounted: function () {


        }
    }

</script>