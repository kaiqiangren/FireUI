<template>
    <label class="fe-checkbox" >
        <span class="fe-checkbox-inner" :class="{'is-checked':isChecked}"></span>
        <input
                class="fe-checkbox-native"
                :name="name"
                :readonly="readonly"
                :disabled="isDisabled"
                @change="handleChange"
                v-model="selfModel"
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
        data(){
            return {
                selfModel:false
            }
        },
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
        },
        computed:{
            isDisabled(){
                return  this.disabled
            },
            isChecked(){
                return this.checked || this.selfModel
            }
        },
        methods:{
            handleChange(e){
                this.$emit("change",e.target.checked,e)
            }
        }
    }
</script>