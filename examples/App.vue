<template>
    <div>
        <fe-button
        >
            按钮测试
        </fe-button>
        <fe-button
                disabled
        >
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
        methods: {},
        mounted: function () {


        }
    }

</script>