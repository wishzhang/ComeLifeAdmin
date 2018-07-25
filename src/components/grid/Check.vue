<template>
  <form>
    <div v-for="(obj,i) in columes" class="form-group row border">
      <label class="col-sm-1 col-form-label">{{obj.title}}</label>
      <div v-if='i===0' class="col-sm-11 d-flex align-items-center">
        <p class="m-0">{{index+1}}</p>
      </div>
      <div v-else class="col-sm-11 d-flex align-items-center">
        <p class="m-0">{{item[obj.key]}}</p>
      </div>
    </div>
  </form>

</template>

<script>
  export default {
    name: "Check",
    props:['columes','item','index']
  }
</script>

<style scoped>

</style>
