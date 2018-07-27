<template>
  <div class="table-responsive">
    <li class="btn btn-primary" @click="add()">添加</li>
    <table class="table table-striped table-sm">
      <thead>
      <tr>
        <th v-for="item in columes">{{item.title}}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in data">
        <td>{{index+1}}</td>
        <td v-for="(c,i) in columes" v-if="c.key!=='order'">
           {{item[c.key]}}
        <td>
          <li class="btn btn-primary" @click="check(columes,item,index)">查看</li>
          <li class="btn btn-primary" @click="edit(columes,item,index)">编辑</li>
          <li class="btn btn-primary" @click="remove(columes,item,index)">删除</li>
        </td>
      </tr>
      </tbody>
    </table>
    <router-view name="gridAdd"></router-view>
  </div>
</template>

<script>
  import axios from 'axios'
  import api from '@/api/api.js'

  export default {
    name: "grid",
    data() {
      return {
        columes: [
          {
            title: '序号',
            key: 'order'
          }, {
            title: '内容',
            key: 'content'
          }, {
            title: '作者',
            key: 'author'
          }
        ],
        data: []
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      add(columes, item, index) {
        this.$router.push({name: 'gridAdd',params: {columes, item, index}})
      },
      check(columes, item, index) {
        this.$router.push({name: 'gridCheck', params: {columes, item, index}})
      },
      edit(columes, item, index) {
        this.$router.push({name: 'gridEdit', params: {columes, item, index}})
      },
      remove(columes, item, index) {
        var _this = this;
        axios.post(api.HOST + '/delSentence', {
          _id: item._id
        })
          .then(function (response) {
            var r = response.data;
            if (r.code === 0) {
              _this.fetchData();
            } else {
              alert('删除失败');
            }
          })
          .catch(function (error) {
            alert('删除失败');
          });
      },
      fetchData() {
        var _this = this;
        axios.post(api.HOST + '/getSentences')
          .then(function (response) {
            var r = response.data;
            if (r.code === 0) {
              _this.data = r.data;
            } else {
              alert('句子迷获取失败');
            }
          })
          .catch(function (error) {
            alert('句子迷获取失败');
          });
      }
    }
  }
</script>

<style scoped>

</style>
