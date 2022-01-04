import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
// import './style.css'
Vue.prototype.$ = $
Vue.directive('focus', {
    bind(el, binding, vnode) {
        console.log("bind");
        
    },
    inserted(el, binding, vnode) {
        console.log("inserted");
        el.focus()
    },
    update(el, binding, vnode, oldVnode) {},
    componentUpdated(el, binding, vnode) {},
    unbind(el, binding, vnode) {},
});

new Vue({
    render:h => h(App)
}).$mount("#app")