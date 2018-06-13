<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    <psf-header></psf-header>
    <!--<psf-content></psf-content>-->
    <router-view class="contentzero" />
    <psf-footer></psf-footer>
  </div>
</template>

<script>
  import PsfHeader from '@/components/psfheader'
  // import PsfContent from '@/contentsbox/indexcontent'
  import PsfFooter from '@/components/psffooter'
  import '@/selfpackage/reset.css'
export default {
  name: 'App',
  components:{
    PsfHeader,
    // PsfContent,
    PsfFooter
  },

  methods:{

  }
}
</script>

<style lang="scss">
  $domwidth:1333px;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  width: 100%;
  min-width: $domwidth;
}
body{
  width: 100%;
  min-width: $domwidth;
}

.contentzero{
  padding: 50px 0;
}
</style>
