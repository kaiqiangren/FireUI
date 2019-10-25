<template>
    <div>
        <fe-button
        >
            按钮测试
        </fe-button>
    </div>
</template>
<style lang="scss">
    @import "../packages/theme/src/button.scss";
</style>
<script>
    import FeButton from "../packages/button/src/button";
    export default{
        components: {FeButton},
        name: '',
        data(){
            return {}
        },
        methods: {},
        mounted: function () {


        }
    }

</script>