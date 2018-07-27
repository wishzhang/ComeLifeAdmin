<template>
  <tree-node :treeData="treeData"></tree-node>
</template>

<script>
  import TreeNode from '@/components/TreeNode'

  export default {
    name: "Tree",
    components: {
      'tree-node':TreeNode
    },
    data() {
      return {
        treeData: {
          name: '',
          rootOpen: true,
          children: [
            {
              name: '句子迷',
              children: [
                {
                  name: '我的句子',
                  to:'/sentence/gridView'
                }
              ]
            },
            {
              name: '表单',
              children: [
                {
                  name: '表单例子',
                  to:'/report'
                },
              ]
            },{
              name:'Tree',
              to:'/tree'
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>

</style>
