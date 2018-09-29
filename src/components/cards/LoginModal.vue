<template>
  <div class="text-xs-center">
    <v-menu
      offset-x
      :close-on-content-click="false"
      :nudge-width="200"
      v-model="menu"
    >
        <v-btn class="bg-kk-btn" slot="activator">Login</v-btn>
      <v-card  class="login-card po-f top-70 bg-secondary card pl-4 pr-4 pb-3 pt-2">
        <v-list class="bg-secondary">
          <v-list-tile>
            <v-list-tile-content>
              <div class="hi-auto white--text"><h5 class="ma-0">LOGIN</h5></div>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn
                flat @click="menu = false"
                icon
                :class="fav ? '' : ''"
              >
                <v-icon class="white--text">Luk</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-list class="bg-secondary mb-2">
          <v-flex xs12 mb-4>
            <label for="">Brugernavn</label>
            <v-text-field
              class="white--text pt-0 border-white pb-0"
              placeholder="Brugernavn"
            >
            </v-text-field>
          </v-flex>
          <v-flex xs12 >
            <label for="">Adgangskode</label>
            <v-text-field
              class="white--text pt-0 border-white pb-0"
              type="password"
              placeholder="Adgangskode"
            >
            </v-text-field>
          </v-flex>
        </v-list>
          <div  class="d-inline">
            <a class="white--text action-text" @click.stop="openDIalog('passwordReset')">Glemt din adgangskode
             </a>
          </div>
          <div  class="d-inline">
            <a class="white--text action-text" @click.stop="openDIalog('passwordReset')"> Glemt dit brugernavn?
             </a><br>
          </div>
          <div >
            <a flat class="white--text action-text" @click.stop="openDIalog('selectTypeModal')"> Opret profil</a>

          </div>
        <v-card-actions class="pr-0">
          <v-spacer></v-spacer>
          <v-btn class="bg-kk-btn">login</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
    <select-type :selectTypeModal="selectTypeModal"></select-type>
    <password-reset :passwordReset="passwordReset"></password-reset>
  </div>
</template>
<script>
  import SelectType from './../modals/SelectType.vue'
  import ForgetPass from './../modals/PasswordReset.vue'
  export default {
    data () {
      return {
        passwordReset: false,
        fav: true,
        menu: false,
        message: false,
        hints: true,
        selectTypeModal: false,
        selectTypeDD: null
      }
    },
    components: {
      'select-type': SelectType,
      'password-reset': ForgetPass
    },
    methods: {
      openDIalog (data) {
        this.menu = false
        this.selectTypeModal = data === 'selectTypeModal' ? !this.selectTypeModal : false
        this.passwordReset = data === 'passwordReset' ? !this.passwordReset : false
      }
    }
  }
</script>
<style>
</style>
