<template>
    <div>
        <fe-button @click="handleClick" type="primary">
            按钮测试
        </fe-button>
        <fe-button disabled @click="handleClick" type="primary">
            按钮测试
        </fe-button>
    </div>
</template>

<script>
    import "../packages/theme/index";
    import FeButton from "../packages/button/src/button";
    export default{
        components: {FeButton},
        name: '',
        data(){
            return {}
        },
        methods: {
            handleClick(e){
                console.log(e)
            }
        }
    }

</script>