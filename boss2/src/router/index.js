import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import Jeu from '@/components/Jeu'
import Fiche from '@/components/Fiche'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/jeu',
      name: 'Jeu',
      component: Jeu
    },
    {
      path: '/fiche/:id',
      name: 'fiche',
      component: Fiche
    }
  ]
})
