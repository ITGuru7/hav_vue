<template>
  <div>
    <div class="bg-gray pt-5 pb-3 primary-txt"  v-if="isTypex">
      <v-container grid-list-md text-xs-center >
        <v-layout row wrap text-lg-center>
          <v-flex xs12>
            <h6>Indkreds dit valg af aktør ved afkrydsning i tjekbokse eller ved fritekstsøgning</h6>
          </v-flex>
        </v-layout>
        <v-layout row wrap text-lg-center>
          <v-flex md3 xs6 lg2 v-for="skill in skilsx">
             <span class="tooltip" style="z-index: 99999; border-bottom: none;">
                           <span class="tooltiptext breakWord" style="top:-30px; right: 20%;text-align: center">{{skill.name}}
                           </span>
            <v-checkbox
              type="checkbox"
              class="kkblue"
              data-vv-name="checkbox"
              :value="skill.id"
              v-model="ex5"
              :label="skill.name">
            </v-checkbox>
             </span>
          </v-flex>
        </v-layout>
        <v-layout row wrap  >
          <v-flex md4 offset-md4 xs12 text-md-center text-xs-right>
          <v-text-field
            v-model="name"
            hide-details single-line
            placeholder="Fritekstsøgning"
            prepend-icon="search">
          </v-text-field>
            <v-btn class="bg-kk-btn" @click="search" v-scroll-to="{el:'#resultScroll',offset: 0}">
              Søg
            </v-btn>
            <v-btn class="bg-kk-btn trans" @click="cancelFilter" v-scroll-to="{el:'#cancelFil',offset: 0}">
              FortrydXX
            </v-btn>
            <!--<input type="text" v-model.lazy="keywords" v-debounce="500" placeholder="Type and wait!">-->
            <!--<ul v-if="results.length > 0">-->
              <!--<li v-for="result in results" :key="result.id" v-html="highlight(result.title)"></li>-->
            <!--</ul>-->
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // type: this.$store.state.searchtype,
        name: this.$store.state.name,
        skills: [],
        ex5: this.$store.state.ex5,
        isType: this.$store.state.isType
      }
    },
    created () {
      // this.skillsx()
    },
    watch: {
      ex5: function () {
        if (this.ex5 !== null) {
          this.search()
        }
      }
    },
    methods: {
      cancelFilter () {
        // this.ex5 = []
        this.$store.state.users = []
        this.$store.state.emptyUser = false
        this.$store.state.searchmuni = null
        this.$store.state.isType = false
        this.$store.state.searchtype.options = 'Vælg mentor- eller beskæftigelsestilbud'
      },
      search () {
        var data = {
          user_type: this.$store.state.searchtype.options,
          municipality: this.$store.state.searchmuni,
          skill_id: this.ex5,
          name: this.name,
          path: this.$route.fullPath
          // tele: this.name,
          // email: this.name
        }
        this.$http.get('api/search/user', {params: data})
          .then(response => {
            if (response.body.length !== 0) {
              var counter = response.body.users.length
              this.$store.state.counter = counter
              this.$store.state.users = response.body.users
              this.$store.state.emptyUser = false
              // var options = {
              //   keys: ['user_type.name']
              // }
              // var fuse = new this.Fuse(this.$store.state.users, options)
              // fuse.search(this.name)
            } else {
              this.$store.state.emptyUser = true
              this.$store.state.users = []
              this.$store.state.adusers = []
            }
          }, (response) => {
            console.log(response)
          })
//        console.log(this.ex5)
//        console.log(this.$store.state.searchtype.options + ' -----------kkk----------- ' + this.$store.state.searchmuni.id)
      }
//       skillsx () {
//         if (this.skills.length === 0) {
//           this.$http.get('api/skill')
//             .then(response => {
//               this.skills = response.body.skills
//               this.$store.state.skills = response.body.skills
//             }, (response) => {
// //              alert('zajith')
//             })
//         }
//       }
      // highlight (text) {
      //   return text.replace(new RegExp(this.keywords, 'gi'), '<span class="highlighted">$&</span>')
      // }
    },
    computed: {
      isTypex () {
        return this.$store.state.isType
      },
      searchmuni () {
        return this.$store.state.searchmuni
      },
      searchtype () {
        return this.$store.state.searchtype.options
      },
      // results () {
      //   return this.keywords ? this.posts.filter(result => result.title.includes(this.keywords)) : []
      // },
      skilsx () {
        return this.$store.state.skills
      }
    }
  }
</script>

<style>
</style>
