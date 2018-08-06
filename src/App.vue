<template>

  <el-container id="app">
    <el-aside width="200px">

      <el-col :span="24">
        <h3 class="el-navbar-header">荧幕星光</h3>
        <el-menu
          default-active="sentence/gridView"
          :router="true"
          class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item :index="{name:'gridView'}">句子迷</el-menu-item>
            <el-menu-item :index="{name:'user'}">用户</el-menu-item>
            <el-menu-item :index="{name:'feedback'}">反馈与建议</el-menu-item>
            <el-menu-item index="1-4">选项4</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view name="index"></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
  import SideNavbar from '@/components/SideNavbar'

  export default {
    name: 'App',
    components: {
      SideNavbar
    }
  }
</script>

<style scoped>

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    /*text-align: center;*/
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*text-align: center;*/
    /*line-height: 160px;*/
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-navbar-header {
    height: 60px;
    line-height:60px;
    margin:0;
    text-align: center;
  }
</style>
