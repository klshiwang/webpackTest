import {
    name,
    age
} from './add.js'
console.log(name, age)

var name = "小李"
var vm = new Vue({
    el: "#app",
    data: {
        name,
        age
    }
});