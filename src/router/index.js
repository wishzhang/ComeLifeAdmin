import Vue from 'vue'
import Router from 'vue-router'
import Grid from '@/components/grid/Grid.vue'
import Add from '@/components/grid/Add.vue'
import Edit from '@/components/grid/Edit.vue'
import Sentence from '@/components/Sentence'
import Report from '@/components/Report'
import Tree from '@/components/Tree'

Vue.use(Router)

const router= new Router({
  routes: [
    {
      path:'/',
      components: {
        grid: Grid
      }
    },
    {
      path: '/sentence',
      components:{
        Sentence
      },
      children: [
        {
          path: 'gridView',
          name:'gridView',
          components: {
            grid: Grid
          }
        },
       {
          path: 'gridAdd',
          name: 'gridAdd',
          components: {
            grid: Add
          },
          props: {
            grid: true
          }
        }, {
          path: 'gridEdit',
          name: 'gridEdit',
          components: {
            grid: Edit
          },
          props: {
            grid: true
          }
        }
      ]
    },
    {
      path:'/report',
      components:{
        mainContent:Report
      }
    },{
      path:'/tree',
      components:{
        mainContent:Tree
      }
    }
  ]
})

router.push({name:'gridView'})

export default router
