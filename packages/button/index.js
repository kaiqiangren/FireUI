import FeButton from "./src/button.vue"

FeButton.install = function(Vue) {
    Vue.component(FeButton.name, FeButton);
};

export default FeButton