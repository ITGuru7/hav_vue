<template>
  <v-app id="app">
    <nav-bar id="header"></nav-bar>
    <main class="t-height"  v-scroll="onScroll" id="topScroll">
      <div>
          <router-view></router-view>
      </div>
      <v-btn fab dark fixed right bottom class="bg-kk-btn" v-if="offsetTop >= 500" v-model="topScrollBtn" v-scroll-to="{el:'#topScroll',offset: 0}">
      <i class="material-icons">keyboard_arrow_up</i>
        <!--{{ offsetTop }}-->
    </v-btn>
    </main>

  </v-app>
</template>

<script>
  import 'babel-polyfill'
  import NavBar from './components/Header.vue'
  export default {
    data () {
      return {
        presets: ['@babel/preset-env'],
        offsetTop: 0,
        topScrollBtn: false
      }
    },
    methods: {
      onScroll (e) {
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      }
    },
    components: {
      'nav-bar': NavBar
    }
  }
</script>

<style lang="stylus">
</style>


