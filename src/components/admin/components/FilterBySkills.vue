<template>
  <div>
    <!--<div class="bg-gray pt-5 pb-3 primary-txt">
      <v-container grid-list-md text-xs-center >
        <v-layout row wrap text-lg-center>
          <v-flex xs12>
            <h6>Indkreds dit valg af aktør ved afkrydsning i tjekbokse eller ved fritekstsøgning</h6>
          </v-flex>
        </v-layout>
        <v-layout row wrap text-lg-center>
          <v-flex md3 xs6 lg2  v-for="skill in skills">
            <v-checkbox
              type="checkbox"
              class="kkblue"
              data-vv-name="checkbox"
              :value="skill.id"
              v-model="ex5"
              :label="skill.name">
            </v-checkbox>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex md4 lg4 offset-md3 offset-lg3 text-xs-center>
          <v-text-field
            v-model="name"
            hide-details single-line
            placeholder="Fritekstsøgning"
            prepend-icon="search">
          </v-text-field>
          </v-flex>
            <v-btn class="bg-kk-btn" @click="adminSearch(1)" v-scroll-to="{el:'#resultScroll',offset: 0}">
              Søg
            </v-btn>
            <v-btn class="bg-kk-btn trans" @click="cancelFilter" v-scroll-to="{el:'#cancelFil',offset: 0}">
              Fortryd
            </v-btn>
        </v-layout>
      </v-container>
    </div>-->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // name: '',
        name: this.$store.state.name,
        pagi_ad: this.$store.state.pagi_ad,
        skills: [],
        adusers: [],
        ex5: []
      }
    },
    watch: {
      ex5: 'watchCheck'
    },
    created () {
      this.skillsx()
    },
    methods: {
      watchCheck () {
        if (this.ex5 !== null) {
          this.search()
        }
      },
      adminSearch (id) {
        var data = {
          user_type: this.$store.state.searchtype.options,
          municipality: this.$store.state.searchmuni.id,
          skill_id: this.$store.state.ex5,
          name: this.$store.state.name,
          filter: this.filterProfile,
          path: this.$route.fullPath,
          take: 10,
          page: id
        }
        this.$http.get('api/search/user', {params: data})
          .then(response => {
            if (response.body.length !== 0) {
              this.$store.state.users = response.body.users
              this.$store.state.pagi_ad = response.body
              console.log(this.$store.state.users)
            } else {
              this.$store.state.adusers = []
            }
          }, (response) => {
            console.log(response)
          })
      },
      cancelFilter () {
        this.$store.state.searchtype = ''
        this.$store.state.searchmuni = ''
        this.ex5 = []
        this.$store.state.isType = false
//        this.$router.go('/')
//        this.$store.state.e1 = null
//        this.$store.state.e2 = null
      },
      skillsx () {
        if (this.skills.length === 0) {
          this.$http.get('api/skill')
            .then(response => {
              this.skills = response.body.skills
              this.$store.state.skills = response.body.skills
            }, (response) => {
//              alert('zajith')
            })
        }
      }
    },
    computed: {
      myskills () {
        return this.$store.state.skils
      }
    }
  }
</script>

<style>
</style>
