
<template>
  <div>
    <el-button type="primary" style="margin-bottom: 10px;" @click="add">添加</el-button>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="序号"
        type="index">
      </el-table-column>

      <el-table-column
        label="内容"
        width="580">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ scope.row.content }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.content&&scope.row.content.substr(0,30) }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column
        label="作者"
        width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: []
      }
    },
    created: function () {
      this.fetchData();
    },
    methods: {
      handleEdit(index, row) {
        this.$router.push({name: 'gridEdit', params: {index, row}})
      },
      handleDelete(index, row) {
        this.remove(row)
      },
      fetchData() {
        var _this = this;
        this.axios.post(_this.API.HOST + '/getSentences')
          .then(function (response) {
            var r = response.data;
            if (r.code === 0) {
              _this.tableData = r.data;
            } else {
              alert('句子迷获取失败');
            }
          })
          .catch(function (error) {
            alert('句子迷获取失败');
          });
      },
      add() {
        this.$router.push({name: 'gridAdd'})
      },
      remove(item) {
        var _this = this;
        this.axios.post(this.API.HOST + '/delSentence', {
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
      }
    }
  }
</script>
