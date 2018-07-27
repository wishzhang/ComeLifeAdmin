<template>
  <Tree></Tree>
</template>

<script>
    import Tree from '@/components/Tree'

    export default {
        name: "SideNavbar",
        components:{
          Tree,
          sidebar:Tree
        }
    }
</script>

<style scoped>

</style>
