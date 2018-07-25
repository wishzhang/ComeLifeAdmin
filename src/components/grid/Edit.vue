<template>
  <form>
    <div class="form-group">
      <label for="exampleFormControlInput1">序号</label>
      <input readonly='readonly' type="email" class="form-control" id="exampleFormControlInput1" v-model="index1">
    </div>

    <div class="form-group">
      <label for="exampleFormControlTextarea1">内容</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" style="overflow: auto" rows="10"
                required v-model="item.content"></textarea>
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput2">作者</label>
      <input type="email" class="form-control" id="exampleFormControlInput2" required v-model="item.author">
    </div>
    <button type="button" class="btn btn-primary" @click="postData">Submit</button>
  </form>

</template>

<script>
  import axios from 'axios'
  import api from '@/api/api.js'
  export default {
    name: "Edit",
    props:['columes','item','index'],
    data(){
      return{
        index1:this.index+1
      }
    },
    methods:{
      postData() {
        axios.post(api.HOST+'/editSentence', {
          _id:this.item._id,
          content: this.item.content,
          author: this.item.author
        })
          .then(function (res) {
            var r = res.data;
            if (r.code === 0) {
              alert('修改成功');
            } else {
              alert('修改失败');
            }
          })
          .catch(function (err) {
            alert('修改失败');
          })
      }
    }
  }
</script>

<style scoped>

</style>
