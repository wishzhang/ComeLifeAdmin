import Vue from 'vue'
import Router from 'vue-router'
import Grid from '@/components/grid/Grid.vue'
import Add from '@/components/grid/Add.vue'
import Edit from '@/components/grid/Edit.vue'
import Sentence from '@/components/Sentence'
import Report from '@/components/Report'
import Tree from '@/components/Tree'
import User from '@/components/page/user/User'
import Feedback from '@/components/page/feedback/Feedback'

Vue.use(Router)

const router= new Router({
  routes: [
    {
      path:'/',
      redirect:{
        name:'gridView'
      }
    },
    {
      path: '/sentence',
      components:{
        index:Sentence
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
      name:'user',
      path:'/user',
      components:{
        index:User
      }
    },
    {
      name:'feedback',
      path:'/feedback',
      components:{
        index:Feedback
      }
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
