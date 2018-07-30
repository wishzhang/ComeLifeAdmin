<template>
  <el-form label-position="right" label-width="80px" :model="item">
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
      <el-button type="primary" :loading="false" style="width:100%;" @click="postData">确定提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import axios from 'axios'
  import api from '@/api/api.js'

  export default {
    name: "Add",
    data() {
      return {
        item:{
          content: '',
          author: ''
        }
      }
    },
    methods: {
      postData() {
        var _this=this;
        axios.post(this.API.HOST + '/addSentence', {
          content: this.item.content,
          author: this.item.author
        })
          .then(function (res) {
            var r = res.data;
            if (r.code === 0) {
              alert('提交成功');
              _this.$router.go(-1);
            } else {
              alert('提交失败');
            }
          })
          .catch(function (err) {
            alert('提交失败');
          })
      }
    }
  }
</script>

<style scoped>

</style>
