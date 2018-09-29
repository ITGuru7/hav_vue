<template>
  <div>
    <div class="bg-white" id="cancelFil">
      <v-layout row wrap style="width: 100%; height: 545px; margin-top: -50px;overflow: hidden;" class="bg-primaryColor">
        <img  src="./../assets/header-bg/1.jpeg" style="opacity: 0.5" class="res-img">
      </v-layout>
      <v-layout row wrap text-md-left class="pa-3 white--text" style="position: absolute; top:90px;">
        <h3 class="pl-5 mt-4">Velkommen til din landsdækkende tilbudsvifte</h3>
        <select-search id="searcc"></select-search>
        <!--<v-flex xs12 md4 pa-4 text-xs-center text-md-left>-->
        <!--<h6>Leverandør side</h6>-->
        <!--<p>{{ para1 | truncate(500) }}</p>-->
        <!--<v-btn class="bg-kk-btn mt-0" v-scroll-to="{el:'#addaddScroll',offset: 5}">-->
        <!--Know more-->
        <!--<i class="material-icons" >arrow_forward</i>-->
        <!--</v-btn>-->
        <!--</v-flex>-->
        <!--<v-flex xs12 md4 pa-4 text-xs-center text-md-left>-->
        <!--<h6>Leverandør</h6>-->
        <!--<p>{{ para2 | truncate(500) }}</p>-->
        <!--<v-btn class="bg-kk-btn mt-0" v-scroll-to="{el:'#howScroll',offset: 5}">-->
        <!--Know more-->
        <!--<i class="material-icons">arrow_forward</i>-->
        <!--</v-btn>-->
        <!--</v-flex>-->
      </v-layout>
    </div>
    <div id="filterScroll"></div>
    <filter-div></filter-div>
    <!--v-if="isTypex"-->
    <search-result id="resultScroll"></search-result>
    <static-kk id="staticsScroll"></static-kk>
    <how-to id="howScroll"></how-to>
    <add-ad id="addaddScroll"></add-ad>
    <hr>
    <about-us id="aboutScroll"></about-us>
    <footer-dev ></footer-dev>
  </div>
</template>
<script>
  import Selection1 from './SelectSearch.vue'
  import Statics from './Statics.vue'
  import About from './AboutUs.vue'
  import How from './Howtouse.vue'
  import AddAd from './HowToAddAd.vue'
  import Footer from './Footer.vue'
  import Filter from './FilterBySkills.vue'
  import Results from './SearchResults.vue'
  export default {
    data () {
      return {
        usersxtype: '',
        filterShow: false,
        xxx: '',
        skills: [],
        drawer: false,
        autoplay: true
      }
    },
    watch: {
    },
    methods: {
      onScroll (e) {
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      },
      al: function () {
        this.filterShow = true
      }
    },
    computed: {
      // isTypex () {
      //   return this.$store.state.isType
      // },
      skilsx () {
        return this.$store.state.skills
      },
      SearchCount () {
        return this.$store.state.TimesOFSearches
      }
    },
    components: {
      'select-search': Selection1,
      'static-kk': Statics,
      'about-us': About,
      'how-to': How,
      'add-ad': AddAd,
      'footer-dev': Footer,
      'filter-div': Filter,
      'search-result': Results
    }
  }
</script>
