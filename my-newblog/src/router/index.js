import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import IndexContent from '@/contentsbox/indexcontent'
import UsefulurlsContent from '@/contentsbox/usefulurlscontent'
import BeautifulPics from '@/contentsbox/beautifulpics'
import NoteBox from '@/contentsbox/notebox'
import DoNewnote from '@/contentsbox/donewnote'


Vue.use(Router)

export default new Router({
  routes: [
   /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      path: '/',
      name: 'index',
      component: IndexContent
    },
    {
      path: '/usefulurls',
      name: 'usefulurls',
      component: UsefulurlsContent
    },
    {
      path: '/beautifulpics',
      name: 'beautifulpics',
      component: BeautifulPics
    },
    {
      path: '/notebox',
      name: 'notebox',
      component: NoteBox
    },
    {
      path: '/donewnote',
      name: 'donewnote',
      component: DoNewnote
    },

  ]
})
