<template>
  <div>
    <div class="bg-primaryColor pt-3 pb-3">
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12 md4 pa-3>
            <h5 class="ma-0">Mentortilbud</h5>
            <h3 class="ma-0"><count-to :startVal='0' :endVal='Number(this.$store.state.CountMen.count)' :duration=8000></count-to></h3>
          </v-flex>
          <v-flex xs12 md4 pa-3>
            <h5 class="ma-0">Beskæftigelsestilbud</h5>
            <h3 class="ma-0"><count-to :startVal='0' :endVal='Number(this.$store.state.CountSup)' :duration=8000></count-to></h3>
          </v-flex>
          <v-flex xs12 md4 pa-3>
            <h5 class="ma-0">Antal søgninger</h5>
            <h3 class="ma-0"><count-to :startVal='0' :endVal='Number(SearchesView)' :duration=8000></count-to></h3>
            <!--<button @click="SearchCount">srs</button>-->
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>
<script>
  import countTo from 'vue-count-to'
  export default {
    props: {
      countTo: {
        type: Number
      }
    },
    data () {
      return {
        CountMentor: 0,
        CountSupplier: 0,
        startVal: 0,
       // endVal: 0,
        autoplay: false,
        SearchesView: 0
      }
    },
    computed: {
    },
    watch: {
    },
    components: {
      countTo
    },
    created () {
    },
    mounted () {
      this.CountId()
      this.getSearches()
    },
    methods: {
      getSearches () {
        this.$http.get('api/countedSearches')
          .then(response => {
            this.SearchesView = response.body[0].Searches
       //     console.log(this.SearchesView)
          })
      },
      CountId () {
        this.$http.get('api/user/type/count', {params: {type: 'Mentor'}})
          .then(response => {
            var CountMentor = response.body
    //        console.log(CountMentor.count)
            this.$store.state.CountMen = CountMentor
          })
        this.$http.get('api/user/type/count', {params: {type: 'Beskæftigelsestilbud'}})
        .then(response => {
          var CountSupplier = response.body
  //        console.log(CountSupplier.count)
          this.$store.state.CountSup = CountSupplier.count
        })
      }
    }
  }
</script>
<style>
</style>
