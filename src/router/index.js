import Vue from 'vue'
import Router from 'vue-router'
import Grid from '../components/grid/Grid.vue'
import Add from '../components/grid/Add.vue'
import Edit from '../components/grid/Edit.vue'
import Check from '../components/grid/Check.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        grid: Grid
      },
    }, {
      path: '/gridCheck',
      name:'gridCheck',
      components: {
        grid: Check
      },
      props:{
        grid:true
      }
    }, {
      path: '/gridAdd',
      name:'gridAdd',
      components: {
        grid: Add
      },
      props:{
        grid:true
      }
    }, {
      path: '/gridEdit',
      name:'gridEdit',
      components: {
        grid: Edit
      },
      props:{
        grid:true
      }
    }
  ]
})
