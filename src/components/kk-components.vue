<template>
  <div class="bg-white  pt-5 pb-5">
    <v-container grid-list-md text-xs-center >
      <v-layout row wrap text-lg-left>
        <v-flex xs12 md4 offset-md4>
          <h4>components -kk</h4>
          <v-subheader class="ma-0 pa-0"><h6>heading h6</h6></v-subheader>
          <p>small</p>
          <v-select
            v-bind:items="select_items"
            v-model="e1"
            single-line
            item-text="options"
            return-object
            persistent-hint
            placeholder="Vælg type"
            class="small mb-4"
          ></v-select>
          <p>large</p>
          <v-select
            v-bind:items="select_m"
            v-model="e2"
            single-line
            item-text="options"
            placeholder="Select municipality"
            return-object
            :disabled="e1==null"
            persistent-hint
            class="kk-select mb-4"
          ></v-select>
          <p>search  </p>
          <v-text-field
            hide-details single-line
            :disabled="e1==null"
            placeholder="Find mentor eller leverandør"
            prepend-icon="search">
          </v-text-field>
          <p>check-box-green</p>
          <v-checkbox
            v-model="checkboxtest"
            value="5"
            label="green"
            data-vv-name="checkboxtest"
            type="checkbox"
            required

          ></v-checkbox>
          <p>check-box-blu</p>
          <v-checkbox
            v-model="checkboxtest2"
            value="6"
            label="blue"
            data-vv-name="checkboxtest2"
            type="checkbox"
            required
            color="kk-blu"
          ></v-checkbox>
          <p>modal</p>
          <v-btn class="bg-kk-btn" @click.stop="openDIalog('dialog')" >Open Dialog</v-btn>
          <v-dialog v-model="dialog" persistent width="50%">
            <v-card>
              <v-card-title>
                <span class="headline">User Profile</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm6 md4>
                      <v-text-field label="Legal first name" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field label="Legal last name" hint="example of persistent helper text"
                                    persistent-hint
                                    required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field label="Email" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field label="Adgangskode" type="password" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-select
                        label="Age"
                        required
                        :items="['0-17', '18-29', '30-54', '54+']"
                      ></v-select>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-select
                        label="Interests"
                        multiple
                        autocomplete
                        chips
                        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                      ></v-select>
                    </v-flex>
                  </v-layout>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click.native="dialog = false">Luk</v-btn>
                <v-btn color="blue darken-1" flat @click.native="dialog = false">Gem</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>
<script>
  export default {

    data () {
      return {
        dialog: false,
        checkboxtest: null,
        checkboxtest2: null,
        e1: null,
        e2: null,
        select_items: [
          { options: 'Mentor' },
          { options: 'Beskæftigelsestilbud' }
        ],
        select_m: [
          { options: '1' },
          { options: '2' },
          { options: '3' },
          { options: '4' },
          { options: '5' },
          { options: '6' }
        ]
      }
    },
    methods: {
      openDIalog (data) {
        this.dialog = data === 'dialog' ? !this.dialog : false
      }
    }
  }
</script>
<style>
</style>
