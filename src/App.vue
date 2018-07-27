<template>
  <div id="app" class="h-100">
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
      <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#">Sign out</a>
        </li>
      </ul>
    </nav>

    <div class="container-fluid" style="height:calc(100% - 36px)">
      <div class="row h-100">
        <div class="col-md-2 d-md-block px-0 h-100 app-sidebar">
          <SideNavbar></SideNavbar>
        </div>
        <div class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <router-view name="mainHeader"></router-view>
          <router-view name="mainContent"></router-view>
        </div>

      </div>
    </div>
  </div>

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
  .app-sidebar{
    background-color:#4c4c4c;
    position: relative;
  }
</style>
