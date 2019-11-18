<template>
    <div class="fe-input">
        <div class="fe-input-prefix" v-if="$slots.prefix">
            <slot name="prefix"></slot>
        </div>
        <input
                v-model="selfModel"
                class="fe-input-native"
                :class="{'is-focus':isFocus,'is-disabled':isDisabled}"
                :disabled="isDisabled"
                :readonly="isReadonly"
                :type="type"
                :maxlength="maxlength"
                :minlength="minlength"
                :placeholder="placeholder"
                :autofocus="autofocus"
                :tabindex="tabindex"
                :autocomplete="autocomplete"
                :form="form"
                :step="step"
                :resize="resize"
                @focus="handleFocus"
                @blur="handleBlur"
                @input="handleInput"
                @change="handleChange"
        />
        <div class="fe-input-suffix"  v-if="$slots.suffix">
            <slot name="suffix"></slot>
        </div>
    </div>

</template>

<script>
    export default {
        name: "FeInput",
        data() {
            return {
                selfModel:"",
                isFocus:false
            }
        },
        props: {
            value: [String, Number],
            type:{
              type:String,
              default:"text"
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            maxlength:[String, Number],
            minlength:[String, Number],
            placeholder:String,
            autofocus:Boolean,
            tabindex:String,
            autocomplete:String,
            form:String,
            step:String,
            resize:String
        },
        computed:{
            isDisabled(){
                return this.disabled
            },
            isReadonly(){
                return this.readonly
            }
        },
        methods: {
            handleInput(e){
                this.$emit("input", this.selfModel, e)
            },
            handleChange(e) {
                this.$emit("change", this.selfModel, e)
            },
            handleFocus(e){
                this.isFocus = true;
                this.$emit("focus", this.selfModel, e)
            },
            handleBlur(e){
                this.isFocus = false;
                this.$emit("blur", this.selfModel, e)
            }
        }
    }
</script>