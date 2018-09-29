<template>
  <div>
    <div class="bg-white pt-5 pb-3">
      <v-container grid-list-md text-md-center >
        <v-layout row wrap>
          <v-flex xs12 pa-3>
            <h6>Dine udvalgte profiler</h6>
          </v-flex>
        </v-layout>
        <v-layout row wrap text-lg-center>
          <v-flex xs12 md6>
            <v-layout row wrap text-lg-center>
              <v-flex xs12 md2>
                <v-btn class="bg-kk-btn">Del liste</v-btn>
                <v-btn class="bg-kk-btn">send fællesmail</v-btn>
                <p class="dis po-a">(Send udvalgte til kollega | Send fællesmail til de udvalgte aktører)</p>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 offset-md4 md2 text-md-right>
              <v-btn class="bg-kk-btn trans">Luk (x)</v-btn>
          </v-flex>
        </v-layout>
        <v-layout row wrap text-md-center mt-5>
          <v-data-table
          v-bind:headers="headers"
          :items="items"
          colspan="2"
          hide-actions
          class="elevation-1 compare-table">
            <template>
              <td class="pa-3">
                    <img src="../assets/profile.png" class="d-block" alt="">
              </td>
              <td class="pa-3">
                <p class="mb-0 justify-center"><b>  Nayanan vicky</b></p>
              </td>
              <td class="text-md-left pa-3">
                <v-chip small class="bg-primaryColor white--text">Primary</v-chip>
                <v-chip small class="bg-primaryColor white--text">Primary</v-chip>
                <v-chip small class="bg-primaryColor white--text">Primary</v-chip>
                <v-chip small class="bg-primaryColor white--text">Primary</v-chip>
                <v-chip small class="bg-primaryColor white--text">Primary</v-chip>
                <v-chip small class="bg-primaryColor white--text">Primary</v-chip>
              </td>
              <td class="pa-3">
                <v-btn class="bg-kk-btn">send mail</v-btn>
              </td>
            </template>
          </v-data-table>
        </v-layout>
      </v-container>
  </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        copyData: 'copy data',
        headers: [
          {
            text: 'PROFILE PICTURE',
            align: 'center',
            sortable: false
          },
          {
            text: 'NAME',
            align: 'center',
            sortable: false
          },
          {
            text: 'SKILLS',
            align: 'center',
            sortable: false
          },
          {
            text: 'CONTACT US',
            align: 'center',
            sortable: false
          }
        ],
        items: [
          {
            value: false,
            align: 'left'
          }
        ]
      }
    },
    components: {}
  }
</script>

<style>
</style>
