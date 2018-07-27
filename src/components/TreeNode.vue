<template>
  <div v-if="treeData.rootOpen" @click="toggle">
    <div class="item"  @click="toggle">
      <span v-if="treeData.name" :class="{fontbold:isFolder()}">{{treeData.name}}</span>
      <span v-if="open&&treeData.name&&isFolder()">∨</span>
      <span v-else-if="treeData.name&&isFolder()">＜</span>
    </div>
    <div  v-if="isFolder()" v-show="true">
      <template  v-for="item in treeData.children">
        <tree-node :treeData="item"></tree-node>
      </template>
    </div>
  </div>
  <div v-else>
    <div  :class="[isFolder()?itemClass:itemChildClass]"  @click="toggle">
      <div class="item-click d-flex justify-content-between" @click="turnTo(treeData.to)">
     <span  v-if="treeData.name" :class="{fontbold:isFolder()}" >{{treeData.name}}</span>
      <span v-if="open&&isFolder()">∨</span>
      <span v-else-if="isFolder()">＞</span>
      </div>
    </div>
    <div  v-if="isFolder()" v-show="open">
      <template  v-for="item in treeData.children">
        <tree-node :treeData="item"></tree-node>
      </template>
    </div>
  </div>
</template>

<script>
    export default {
      name:'tree-node',
      props: ['treeData'],
      data(){
        return{
          open:false,
          itemClass:'item',
          itemChildClass:'item-child'
        }
      },
      methods: {
        isFolder() {
          if (this.treeData.children&&this.treeData.children.length) {
            return true;
          }
          return false;
        },
        toggle(){
          if(this.isFolder()){
            this.open=!this.open;
          }
        },
        turnTo(toUrl){
          if(!this.isFolder()){
            this.$router.push(toUrl);
          }

        }
      }
    }
</script>

<style scoped>
  .fontbold {
    font-weight: bold;
  }

  .item{
    font-size:12px;
    background-color:#4c4c4c;
    color:white;
    margin:0;
    border-bottom: 1px solid black;
    padding: 10px;
  }

  .item:hover{
    cursor: pointer;
    background-color: #aaaaaa;
  }

  .item-child{
    background-color:#666666;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 30px;
    border-bottom: 0.1px solid black;
    color:white;
  }

  .item-child:hover{
    background-color: #aaaaaa;
    cursor:pointer;
  }

  .item-click{
    width:100%;
    height:100%;
  }
</style>
