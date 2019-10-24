<template>
    <button
            :type="nativeType"
            class="fe-button"
            @click="handleClick"
            :class="[
          type ? 'fe-button--' + type : '',
          buttonSize ? 'fe-button--' + buttonSize : '',
          {
            'is-disabled': disabled,
            'is-loading': loading
          }
        ]"
    >
        <slot></slot>
    </button>
</template>
<script>
    export default{
        name: 'FeButton',
        props: {
            type: {
                type: String,
                default: "primary"
            },
            buttonSize: {
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
        methods: {
            handleClick(e){
                this.$emit("click",e);
            }
        }
    }
</script>