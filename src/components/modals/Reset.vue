<template>
    <div>
      <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="passwordResetEnter" class="large" persistent width="40%">
        <v-card class="bg-white pa-5">
          <v-container grid-list-md >
            <v-layout row wrap text-lg-center>
              <v-flex>
                <h5>ENTER YOUR NEW PASSWORD</h5>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12 >
                <label>Enter password</label>
                <v-text-field
                  type="password"
                  v-model="password"
                  name="input-1-3"
                  single-line
                  class="white-bg"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 >
                <label>confirm password</label>
                <v-text-field
                  type="password"
                  name="input-1-3"
                  single-line
                  class="white-bg"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap text-lg-right>
              <v-flex md12>
                <v-btn class="bg-kk-btn trans" @click="goto('/')">Fortryd</v-btn>
                <v-btn @click="passwordUpdate" class="bg-kk-btn">Ændre adgangskode</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-dialog>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        password: '',
        passwordResetEnter: true,
        userNameReset: true
      }
    },
    methods: {
      goto (url) {
        this.$router.push(url)
//        this.$router.go(url)
      },
      passwordUpdate () {
        let data = {
          password: this.password,
          token: this.$route.params.id
        }
        this.$http.post('api/auth/password/update', data)
          .then(response => {
            console.log(response.body)
            this.$toasted.success('Gemt', {timeout: 8000})
            this.goto('/')
          }, (response) => {
            console.log(response.body)
            this.$toasted.error(response.body.error.errors[Object.keys(response.body.error.errors)[0]], {timeout: 8000})
          })
      }
    },
    components: {}
  }
</script>

<style>
</style>
