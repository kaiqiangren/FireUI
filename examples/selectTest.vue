<template>
    <div>
        <fe-select>
            <fe-option>选项1</fe-option>
            <fe-option>选项2</fe-option>
        </fe-select>
    </div>
</template>

<script>
    import "../packages/theme/index";
    import FeSelect from "../packages/select/src/select.vue";
    import FeOption from "../packages/select/src/option.vue";
    export default {
        name: "selectTest",
        components:{
            FeSelect,
            FeOption
        }
    }
</script>
