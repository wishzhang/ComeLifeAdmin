import Vue from 'vue'
import Router from 'vue-router'
import Grid from '@/components/grid/Grid.vue'
import Add from '@/components/grid/Add.vue'
import Edit from '@/components/grid/Edit.vue'
import Check from '@/components/grid/Check.vue'
import Sentence from '@/components/Sentence'
import Report from '@/components/Report'
import MainHeader from '@/components/MainHeader'
import Tree from '@/components/Tree'

Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/sentence',
      components: {
        mainHeader:MainHeader,
        mainContent: Sentence
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
          path: 'gridCheck',
          name: 'gridCheck',
          components: {
            grid: Check
          },
          props: {
            grid: true
          }
        }, {
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
        mainHeader:MainHeader,
        mainContent:Report
      }
    },{
      path:'/tree',
      components:{
        mainHeader:MainHeader,
        mainContent:Tree
      }
    }
  ]
})

router.push({name:'gridView'})

export default router
