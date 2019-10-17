<template>
    <button :type="nativeType" class="fe-button">
        <slot></slot>
    </button>
</template>
<script>
    export default{
        name: 'FeButton',
        props: {
            type: {
                type: String,
                default: ""
            },
            loading: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            nativeType: {
                type: String,
                default: "button"
            }
        },
        methods: {}
    }
</script>