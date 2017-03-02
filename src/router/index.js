import Vue from 'vue'
import Router from 'vue-router'
import TeamList from '../components/TeamList.vue'
import TeamDetailWrapper from '../components/TeamDetailWrapper.vue'
import About from '../components/About.vue'
import Home from '../components/Home.vue'
import NotFoundComponent from '../components/NotFoundComponent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/teams',
      component: TeamList
    },
    {
      path: '/teams/:id',
      components: {
        default: TeamList,
        detail: TeamDetailWrapper
      },
      props: {
        detail: true
      }
    },
    {
      path: '/about',
      component: About
    },
    { path: '*',
      component: NotFoundComponent
    }
  ]
})
