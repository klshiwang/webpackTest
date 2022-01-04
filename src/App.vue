<template>
    <div >
        <h1>app.vue 页面</h1>
        <!-- 自动焦点的指令 -->
        <input type="text"  v-focus>

        <!-- 控制字体颜色的指令 -->
        <p v-font-color="fontColor">自定义指令控制字体的颜色</p>
        <ul>
            <li v-for="(item,index) in list" :key="index">{{item}}</li>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'VuetestApp',
    // 局部自定义指令
    directives:{
        'fontColor':{
            inserted(el,binding,vnode) {
                el.style.color = binding.value
            }
        }
    },
    data() {
        return {
            fontColor:'blue',
            list:['javascript','html','css']
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style >

</style>