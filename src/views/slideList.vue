<template>
  <div class="home">
    <div class="aside-bar">
      <ul>
        <li  v-for="(item,index) in itemList" :key="index" :class="{active:item.title===selected}" @click="activeItem(item.title)"><a :href="'#'+item.title">{{item.title}}</a></li>
        
      </ul>
    </div>
    <div class="content">
      <ul>
        <li v-for="(item,index) in itemList" :key="index">
          <a class="title" :id="item.title" href="#">{{item.title}}</a>
          <p>{{item.content}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>



export default {
  name: 'Home',
  components: {
  },
  data(){
    return {
      selected:'item0',
      itemList:[
        {
          title:'',
          content:''
        }
      ]
    }
  },
  mounted(){
    
    for(let i =0;i<50;i++ ){
      // console.log("item"+i);
      this.itemList.push(
        {
          title:"item"+i,
          content:`item${i},内容Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus alias rerum sit quaerat totam voluptates laboriosam aliquid dolor quas dolorem. Ea sunt alias veritatis qui culpa dolorum, eveniet debitis ipsa!`
          
        }
      )
    }
  },
  methods:{
    activeItem(item){
      this.selected = item
    }
  }
}
</script>

<style lang="scss" scoped>

  .home{
    display: flex;
    justify-content: center;
    height: 100%;
    
  }
  .aside-bar{
    // flex: 1;
    width: 300px;
    height: 100%;
    background-color: lightgray;
    overflow-y: scroll;
    ul{
      li{
        a{
          padding: 5px 0;
          display: block;
          height: 100%;
        }
      }
    }
  }
  .content{
    flex: 1;
    overflow-y: scroll;
    text-align: left;
    .title{
      font-size: 22px;
    }
  }
  .active{
    a{
      color: #f90 ;
    }
    
    border-right: 2px solid #f90;
    // background-color: #f90;
  }
</style>
