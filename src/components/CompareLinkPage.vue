<template>
    <div>
      <div class="bg-white pt-5 pb-3" id="compireScroll">
        <v-container grid-list-md>
          <v-layout row wrap text-xs-center>
            <v-flex xs12 pa-3>
              <h6>Vis valgte</h6>
            </v-flex>
          </v-layout>
          <v-layout row wrap text-md-center mt-5>
            <v-data-table
              v-bind:headers="headers"
              :items="items"
              class="elevation-1 table-header"
              hide-actions
            >
              <template slot="items" scope="props">
                <td>
                  <tr>
                    <td class="pa-3">
                      <img class="profile-compare" :src="$auth.getDomain()+props.item.avatar" alt="">
                    </td>
                    <td class="text-xs-center">
                      <h6>{{ props.item.name }}</h6>
                    </td>
                  </tr>
                </td>
                <td class="text-xs-center">
                  <v-chip class="bg-secondary white--text" v-for="skill in props.item.skills">{{skill.name}}</v-chip>
                </td>
                <td class="text-xs-center">
                  <a :href="mymailsent(props.item.email)" class="btn btn--raised bg-kk-btn">Send mail</a>
                </td>
              </template>
            </v-data-table>
          </v-layout>
        </v-container>
      </div>
      <footer-dev></footer-dev>
    </div>
</template>

<script>
  import Footer from './Footer.vue'
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Navn',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          {
            text: 'Arbejdsområde',
            value: 'name',
            align: 'center',
            sortable: false
          },
          { text: 'Email',
            sortable: false,
            align: 'center',
            value: 'Contact'
          }
        ],
        items: []
      }
    },
    components: {
      'footer-dev': Footer
    },
    created () {
      this.compareUser()
    },
    methods: {
      compareUser () {
        var data = {
          compare_id: this.$route.params.id
        }
        this.$http.get('api/compare/link', {params: data})
          .then(response => {
            this.items = response.body.users
          }, (response) => {
            console.log(response.body)
          })
      },
      mymailsent (email) {
        return 'mailto:' + email
          // + '&subject=Big%20News&body=Body-goes-here'
      }
    }
  }
</script>

<style>
</style>
