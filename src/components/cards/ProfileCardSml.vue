<template>
  <v-layout wrap text-lg-left>
    <v-flex xs12 md6 lg6 pa-3 v-for="user in users">
      <v-card class="pa-3 bg-gray">
        <v-layout row wrap>
          <v-flex xs12 lg3 text-xs-center>
            <img src="../../assets/profile.png" class="nav-logo fullWt" alt="">
          </v-flex>
          <v-flex lg9>
            <v-layout row wrap>
              <v-flex xs9 md10>
                <h6 class="mb-1">{{ user.name }}</h6>
              </v-flex>
              <v-flex xs3 md2 pt-0 pl-4>
                <v-checkbox
                  type="checkbox"
                  class="kkblue"
                  :value="user.id"
                  v-model="compare_check">
                </v-checkbox>
              </v-flex>
              <v-layout row wrap>
                <v-flex xs8>
                  <v-layout row wrap>
                    <v-flex xs2>
                      <i class="material-icons">phone</i>
                    </v-flex>
                    <v-flex xs10>
                      <p class="gr-text">{{ user.telephone }}</p>
                    </v-flex>
                    <v-flex xs2>
                      <i class="material-icons">email</i>
                    </v-flex>
                    <v-flex xs10>
                      <p class="gr-text">{{ user.email }}</p>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs4>
                  <v-btn class="bg-kk-btn right">send mail</v-btn>
                </v-flex>
              </v-layout>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex>
            <p class="breakWord">
              {{ user.discription }}
            </p>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        compare_check: []
      }
    },
    components: {},
    computed: {
      users () {
        return this.$store.state.users
      }
    },
    watch: {
      compare_check: function () {
        this.$store.state.compare_check = this.compare_check
      }
    }
  }
</script>

<style>
</style>
