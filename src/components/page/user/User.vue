<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="序号"
      type="index"
      width="80">
    </el-table-column>

    <el-table-column
      property="_id"
      label="user_id"
      width="250">
    </el-table-column>

    <el-table-column
      property="name"
      label="用户名"
      width="200">
    </el-table-column>

    <el-table-column
      property="password"
      label="密码"
      width="200">
    </el-table-column>

    <el-table-column
      property="time"
      label="注册时间"
      width="200">
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: []
      }
    },
    created: function () {
      this.fetchData()
    },
    methods: {
      fetchData() {
        var _this = this;
        this.axios.post(this.API.HOST + '/getAllUser')
          .then(function (res) {
            var r = res.data;
            if (r.code === 0) {
              if (r.data.length !== 0) {
                r.data = r.data.map(function (obj) {
                  obj.name = obj.username || obj.nickName;
                  return obj;
                })
                r.data = _this.util.jokesConvertTime(r.data, 'time')
                _this.tableData = r.data;

              } else {
                alert('空')
              }
            } else {
              alert('服务器内部错误')
            }
          })
          .catch(function (err) {
            console.log(err)
            alert('连接服务器出错')
          })
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
        var _this = this;
        this.axios.post(this.API.HOST + '/delUser', {
          user_id: row._id
        })
          .then(function (res) {
            var r = res.data;
            if (r.code === 0) {
              _this.fetchData();
            } else {
              alert('服务器内部出错')
            }
          })
          .catch(function (err) {
            console.log(err);
            alert('连接服务器出错')
          })
      }
    }
  }
</script>
