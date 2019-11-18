<template>
    <label class="fe-checkbox" :class="{'is-checked':checked}">
        <span class="fe-checkbox-inner"></span>
        <input
                class="fe-checkbox-native"
                :name="name"
                :readonly="readonly"
                :disabled="disabled"
                :checked="checked"
                type="checkbox"
        />
        <span class="fe-checkbox-label">
            <slot></slot>
        </span>
    </label>
</template>

<script>
    export default {
        name: "FeCheckbox",
        props: {
            name: String,
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            checked:{
                type: Boolean,
                default: false
            }
        }
    }
</script>