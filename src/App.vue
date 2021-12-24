<template>
    <div>
        app.vue 页面
        <ul>
            <li v-for="(item,index) in list" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'VuetestApp',

    data() {
        return {
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