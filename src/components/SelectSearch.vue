<template>
  <v-flex xs12 md6 pa-4 text-md-left class="ml-4">
    <v-subheader class="ma-0 pa-0 white--text">
      <!--<h5>Select for search</h5>-->
      <h5 class="mb-5">Her finder kommuner og private aktører hinanden</h5>
    </v-subheader>
    <v-select
      placeholder="Vælg kommune hvor opgaven skal løses"
      v-bind:items="municipals"
      @click.once="addPerson_OK()"
      v-model="e2"
      item-value="id"
      item-text="name"
      max-height="400"
      class="mb-4 mt-3 blue-trans"
    > </v-select>
    <v-select
      v-bind:items="select_items"
      v-model="e1"
      single-line
      item-text="options"
      return-object
      :disabled="!e2"
      persistent-hint
      placeholder="Vælg mentor- eller beskæftigelsestilbud"
      class="no-modal kkblue mb-4 blue-trans kkblue"
      v-on:change="selectSearchView()"
    ></v-select>
    <div v-scroll-to="{el:'#filterScroll',offset: 5}" ref="zajithxxx"></div>
  </v-flex>
</template>
<script>
  export default {
    data () {
      return {
        searcHide: true,
        name: '',
        e1: null,
        e2: null,
        select_items: [],
        SearchTimes: this.$store.state.TimesOFSearches,
        opp: ''
      }
    },
    mounted () {
      this.editSearch()
    },
    methods: {
      removeTemp (data) {
        data.opp = false
        alert('out')
      },
      addPerson_OK () {
        if (this.$store.state.municipals !== '') {
          this.$store.state.municipals.unshift({name: 'Ingen valgt'})
          console.log(this.$store.state.municipals[0])
        }
      },
      editSearch () {
        this.$http.get('api/EditSearches/1')
          .then(response => {
            this.$store.state.TimesOFSearches = response.body.Searches
           // console.log('getEdiSerch>>>>' + response.body.Searches)
          })
      },
      CountSearch () {
        var data = {
          Searches: this.$store.state.TimesOFSearches
        }
       // console.log('Counted>>>>>' + data.Searches)
        this.$http.put('api/SearchesUpdate/1', data)
          .then(response => {
            console.log(response.body)
          }, (response) => {
            console.log(response)
          })
        // console.log(Searches)
      },
      pressedEnter: function () {
// alert(this.name)
        var data = {
          user_type: this.$store.state.searchtype.options,
          municipality: this.$store.state.searchmuni,
          skill_id: this.ex5,
          name: this.name
        }
        this.$http.get('api/search/user', {params: data})
          .then(response => {
            console.log(response.body)
            if (response.body.length !== 0) {
              this.$store.state.users = response.body.users
            } else {
              this.$store.state.adusers = []
            }
          }, (response) => {
            console.log(response)
          })
// console.log(this.ex5)
// console.log(this.$store.state.searchtype.options + ' -----------kkk----------- ' + this.$store.state.searchmuni.id)
      },
      selectSearchView: function () {
        this.searcHide = false
      },
      skillsx () {
        this.$store.state.skills = []
        if (this.$store.state.searchtype.options === 'Mentor') {
          this.skillsMent()
        } else {
          // this.$store.state.skills = []
          this.skillsSup()
        }
      },
      skillsMent () {
        if (this.$store.state.skills.length === 0) {
          this.$http.get('api/skill', {params: {type: 'Mentor'}})
            .then(response => {
              this.skills = response.body.skills
              this.$store.state.skills = response.body.skills
            //  console.log(response.body.skills)
            }, (response) => {
              console.log(response.body)
            })
        }
      },
      skillsSup () {
        if (this.$store.state.skills.length === 0) {
          this.$http.get('api/skillSup', {params: {type: 'Beskæftigelsestilbud'}})
            .then(response => {
              this.skillsSupplier = response.body.skills
              this.$store.state.skills = response.body.skills
           //   console.log(response.body.skills)
            }, (response) => {
              console.log(response.body)
            })
        }
      }
    },
    watch: {
      e1: function () {
        this.$store.state.searchtype = this.e1
        this.$refs.zajithxxx.click()
        this.$store.state.isType = true
        this.skillsx()
      },
      searchmuni: function () {
        if (this.searchmuni === null) {
          this.e2 = null
        }
      },
      searchtype: function () {
        if (this.searchtype === 'Vælg mentor- eller beskæftigelsestilbud') {
          this.e1 = null
        }
      },
      e2: function () {
        if (this.e2 !== '') {
          this.select_items = [
            { options: 'Mentor' },
            { options: 'Beskæftigelsestilbud' }
          ]
          this.$store.state.searchmuni = this.e2
          this.$store.state.TimesOFSearches++
          this.CountSearch()
        } else {
          this.e2 = false
        }
      }
    },
    computed: {
      isTypex () {
        return this.$store.state.isType
      },
      searchmuni () {
        return this.$store.state.searchmuni
      },
      searchtype () {
        return this.$store.state.searchtype
      },
      municipals () {
        return this.$store.state.municipals
      }
    }
  }
</script>
<style lang="stylus">
  .menu__content
    z-index 6
</style>
