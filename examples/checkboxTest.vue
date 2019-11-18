<template>
    <div>
        <fe-checkbox :checked="true">选项</fe-checkbox>
    </div>
</template>

<script>
    import "../packages/theme/index";
    import FeCheckbox from "../packages/checkbox/src/checkbox.vue";
    export default {
        name: "checkboxTest",
        components:{
            FeCheckbox
        }
    }
</script>
