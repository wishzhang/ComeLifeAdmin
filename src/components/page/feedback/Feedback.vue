<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      type="index"
      label="序号"
      width="80">
    </el-table-column>
    <el-table-column
      label="_id"
      property="_id"
      width="200">
    </el-table-column>

    <el-table-column
      label="内容"
      width="300">

      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>{{ scope.row.feedbackContent }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.feedbackContent&&scope.row.feedbackContent.substr(0,30) }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      property="email"
      label="邮箱"
      width="200">
    </el-table-column>
    <el-table-column
      property="publishTime"
      label="提交时间"
      width="120">
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
    created(){
      this.fetchData();
    },
    methods: {
      fetchData(){
        var _this=this;
        this.axios.post(this.API.HOST+'/getFeedback')
          .then(function (res) {
            var r=res.data;
            if(r.code===0){
              if(r.data.length!==0){
                _this.tableData=r.data;
              }else{
                alert('空')
              }
            }else{
              alert('服务器内部出错')
            }
          })
          .catch(function (err) {
            console.log(err);
            alert('连接服务器出错')
          })
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
