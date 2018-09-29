<template>
  <div>
    <div v-if="$route.fullPath === '/admin'">
    <v-container grid-list-md text-xs-left >
      <v-layout row wrap text-lg-center>
        <v-flex xs12 md6 left offset-md3 pa-3 text-xs-center>
          <v-subheader class="ma-0 pa-0"><h6>Filtrer</h6></v-subheader>
        <v-select
          v-bind:items="select_items_filter"
          v-model="filterProfile"
          single-line
          item-text="options"
          return-object
          persistent-hint
          placeholder="Vælg type"
          class="mb-4"
        ></v-select>
        <!--<v-btn class="bg-kk-btn trans ml-3" @click="getAllProfile()">profiles</v-btn>-->
        </v-flex>
      </v-layout>
    </v-container>
  </div>
    <div v-if= "this.$store.state.emptyUser" v-model="EmptySearchResult" class="bg-secondary pt-5 pb-3">
      <v-container grid-list-md text-xs-left >
        <v-layout row wrap text-lg-center>
          <v-flex xs12 md12 pa-3 text-xs-center>
          <h6>søgeresultat</h6>
          </v-flex>
          <!--<div>-->
            <!--<v-flex xs12 md12>-->
              <!--&lt;!&ndash;<v-select&ndash;&gt;-->
                <!--&lt;!&ndash;v-bind:items="select_items_filter"&ndash;&gt;-->
                <!--&lt;!&ndash;v-model="filterProfile"&ndash;&gt;-->
                <!--&lt;!&ndash;single-line&ndash;&gt;-->
                <!--&lt;!&ndash;item-text="options"&ndash;&gt;-->
                <!--&lt;!&ndash;return-object&ndash;&gt;-->
                <!--&lt;!&ndash;persistent-hint&ndash;&gt;-->
                <!--&lt;!&ndash;placeholder="Vælg type"&ndash;&gt;-->
                <!--&lt;!&ndash;class="mb-4"&ndash;&gt;-->
              <!--&lt;!&ndash;&gt;</v-select>&ndash;&gt;-->
              <!--<v-btn class="bg-kk-btn trans ml-3"  v-if="filterProfile != ''" @click="filterProfile=''">Fortryd</v-btn>-->
            <!--</v-flex>-->
          <!--</div>-->
          <v-flex xs12 md12 pa-3 text-xs-center>
            <h3>
              Ingen resultater fundet – udvid din søgning</h3>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div v-if="users.length !== 0" class="bg-secondary pt-5 pb-3">
      <v-container grid-list-md text-xs-left >
        <v-layout row wrap text-lg-center>
          <!--<v-flex xs12 md1>-->
            <!--<v-btn class="bg-kk-btn trans ml-3">Fortryd<  /v-btn>-->
          <!--</v-flex>-->
          <v-flex xs12 md12 pa-3 text-xs-center>
          <h6 class="capitalize">{{ this.$store.state.counter + ' '}}PROFILER ER FUNDET</h6>
          </v-flex>
        </v-layout>
        <v-layout row wrap text-lg-center>
          <!--<div v-if="$route.fullPath == '/admin'">-->
            <!--<v-flex xs12 md12>-->
              <!--<v-select-->
                <!--v-bind:items="select_items_filter"-->
                <!--v-model="filterProfile"-->
                <!--single-line-->
                <!--item-text="options"-->
                <!--return-object-->
                <!--persistent-hint-->
                <!--placeholder="Vælg type"-->
                <!--class="mb-4"-->
              <!--&gt;</v-select>-->
              <!--<v-btn class="bg-kk-btn trans ml-3" v-if="filterProfile != ''" @click="cancelFilter()">Fortryd</v-btn>-->
            <!--</v-flex>-->
          <!--</div>-->
          <div v-if="$route.fullPath !== '/admin'">
            <v-flex xs12 md1>
              <v-btn  v-if="compare" v-scroll-to="{el:'#compireScroll',offset: 0}"  @click="compareUser()" class="bg-kk-btn trans">Vis valgte</v-btn>
              <span v-if="!compare" class="tooltip" style="z-index: 99999; width: 120px; border-bottom: none; " >
                <span class="tooltiptext" style="top:5px; left: 90%;">vælg flere visitkort på listen og send fællesmail til de valgte aktører -f.eks. hvis du vil ”sende en opgave i udbud</span>
              <v-btn v-if="!compare" @click="compareUser()" class="bg-kk-btn" disabled>Vis valgte</v-btn>
              </span>
              <p class="dis po-a">(Udvælg og send fællesmail eller del dit udvalg via mail.)</p>

            </v-flex>
          </div>
        </v-layout>
        <v-layout wrap text-lg-left mt-4>
          <v-flex xs12 md6 lg6 pa-3 v-for="user in users">
            <v-card class="pa-3 bg-gray breakWord" style="min-height: 255px;">
              <v-layout row wrap>
                <v-flex xs12 lg3 text-xs-center class="point" @click.stop="profileView(user)">
                  <img :src="$auth.getDomain()+user.avatar" class="nav-logo fullWt" alt="">
                </v-flex>
                <v-flex lg9>
                  <v-layout row wrap>
                    <v-flex xs8 md8>
                      <h6 class="mb-3">{{ user.name }}</h6>
                      <v-layout row wrap>
                        <v-flex xs2>
                          <i class="material-icons">phone</i>
                        </v-flex>
                        <v-flex xs10>
                          <p class="gr-text ma-0">{{ user.telephone }}</p>
                        </v-flex>
                        <v-flex xs2>
                          <i class="material-icons">email</i>
                        </v-flex>
                        <v-flex xs10>
                          <p class="gr-text ma-0">{{ user.email }}</p>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex xs4 md4  pt-0  >
                      <div v-if="$route.fullPath === '/admin'" >
                      <v-btn flat small @click="profileView(user, true)"><v-icon>edit</v-icon>Edit</v-btn>
                      <v-btn v-if="user.status === 'active'" flat @click="subscription(user.id)" small>
                          <i class="material-icons">person</i>
                            <span class="tooltip" style="z-index: 99999; border-bottom: none;">
                              <span class="tooltiptext" style="top:-150%; right: -50%;width: auto;">Deaktivere konto</span>Pan
                            </span>
                      </v-btn>
                      <v-btn v-if="user.status === 'panned'" flat @click="subscription(user.id)" small>
                        <i class="material-icons">person</i> <span class="tooltip" style="z-index: 99999; border-bottom: none;">
                        <span class="tooltiptext" style="top:-150%; right: -50%;width: auto;">Aktiverer konto</span>enable</span>
                      </v-btn>
                        <v-btn v-if="user.status === 'disable'" flat @click="subscription(user.id)" small>
                          <i class="material-icons">person</i> <span class="tooltip" style="z-index: 99999; border-bottom: none;">
                        <span class="tooltiptext" style="top:-150%; right: -50%;width: auto;">Aktiverer konto</span>enable</span>
                        </v-btn>
                        <a :href="mymailsent(user.email)" class="btn btn--raised bg-kk-btn right" >send mail</a>
                      </div>
                      <div v-if="$route.fullPath !== '/admin'" class="right pr-2">
                         <span class="tooltip" style="z-index: 99999; border-bottom: none; right: -60px;">
                           <span class="tooltiptext" style="top:5px; right: 100%;">vælg flere visitkort på listen og send fællesmail til
                             de valgte aktører -f.eks. hvis du vil ”sende en opgave i udbud
                           </span>
                      <v-checkbox
                        type="checkbox"
                        class="kkblue text-md-right"
                        :value="user.id"
                        v-model="compare_check">
                      </v-checkbox>
                         </span>
                        <a :href="mymailsent(user.email)" class="btn btn--raised bg-kk-btn right" >send mail</a>
                      </div>
                    </v-flex>
                    <!--<v-layout row wrap>-->
                      <!--<v-flex xs12>-->
                        <!--<a :href="mymailsent(user.email)" class="btn btn&#45;&#45;raised bg-kk-btn right" >send mail</a>-->
                      <!--</v-flex>-->
                    <!--</v-layout>-->
                  </v-layout>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12>
                  <p class="ma-0 breakWord">{{ user.discription| truncate(200) }}
                    <v-btn @click="profileView(user)" flat small class="right ma-4 po-a br-0">Læs mere </v-btn></p>
                </v-flex>
                <v-flex xs12>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex  v-if="arrowUp" xs12 md12 class="text-md-center text-xs-right">
            <v-btn icon class="white--text" ><i class="material-icons">
              keyboard_arrow_up
            </i></v-btn>
          </v-flex>
          <v-flex  v-if="arrowDown" xs12 md12 class="text-md-center text-xs-right" @click="loadmore">
            <v-btn icon class="white--text pulse" ><i class="material-icons">expand_more</i></v-btn>
          </v-flex>
        </v-layout>
        <v-layout v-if="$route.fullPath !== '/admin'">
          <!--<v-flex xs12 md6 offset-md6 class="text-md-left pa-2">-->
            <!--<paginate v-if="pagi_ad.last_page > 1"-->
                      <!--:page-count="pagi_ad.last_page"-->
                      <!--:page-range="5"-->
                      <!--:margin-pages="5"-->
                      <!--:click-handler="search"-->
                      <!--:prev-text="'Forrige'"-->
                      <!--:next-text="'Næste'"-->
                      <!--:container-class="'pagination'"-->
                      <!--:page-class="'page-item waves-effect waves-light'">-->
            <!--</paginate>-->
          <!--</v-flex>-->
        </v-layout>
      </v-container>
    </div>
    <div id="compireScroll"></div>
    <div v-if="items.length !== 0" class="bg-white pt-5 pb-3" >
      <v-container grid-list-md  >
        <v-layout row wrap text-xs-center>
          <v-flex xs12 pa-3>
            <h6>Dine udvalgte profiler</h6>
          </v-flex>
        </v-layout>
        <v-layout row wrap text-lg-left>
          <v-flex xs8>
                <a :href="handleSuccess(copyData)" target="_top" v-clipboard="this.$config.baseUrl + 'compare/' + copyData" @success="handleSuccess(copyData)" class="btn btn--raised point bg-kk-btn">Del liste</a>
                <a class="pl-2 pr-2 btn btn--raised bg-kk-btn" :href="usermails">send fællesmail</a>
            <p class="dis">(Send udvalgte til kollega | Send fællesmail til de udvalgte aktører)</p>
          </v-flex>
          <v-flex xs4>
            <v-btn @click="compareClose" class="bg-kk-btn trans right" v-scroll-to="{el:'#resultScroll',offset: 0}">Luk (x)</v-btn>
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
    <!--------------------------------send mail modal-->
    <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="sendMailto" class="large" persistent width="75%">
    <v-card class="bg-primaryColor gray-txt pa-5">
      <v-btn flat icon class="kkblue right mt-0 mr-0" @click.native="sendMailto = false">
        <v-icon>close</v-icon>
      </v-btn>
      <v-container grid-list-md text-xs-center >
        <v-layout row wrap text-lg-center>
          <v-flex>
            <h6>SEND EMAIL</h6>
          </v-flex>
        </v-layout>
        <v-layout row wrap text-md-left class="pa-3 pb-0">
          <v-flex xs12 md6>
            <P class="pt-5">
              <b>Kommunekontackt</b><br>
              Socialgade 13 <br>
              9988 Mentorkøbing <br>
              Tlf.: 007 007 0059 <br>
              Mail: <a href="">kontakt@kommunekontakt.dk</a>
            </P>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field
              id="name"
              v-model="name"
              hide-details
              single-line
              class="input-gray "
              type="text"
              placeholder="Navn">
            </v-text-field>
            <v-text-field box class="pa-0 mt-2" multi-line placeholder="Tekst ..."></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap text-md-right pr-0>
          <v-flex text-md-right>
            <v-btn class="bg-kk-btn trans" @click.native="sendMailto = false">Fortryd</v-btn>
            <!--</v-flex>-->
            <!--<v-flex md1>-->
            <v-btn class="bg-kk-btn">send</v-btn>
            <p class="dis light">(This message will receive by example Name)</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
    <!------------------------------profile view modal-->
    <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="ProfileView" class="large" persistent width="80%">
      <v-card class="bg-gray kkblue pa-5">
        <v-container grid-list-md text-xs-center >
          <v-btn flat icon class="kkblue right mt-0 mr-0" @click.native="ProfileView = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-layout row wrap text-xs-left v-for="up in userProfile">
            <v-flex xs12 text-xs-center pa-3>
              <h6 class="capitalize">{{ up.name }}'s Profil</h6>
              <!--<p><b>profile details</b></p>-->
            </v-flex>
            <v-flex xs12 md3 pa-3>
              <img :src="$auth.getDomain()+up.avatar" class="res-img" alt="">
            </v-flex>
            <v-flex xs12 md9>
              <v-layout row wrap text-xs-left>
                <v-flex xs6 pa-3>
                  <p><b>Navn : </b>{{up.name}}</p>
                  <p><b>Mail : </b>{{up.email}}</p>
                  <p><b>Hjemmeside : </b><a  target="_blank" :href="'http://' + up.url ">{{up.url}}</a></p>
                </v-flex>
                <v-flex xs6 pa-3>
                  <!--<p><b>Brugernavn : </b>{{up.user_name}}</p>-->
                  <p><b>Telefonnummer : </b>{{up.telephone}}</p>
                  <p><b>Kommune : </b>
                    <span class="breakWord" v-for="Municipal in up.municipality">{{ Municipal.name }},</span></p>
                  <!--<p>{{// up.municipality.name}}</p>-->
                  <p v-if="up.gender !== ''"><b>Køn : </b>{{up.gender}}</p>
                </v-flex>
              </v-layout>
              <v-layout row wrap text-xs-left>
                <v-flex xs12 pa-3>
                  <p><b>Arbejdsområder: </b>
                    <v-chip small class="bg-primaryColor kkblue" v-for="skill in up.skills">{{skill.name}}</v-chip>
                  </p>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12 pa-3>
              <v-layout row wrap text-xs-left>
                <v-flex xs2 pa-3>
                  <p><b>Om mig : </b></p>
                </v-flex>
                <v-flex xs10 pa-3 class="breakWord" style="white-space: pre-line;">
                  {{up.discription}}
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
          <!--<v-btn class="bg-kk-btn" @click.native="ProfileView = false">Luk</v-btn>-->
        </v-container>
      </v-card>
    </v-dialog>
    <!--edit --admin-->
    <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="editProfileAdmin" class="large" persistent width="75%">
      <v-card class="bg-white pa-5 kkblue">
        <v-btn flat icon class="kkblue right mt-0 mr-0" @click.native="editProfileAdmin = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex text-xs-left>
              <small><b>Felter markeret med en stjerne <br> (*) er påkrævet.</b></small>
              <h6 class="text-xs-center">{{editAdmin.user_type}}</h6>
              <p class="text-xs-center"><b>Stamdata</b></p>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex md4 text-xs-center pa-3>
              <div>
                <label><b>Billede/Logo</b></label>
                <croppa v-model="assUpCroppa"
                        :initial-image="$auth.getDomain()+editAdmin.avatar"
                        :accept="'image/*'"
                        :zoom-speed="15"
                        slot="initial">
                </croppa>
              </div>
              <div class="mt-2 text-xs-left" v-if="editAdmin.gender !== ''">
                <label><b>*Køn:</b></label>
                <v-layout row wrap>
                  <v-radio-group v-model="editAdmin.gender" row class="bg-trans " >
                    <v-radio label="Mand" value="male" class="bg-trans kkblue" ></v-radio>
                    <v-radio label="Kvinde" value="female" class="bg-trans kkblue"></v-radio>
                  </v-radio-group>
                </v-layout>
              </div>
            </v-flex>
            <v-flex md4 text-lg-left pa-3>
              <div>
                <label><b>*Navn:</b></label>
                <v-text-field
                  v-model="editAdmin.name"
                  hide-details single-line
                  type="text"
                  Placeholder="Navn">
                </v-text-field>
              </div>
              <div class="mt-3">
                <label><b>*Mail:</b></label>
                <v-text-field
                  v-model="editAdmin.email"
                  hide-details single-line
                  placeholder="email@email.dk"
                  type="email">
                </v-text-field>
              </div>
              <div class="mt-3">
                <label><b>*Adgangskode:</b></label>
                <v-text-field
                  v-model="password"
                  hide-details single-line
                  type="password"
                  placeholder="******">
                </v-text-field>
              </div>
              <div class="mt-3">
                <label><b>Hjemmeside:</b></label>
                <v-text-field
                  v-model="editAdmin.url"
                  type="text"
                  hide-details single-line
                  placeholder="http://google.com">
                </v-text-field>
              </div>
            </v-flex>
            <v-flex md4 text-lg-left pa-3>
              <div>
                <label><b>*Brugernavn:</b></label>
                <v-text-field
                  type="text"
                  v-model="editAdmin.user_name"
                  hide-details single-line
                  placeholder="brugernavn">
                </v-text-field>
              </div>
              <div class="mt-3">
                <label><b>*Telefonnummer:</b></label>
                <v-text-field
                  type="number"
                  v-model="editAdmin.telephone"
                  hide-details single-line
                  placeholder="Telefonnummer">
                </v-text-field>
              </div>
              <div class="mt-3">
                <label><b>*Bekræft adgangskode:</b></label>
                <v-text-field
                  type="password"
                  v-model="passwordRe"
                  hide-details single-line
                  placeholder="******">
                </v-text-field>
              </div>
              <div class="mt-3">
                <label ><b>*Vælg kommuneW:</b></label>
                <v-select
                  v-bind:items="municipals"
                  v-model="editAdmin.municipality"
                  multiple
                  item-text="name"
                  item-value="id"
                  placeholder="Vælg Kommune"
                  persistent-hint
                  class="kk-select mb-4"
                ></v-select>
              </div>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="pa-3">
              <label><b>*Vælg arbejdsområder:</b></label>
            </v-flex>
          </v-layout>
          <v-layout row wrap text-lg-center>
            <v-flex md3 xs6 lg2  v-for="skill in skilsx">
              <v-checkbox
                type="checkbox"
                class="kkblue"
                data-vv-name="checkbox"
                :value="skill.id"
                v-model="editAdmin_ex5"
                :label="skill.name">
              </v-checkbox>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="ma-3">
              <label ><b>Billede/Logo:</b></label>
              <v-text-field v-model="editAdmin.discription" class="breakWord bg-secondary kk-textarea" box multi-line placeholder="Tekst ..."></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-spacer></v-spacer>
            <v-flex md1 mr-4>
              <v-btn @click="updatemyassistant" class="bg-kk-btn">UPDATE</v-btn>
            </v-flex>
            <v-flex md1 mr-4>
              <v-btn class="bg-kk-btn trans" @click.native="editProfileAdmin = false">Fortryd</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  import VTooltip from 'v-tooltip'
  import ProfileCardSml from './cards/ProfileCardSml.vue'
  import CompareDiv from './Comparition.vue'
  import Paginate from 'vuejs-paginate'
  export default {
    data () {
      return {
        EmptySearchResult: this.$store.state.emptyUser,
        arrowUp: false,
        arrowDown: true,
        name: '',
        municipality: '',
        msg: 'This is a button.',
        assUpCroppa: {},
        editAdmin_ex5: [],
        editAdmin: '',
        editProfileAdmin: false,
        filterProfile: false,
        user: this.$store.state.myprofile,
        ProfileView: false,
        userProfile: '',
        sendMailto: false,
        compare_check: [],
        headers: [
          {
            text: 'Profile details',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          {
            text: 'Skills',
            value: 'name',
            align: 'center',
            sortable: false
          },
          { text: 'Contact',
            sortable: false,
            align: 'center',
            value: 'Contact'
          }
        ],
        select_items_filter: ['disable list', 'unpaid list', 'panned list', 'se alle profiler'],
        items: [],
        usermails: '',
        password: '',
        passwordRe: '',
        count: '',
        viewProfiles: 6
      }
    },
    components: {
      'small-card': ProfileCardSml,
      'compare-div': CompareDiv,
      'paginate': Paginate,
      'vtooltip': VTooltip
    },
    created () {
      this.$store.state.emptyUser = false
      // this.getAllProfile()
    },
    watch: {
      filterProfile () {
        this.search(1)
        this.getAllProfile()
        this.arrowUp = false
        this.arrowDown = true
      }
    },
    methods: {
      getAllProfile () {
        if (this.filterProfile === 'se alle profiler') {
          this.$http.get('api/search/userFirst')
            .then(response => {
              console.log(response.body.users)
              var counter = response.body.users.length
              this.$store.state.counter = counter
              if (response.body.length !== 0) {
                this.$store.state.users = response.body.users
              }
            })
        }
      },
      // cancelFilter () {
      //   this.$store.state.users = []
      //   this.filterProfile = ''
      // },
      cancelLoadmore () {
        this.viewProfiles = 6
      },
      loadmore () {
        this.viewProfiles = this.viewProfiles + 6
        if (this.viewProfiles > this.$store.state.counter) {
          this.arrowUp = true
          this.arrowDown = false
        }
        // for (let i = 0; i < this.$store.state.counter; i++) {
        //   this.viewProfiles = this.viewProfiles + 6
        // }
        //  alert(i)
        //  if (i = 6) {
        //   //   this.viewProfiles = this.viewProfiles + 6
        //   // }
        // }
        // }
        // var data = {
        //   user_type: this.$store.state.searchtype.options,
        //   municipality: this.$store.state.searchmuni,
        //   skill_id: this.$store.state.ex5,
        //   name: this.$store.state.name,
        //   users_id: this.$_.pluck(this.$store.state.users, 'id')
        // }
        // this.$http.get('api/search/user', {params: data})
        //   .then(response => {
        //     if (response.body.length !== 0) {
        //       for (let i = 0; i < response.body.users.length; i++) {
        //         this.$store.state.users.push(response.body.users[i])
        //       }
        //     } else {
        //     }
        //   }, (response) => {
        //     console.log(response)
        //   })
      },
      removeFromArray (user) {
        this.$store.state.users.splice(user, 1)
      },
      subscription (id) {
        this.$http.put('api/assistant/status/' + id)
          .then(response => {
            console.log(response.body)
            this.$_.map(this.$store.state.adusers, function (obj) {
              if (obj.id === id) {
                obj.status = obj.status === 'active' ? 'panned' : 'active'
              }
            })
            this.removeFromArray()
            this.$toasted.success('Opdateret', {timeout: 8000})
          }, (response) => {
            console.log(response.body)
          })
      },
      updatemyassistant () {
        var tmpUserMuni = this.editAdmin.municipality
        var userMuni = []
        for (const key in tmpUserMuni) {
          if (tmpUserMuni[key].hasOwnProperty('id')) {
            userMuni.push(tmpUserMuni[key]['id'])
          } else {
            userMuni.push(tmpUserMuni[key])
          }
        }
        var data = {
          name: this.editAdmin.name,
          telephone: this.editAdmin.telephone,
          url: this.editAdmin.url,
          municipality: userMuni,
          // this.editAdmin.municipality.id,
          avatar: this.assUpCroppa.generateDataUrl(),
          gender: this.editAdmin.gender,
          discription: this.editAdmin.discription,
          skills: this.editAdmin_ex5
        }
        this.$http.put('api/assistant/' + this.editAdmin.id, data)
          .then(response => {
            console.log(response)
            this.editProfileAdmin = false
            this.$toasted.success('Opdateret', {timeout: 8000})
          }, (response) => {
            console.log(response)
          })
      },
      search (id) {
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
            var counter = response.body.users.length
            this.$store.state.counter = counter
            console.log(response.body)
            if (response.body.length !== 0) {
              this.$store.state.users = response.body.users
              this.$store.state.pagi_ad = response.body
            } else {
              this.$store.state.emptyUser = false
              this.$store.state.adusers = []
            }
          }, (response) => {
            console.log(response)
          })
      },
      profileView (data, option = false) {
        if (data.user_type === 'Mentor') {
          this.$store.state.skills = []
          this.skillsMent()
        } else {
          this.$store.state.skills = []
          this.skillsSup()
        }
        var datax = {
          user_id: [data.id],
          userType: [data.user_type]
        }
        if (data.user_type === 'Mentor') {
          this.$http.get('api/compare', {params: datax})
            .then(response => {
              if (option) {
                this.editAdmin = response.body.users[0]
                this.editProfileAdmin = true
                var result = response.body.users[0].skills
                var result1 = result.map(a => a.id)
                this.editAdmin_ex5 = result1
              } else {
                this.userProfile = response.body.users
                console.log('********************')
                console.log(this.userProfile)
                this.ProfileView = true
              }
            }, (response) => {
              console.log(response.body)
            })
        } else {
          this.$http.get('api/compareSub', {params: datax})
            .then(response => {
              if (option) {
                this.editAdmin = response.body.users[0]
                this.editProfileAdmin = true
                var result = response.body.users[0].skills
                var result1 = result.map(a => a.id)
                this.editAdmin_ex5 = result1
              } else {
                this.userProfile = response.body.users
                console.log('********************')
                console.log(this.userProfile)
                this.ProfileView = true
              }
            }, (response) => {
              console.log(response.body)
            })
        }
      },
      skillsMent () {
        if (this.$store.state.skills.length === 0) {
          this.$http.get('api/skill')
            .then(response => {
              this.skills = response.body.skills
              this.$store.state.skills = response.body.skills
            }, (response) => {
              console.log(response.body)
            })
        }
      },
      skillsSup () {
        if (this.$store.state.skills.length === 0) {
          this.$http.get('api/skillSup')
            .then(response => {
              this.skills = response.body.skills
              this.$store.state.skills = response.body.skills
            }, (response) => {
              console.log(response.body)
            })
        }
      },
      handleSuccess (e) {
        var data = {
          user_id: this.compare_check,
          compare_id: e
        }
        this.$http.post('api/compare', data)
          .then(response => {
            console.log(response.body)
          }, (response) => {
            console.log(response.body)
          })
        console.log(e)
        return 'mailto:' + '' +
          '?subject=' +
          '&body=' + this.$config.baseUrl + 'compare/' + this.copyData
      },
      compareClose () {
        this.items = []
        this.compare_check = []
      },
      compareUser () {
        var data = {
          user_id: this.compare_check
        }
        if (this.$store.state.searchtype.options === 'Mentor') {
          this.$http.get('api/compare', {params: data})
            .then(response => {
              console.log(response.body.users)
              this.items = response.body.users
              this.usermails = 'mailto:kontakt@kommunekontakt.dk?bcc=' + this.$_.pluck(response.body.users, 'email')
              // this.usermails = 'mailto:' + this.$_.pluck(response.body.users, 'email').toString() + '&subject=Big%20News&body=Body-goes-here'
            }, (response) => {
              console.log(response.body)
            })
        } else {
          this.$http.get('api/compareSub', {params: data})
            .then(response => {
              this.items = response.body.users
              this.usermails = 'mailto:?bcc=' + this.$_.pluck(response.body.users, 'email')
              // this.usermails = 'mailto:' + this.$_.pluck(response.body.users, 'email').toString() + '&subject=Big%20News&body=Body-goes-here'
            }, (response) => {
              console.log(response.body)
            })
        }
      },
      mymailsent (email) {
        return 'mailto:' + email
          // + '&subject=Big%20News&body=Body-goes-here'
      }
//       randomProfile () {
//         var data = {
//           user_type: this.$store.state.searchtype.options,
//           municipality: this.$store.state.searchmuni.id,
//           skill_id: this.ex5,
//           name: this.name
//         }
//         this.$http.get('api/search/user', {params: data})
//           .then(response => {
//             console.log(response.body)
//             if (response.body.length !== 0) {
//               this.$store.state.users = response.body.users
//             } else {
//               this.$store.state.users = []
//             }
//           }, (response) => {
//             console.log(response)
//           })
//         console.log(this.ex5)
// //        console.log(this.$store.state.searchtype.options + ' -----------kkk----------- ' + this.$store.state.searchmuni.id)
//       }
    },
    // random profile load
    // beforeMount () {
    //   this.randomProfile()
    // },
    computed: {
      municipals () {
        return this.$store.state.municipals
      },
      skilsx () {
        return this.$store.state.skills
      },
      copyData () {
        const uuidv5 = require('uuid/v5')
        return uuidv5(this.compare_check.toString(), uuidv5.URL)
//        return this.compare_check.toString()
      },
      users () {
        return this.$store.state.users !== [] ? this.$store.state.users.slice(0, this.viewProfiles) : this.$store.state.users
        // return this.$route.fullPath !== '/admin' ? this.$store.state.users.slice(0, this.viewProfiles) : this.$store.state.users
      },
      pagi_ad () {
        return this.$store.state.pagi_ad
      },
      compare () {
        if (this.compare_check.length === 0) {
          return false
        } else {
          return true
        }
      }
    }
  }
</script>


<style lang="stylus">
  .br-0
    bottom 0
    right 0
  .zajix
    max-width 230px
    max-height 230px
  .pagination
    margin-top 10px
  .pagination li
    margin: 0 3px
  .pagination li a
    color: #fff !important;
    display: inline-block;
    font-size: 1.2rem;
    padding: 0px 10px;
    line-height: 30px;

  .pagination li:first-child
    background-color: #33c1b3;
    border-radius: 3px;

  .pagination li:last-child
    background-color: #33c1b3;
    border-radius: 3px;

  .pagination li.active
    background-color: #33c1b3;

  .za-text
    margin-left: -6px !important;
  @-webkit-keyframes pulse {
    25% {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
    75% {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
    }
  }

  @keyframes pulse {
    25% {
      -webkit-transform: scale(1.2);
      -ms-transform: scale(1.2);
      transform: scale(1.2);
    }
    75% {
      -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
      transform: scale(0.8);
    }
  }

  .pulse {
    display: inline-block;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  }

  .pulse {
    -webkit-animation-name: pulse;
    animation-name: pulse;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }
</style>
