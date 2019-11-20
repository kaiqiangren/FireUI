<template>
    <div class="fe-select" v-clickoutside="handleClickoutside">
        <div class="fe-select-input">
            <div @click="handleClick">abc</div>
        </div>
        <transition name="dropdown-from-top">
            <div v-if="show">
                <div class="fe-arrow-up">

                </div>
                <div class="fe-select-dropdown">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import Clickoutside  from "../../../src/dom/clickoutside";
    export default {
        name: "FeSelect",
        data() {
            return {
                show: false
            }
        },
        props: {},
        directives:{Clickoutside},
        methods: {
            handleClick() {
                this.show = !this.show;
            },
            handleClickoutside(){
                console.log("clickoutside")
            }
        },
        mounted() {
            // console.log(this.$slots)
        }
    }
</script>
