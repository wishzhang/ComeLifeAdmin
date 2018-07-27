<template>
  <form>

    <div class="form-group">
      <label for="exampleFormControlTextarea1">内容</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" style="overflow: auto" rows="10"
                required v-model="content"></textarea>
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput2">作者</label>
      <input type="email" class="form-control" id="exampleFormControlInput2" required v-model="author">
    </div>
    <button type="button" class="btn btn-primary" @click="postData">Submit</button>
  </form>
</template>

<script>
  import axios from 'axios'
  import api from '@/api/api.js'

  export default {
    name: "Add",
    props:['columes','item','index'],
    data() {
      return {
        content: '',
        author: ''
      }
    },
    methods: {
      postData() {
        axios.post(api.HOST + '/addSentence', {
          content: this.content,
          author: this.author
        })
          .then(function (res) {
            var r = res.data;
            if (r.code === 0) {
              alert('提交成功');
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
