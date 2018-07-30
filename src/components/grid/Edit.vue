<template>
  <el-form :label-position="labelPosition" label-width="80px" :model="item">
    <el-form-item label="序号">
      <el-input v-model="item.index" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="内容">
      <el-input
        type="textarea"
        :rows="10"
        placeholder="请输入内容"
        v-model="item.content">
      </el-input>
    </el-form-item>
    <el-form-item label="作者">
      <el-input v-model="item.author"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="false" style="width:100%;" @click="postData">确定修改</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
  import axios from 'axios'
  import api from '@/api/api.js'
  export default {
    name: "Edit",
    props:['row','index'],
    data() {
      return {
        labelPosition: 'right',
        item: {
          index:this.index+1,
          ...this.row
        }
      };
    },
    methods:{
      postData() {
        var _this=this;
        axios.post(this.API.HOST+'/editSentence', {
          _id:this.item._id,
          content: this.item.content,
          author: this.item.author
        })
          .then(function (res) {
            var r = res.data;
            if (r.code === 0) {
              alert('修改成功');
              _this.$router.go(-1);
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
