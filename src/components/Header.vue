<template>
  <div>
    <!--<div v-if=""></div>-->
    <v-navigation-drawer
      persistent
      clipped
      v-model="drawer"
      class="bg-secondary hidden-lg-and-up"
    >
      <v-list-tile class="pa-4 mb-3 bg-primaryColor list-none">
        <v-list-tile-action style="list-style: none;">
          <img  v-scroll-to="{el:'#topScroll',offset: 0}" src="./../assets/logo-kk.png" style="min-width: 200px; max-height: 200px;" class="mobile-res-logo" alt="">
        </v-list-tile-action>
      </v-list-tile>
      <v-list dense class="bg-secondary">
        <template>
          <v-list-tile>
            <v-btn v-if="isAuth" flat small @click="logout" class="white--text">Log ud</v-btn>
            <v-menu v-if="!isAuth"
                    offset-x
                    :close-on-content-click="false"
                    :nudge-width="200"
                    v-model="menu1"
            >
              <v-btn class="white--text" small flat="" slot="activator" @click="drawer = !drawer" >LOG PÅ</v-btn>
              <v-card  :fullscreen="$vuetify.breakpoint.xsOnly" class="login-card po-f top-70 bg-secondary card pl-4 pr-4 pb-3 pt-2" style="z-index: 99999 !important;">
                <v-list class="bg-secondary">
                  <v-list-tile>
                    <v-list-tile-content>
                      <div class="hi-auto white--text"><h5 class="ma-0">LOGIN</h5></div>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <v-btn
                        flat @click="menu1 = false"
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
                    <label>Brugernavn</label>
                    <v-text-field
                      v-model="loginmail"
                      class="white--text pt-0 border-white pb-0"
                      placeholder="Brugernavn"
                    >
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12 >
                    <label>PASSWORD</label>
                    <v-text-field
                      v-model="loginpassword"
                      class="white--text pt-0 border-white pb-0"
                      type="password"
                      placeholder="Adgangskode"
                    >
                    </v-text-field>
                  </v-flex>
                </v-list>
                <div  class="d-inline">
                  <a class="white--text action-text" @click="openDIalog('passwordReset')">Glemt din adgangskode
                  </a>
                </div>
                <div  class="d-inline">
                  <a class="white--text action-text" @click="openDIalog('userNReset')"> Glemt dit brugernavn?
                  </a><br>
                </div>
                <div >
                  <a flat class="white--text action-text" @click="openDIalog('selectTypeModal')" @click.stop="menu1 = false" > Opret profil</a>
                </div>
                <v-card-actions class="pr-0">
                  <v-spacer></v-spacer>
                  <v-btn @click="login" class="bg-kk-btn">LOG PÅ</v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-list-tile>
          <v-list-tile  v-if="isAuth">
            <v-btn flat class="white--text" small to="profile"  @click="drawer = !drawer">
              PROFILE
            </v-btn>
            <div v-if="this.usersxtype === 'admin'">
            <v-btn flat class="white--text" small to="/admin"  @click="drawer = !drawer">
              Admin
            </v-btn>
            </div>
          </v-list-tile>
          <v-list-tile>
            <v-btn small flat class="white--text" v-scroll-to="{el:'#aboutScroll',offset: 5}" @click="drawer = !drawer">
              Om os
            </v-btn>
          </v-list-tile>
          <v-list-tile>
            <v-btn small flat class="white--text" @click="openDIalog('contactModal')" @click.stop="drawer = !drawer">
              Kontakt
            </v-btn>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      class="bg-primaryColor pa-4 pl-5 pr-7 small-header "
      dark
      app
      clipped-left
      fixed
    >
      <v-toolbar-title class="ml-0 ">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-lg-and-up"></v-toolbar-side-icon>
        <div class="point avatar avatar--tile nav-logo" @click="goto('/')">
          <img  v-scroll-to="{el:'#topScroll',offset: 0}" src="../assets/logo-kk.png" alt="Vuetify">
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <div v-if="this.$route.fullPath !== '/admin'">
        <v-menu
          offset-x
          :close-on-content-click="false"
          :nudge-width="200"
          v-model="noti"
          v-if="isAuth"
        >
          <v-btn @click="readNotifyClick" flat icon slot="activator" class="">
            <v-icon >notifications</v-icon>
            <span v-if="unnotify != 0" class="noti-icon"></span>
          </v-btn>
          <v-card class="po-f noti-card top-70">
            <div v-for="notify in mynotify" @click.stop="noti = false">
              <v-list>
                <v-list-tile avatar @click="notifyClick(notify)">
                  <v-list-tile-avatar>
                    <img src="./../assets/kk-logo.png" alt="John">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>Kommunekontakt
                      <small class="light">
                        <timeago :since="notify.created_at"></timeago>
                      </small>
                    </v-list-tile-title>
                    <v-list-tile-sub-title>{{ notify.data.message }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-btn v-if="notify.clickable=='false'" icon class="gr-text" >
                      <i class="material-icons">fiber_manual_record</i>
                    </v-btn>
                    <v-btn v-if="notify.clickable=='true'" icon class="" >
                      <i class="material-icons">fiber_manual_record</i>
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
              <v-divider></v-divider>
            </div>
            <v-list class="pa-0" v-if="xmore">
              <v-list-tile v-if="mynotify.length != 0">
                <v-list-tile-content class="text-xs-center point">
                  <v-list-tile-sub-title><div @click="loadMore">view more</div></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile v-if="mynotify.length == 0">
                <v-list-tile-content class="text-xs-center point">
                  <v-list-tile-sub-title><div @click="loadMore">no notifications</div></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-menu>
        <span v-if=" this.$store.state.usersxtype !== 'admin'">
        <v-btn v-if="isAuth" flat class="hidden-md-and-down"  @click="goto('/profile')">
          PROFIL
        </v-btn>
        </span>
        <span v-if=" this.$store.state.usersxtype === 'admin'">
        <v-btn v-if="isAuth" flat class="hidden-md-and-down"  @click="goto('/admin')">
          ADMIN
        </v-btn>
        </span>
        <v-btn flat class="hidden-md-and-down" @click="goto('/')" v-scroll-to="{el:'#aboutScroll',offset: 5}">
          Om os
        </v-btn>
        <v-btn flat class="hidden-md-and-down" @click="openDIalog('contactModal')">
          Kontakt
        </v-btn>
      </div>
      <div v-if="this.$route.fullPath === '/admin'">
        <v-btn flat class="hidden-md-and-down" v-scroll-to="{el:'#SearchAdmin',offset: 5}">
          Search
        </v-btn>
        <v-btn flat class="hidden-md-and-down"  v-scroll-to="{el:'#sendMessageadmin',offset: 5}">
          Send besked
        </v-btn>
      </div>
      <v-btn v-if="isAuth" @click="logout" class="bg-kk-btn hidden-md-and-down">Log ud</v-btn>
      <!---login-->
      <v-menu v-if="!isAuth"
              offset-x
        :close-on-content-click="false"
        :nudge-width="200"
        v-model="menu"
              class="gggggg"
      >
        <v-btn class="bg-kk-btn hidden-md-and-down" slot="activator">LOG PÅ</v-btn>
        <v-card  class="login-card po-f top-70 bg-secondary card pl-4 pr-4 pb-3 pt-2" style="z-index: 99999 !important;">
          <v-list class="bg-secondary">
            <v-list-tile>
              <v-list-tile-content>
                <div class="hi-auto white--text"><h5 class="ma-0">Log på</h5></div>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn
                  flat @click="menu = false"
                  icon
                  :class="fav ? '' : ''"
                >
                  <v-icon class="white--text">close</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
          <v-list class="bg-secondary mb-2">
            <v-flex xs12 mb-4>
              <label>Brugernavn</label>
              <v-text-field
                v-model="loginmail"
                class="white--text pt-0 border-white pb-0"
                placeholder="Brugernavn"
                @keyup.enter="login"
              >
              </v-text-field>
            </v-flex>
            <v-flex xs12 >
              <label>Adgangskode</label>
              <v-text-field
                v-model="loginpassword"
                class="white--text pt-0 border-white pb-0"
                type="password"
                placeholder="Adgangskode"
                @keyup.enter="login"
              >
              </v-text-field>
            </v-flex>
          </v-list>
          <div  class="d-inline">
            <a class="white--text action-text" @click="openDIalog('passwordReset')">Glemt din adgangskode
            </a>
          </div>
          <div  class="d-inline">
            <a class="white--text action-text" @click="openDIalog('userNReset')"> Glemt dit brugernavn?
            </a><br>
          </div>
          <div >
            <a flat class="white--text action-text" @click="openDIalog('selectTypeModal')"> Opret profil</a>
          </div>
          <v-card-actions class="pr-0">
            <v-spacer></v-spacer>
            <v-btn @click="login" class="bg-kk-btn">LOG PÅ</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-toolbar>
    <!--PasswordReset-->
    <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="passwordReset" class="large" persistent width="60%">
      <v-card class="bg-white pa-5">
        <v-btn flat icon class="kkblue right mt-0 mr-0" @click.native="passwordReset = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-container grid-list-md >
          <v-layout row wrap text-lg-left>
            <v-flex>
              <h5>Angiv venligst e-mailadressen til din konto. En verificeringskode vil blive sendt til dig. Når du har modtaget verificeringskoden vil du kunne vælge en ny adgangskode til din konto.</h5>
            </v-flex>
          </v-layout>
          <v-layout row wrap class=" pl-5">
            <v-flex md7 >
              <v-text-field
                name="input-1-3"
                placeholder="abc@mail.com"
                v-model="resetPassMail"
                type="email"
                single-line
                class="white-bg"
              ></v-text-field>
            </v-flex>
            <v-flex md1 mr-5>
              <v-btn class="bg-kk-btn trans" @click.native="passwordReset = false">Fortryd</v-btn>
            </v-flex>
            <v-flex >
              <v-btn @click="forgetPassword" class="bg-kk-btn">send</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
    <!--userNReset-->
    <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="userNReset" class="large" persistent width="60%">
      <v-card class="bg-white pa-5">
        <v-btn flat icon class="kkblue right mt-0 mr-0" @click.native="userNReset = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-container grid-list-md >
          <v-layout row wrap text-lg-left>
            <v-flex>
              <h5>Angiv venligst e-mailadressen der er tilknyttet din brugerkonto. Oplysningerne vil blive sendt til e-mailadressen.</h5>
            </v-flex>
          </v-layout>
          <v-layout row wrap class=" pl-5">
            <v-flex md7 >
              <v-text-field
                name="input-1-3"
                type="email"
                v-model="resetEmail"
                single-line
                class="white-bg"
              ></v-text-field>
            </v-flex>
            <v-flex md1 mr-5>
              <v-btn class="bg-kk-btn trans" @click.native="userNReset = false">Fortryd</v-btn>
            </v-flex>
            <v-flex >
              <v-btn @click="forgetUsername" class="bg-kk-btn">send</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
    <!--NotiViewModal-->
    <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="NotiViewModal" class="large" persistent width="60%">
      <v-card class="bg-white pa-5">
        <v-btn flat icon class="kkblue right mt-0 mr-0" @click.native="NotiViewModal = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-container grid-list-md >
          <v-layout row wrap>
            <v-flex xs12 md6 pa-3 text-md-left>
              <div v-if="this.$route.fullPath === '/admin'">
                <v-layout row wrap >
                  <v-flex xs2 text-md-left>
                    <img src="../assets/profile.png" class="res-img" alt="Vuetify">
                  </v-flex>
                  <v-flex xs5 text-md-left>
                    <h5 class="ma-0">Name</h5>
                    <p class="ma-0">mailid with mailto</p>
                  </v-flex>
                </v-layout>
              </div>
              <div v-if="this.$route.fullPath !== '/admin'">
                <div class=" avatar--tile bg-primaryColor pa-3">
                  <img src="../assets/logo-kk.png" class="footer-icon" alt="Vuetify">
                </div>
                <p>
                  Cvr.: 39368382 <br>
                  Tlf.:  23 20 90 43 <br>
                  Mail: <a href="mailto:kontakt@kommunekontakt.dk?">kontakt@kommunekontakt.dk</a>
                </p>
              </div>
            </v-flex>
            <v-flex xs12 md6 pa-3 text-md-right>
              <p>
                {{ notiView.created_at }}
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap text-lg-center>
            <v-flex>
              <h5>MESSAGE</h5>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12 md10 offset-md1  text-lg-left>
            <p> {{ notiView.data.message }}</p>
            </v-flex>
          </v-layout>
          <v-layout row wrap class="">
            <v-flex xs12 text-xs-right>
              <v-btn class="bg-kk-btn trans" @click.native="NotiViewModal = false">Luk</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
    <!--Select-type 1-->
    <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="selectTypeModal" class="large" persistent width="60%">
      <v-card class="bg-white pa-5">
        <v-btn flat icon class="kkblue right mt-0 mr-0" @click.native="selectTypeModal = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-container grid-list-md>
          <v-layout row wrap text-lg-center>
            <v-flex>
              <h5>Vælg profil type</h5>
            </v-flex>
          </v-layout>
          <v-layout row wrap class="">
            <v-flex md8 offset-md2  xs12>
              <v-select
                v-bind:items="select_items_type"
                v-model="selectTypeDD"
                single-line
                item-text="options"
                placeholder="Vælg type"
                class="kk-select mb-2"
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex md6 offset-md4 xs12  mr-5>
              <v-btn class="bg-kk-btn" v-if="!selectTypeDD" disabled @click="selectTypeModal = false" @click.stop="openDIalog('SignUpModal')">Opret</v-btn>
              <v-btn class="bg-kk-btn" v-if="selectTypeDD" @click.stop="selectTypeModal = false" @click="SignupModal">Opret</v-btn>
              <v-btn class="bg-kk-btn trans" @click="selectTypeModal = false">Fortryd</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
    <!--Signup-->
    <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="SignUpModal" class="large" persistent width="75%">
      <v-card class="bg-white pa-5 kkblue">
        <v-btn flat icon class="kkblue right mt-0 mr-0" @click.native="SignUpModal = false">
          <v-icon>close</v-icon>
        </v-btn>
        <form @submit.prevent="validateBeforeSubmit">
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex text-xs-left>
              <small><b>Felter markeret med en stjerne <br> (*) er påkrævet.</b></small>
              <h6 class="text-xs-center capitalize">Opret profil {{myType.options }}</h6>
              <p class="text-xs-center"><b>Profiloplysninger</b></p>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex md4 text-xs-center text-md-left pa-3>
              <div>
                <label for="avatar"><b>Upload billede eller logo</b></label>
                <v-avatar
                  :tile="tile"
                  size="200px"
                  class=""
                  id="avatar"
                >
                  <croppa v-model="myCroppa ">
                    <img slot="placeholder"
                         src="../assets/profile.png">
                  </croppa>
                  <!--<img src="./../assets/profile.png" alt="avatar">-->
                </v-avatar>
              </div>
              <div class="mt-2 text-xs-left" v-if="myType.options == 'Mentor'" >
                <label><b>*Køn:</b></label>
                <v-layout row wrap>
                  <v-radio-group v-model="gender"  v-validate="'required'"
                                 name="gender"
                                 :class="{'input': true, 'is-danger': errors.has('gender') }" row class="bg-trans">
                    <v-radio label="Mand"
                             name="radio_group" v-validate="'required|in:male,female'" value="male" type="radio"
                             class="bg-trans kkblue" ></v-radio>
                    <v-radio label="Kvinde"
                             name="radio_group" value="female" type="radio"
                             class="bg-trans kkblue"></v-radio>
                    <small class="red--text help is-danger" v-show="errors.has('radio_group')">{{ errors.first('radio_group') }}</small>
                  </v-radio-group>
                </v-layout>
                <small v-show="errors.has('gender')" class="red--text help is-danger">{{ errors.first('gender') }}</small>
              </div>
            </v-flex>
            <v-flex md4 text-lg-left pa-3 :class="{ 'control': true }">
              <div>
                <label><b>*Navn:</b></label>
                <v-text-field
                  name="name"
                  v-validate="'required'"
                  :class="{'input': true, 'is-danger': errors.has('name') }"
                  v-model="name"
                  hide-details single-line
                  type="text"
                  placeholder="Navn">
                </v-text-field>
                <small v-show="errors.has('name')" class="red--text help is-danger">{{ errors.first('name') }}</small>
              </div>
              <div class="mt-3">
                <label><b>*Brugernavn:</b></label>
                <v-text-field
                  name="user_name"
                  v-validate="'required'"
                  :class="{'input': true, 'is-danger': errors.has('user_name') }"
                  type="text"
                  v-model="username"
                  hide-details single-line
                  placeholder="Brugernavn">
                </v-text-field>
                <small v-show="errors.has('user_name')" class="red--text help is-danger">{{ errors.first('user_name') }}</small>
              </div>
              <div class="mt-3">
                <label ><b>*Mail:</b></label>
                <v-text-field
                  v-validate="'required|email'"
                  :class="{'input': true, 'is-danger': errors.has('email')}"
                  name="email"
                  v-model="email"
                  hide-details single-line
                  placeholder="email@email.dk"
                  type="email">
                </v-text-field>
                  <small v-show="errors.has('email')" class="red--text help is-danger">{{ errors.first('email') }}</small>
              </div>
              <div class="mt-3">
                <label><b>*Telefonnummer:</b></label>
                <v-text-field
                  name="phone"
                  v-validate="'required|numeric'"
                  :class="{'input': true, 'is-danger': errors.has('phone') }"
                  type="text"
                  v-model="pnumber"
                  hide-details single-line
                  placeholder="Telefonnummer">
                </v-text-field>
                <small v-show="errors.has('phone')" class="red--text help is-danger">{{ errors.first('phone') }}</small>
              </div>
            </v-flex>
            <v-flex md4 text-lg-left pa-3 :class="{ 'control': true }">
              <div>
                <label><b>*Adgangskode:</b></label>
                <v-text-field
                  name="password"
                  v-validate="'required|confirmed:Adgangskode'"
                  :class="{'input': true, 'is-danger': errors.has('password') }"
                  v-model="password"
                  hide-details single-line
                  type="password"
                  placeholder="Indtast adgangskode">
                </v-text-field>
                <small v-show="errors.has('password')" class="red--text help is-danger">{{ errors.first('password') }}</small>
              </div>
              <div class="mt-3">
                <label><b>*Bekræft adgangskode:</b></label>
                <v-text-field
                  name="Adgangskode"
                  :class="{'input': true, 'is-danger': errors.has('password') }"
                  type="password"
                  v-model="passwordRe"
                  hide-details single-line
                  placeholder="Bekræft adgangskode">
                </v-text-field>
                <small v-show="errors.has('password')" class="red--text help is-danger">{{ errors.first('password') }}</small>
              </div>
              <div class="mt-3">
                <label><b>Hjemmeside/URL:</b></label>
                <v-text-field
                  name="url"
                  v-validate="'url'"
                  :class="{'input': true, 'is-danger': errors.has('url') }"
                  v-model="url"
                  type="text"
                  hide-details single-line
                  placeholder="http://google.dk">
                </v-text-field>
                <small v-show="errors.has('url')" class="red--text help is-danger">{{ errors.first('url') }}</small>
              </div>
              <div class="mt-3">
                <label ><b>*Vælg kommuner (dit virkeområde):</b></label>
                <v-select
                  placeholder="Vælg Kommune"
                  v-bind:items="municipals"
                  v-validate="'required'"
                  name="list"
                  item-text="name"
                  item-value="id"
                  v-model="selectmunisipality"
                  persistent-hint
                  multiple
                  max-height="400"
                  class="kk-select mb-0"
                ></v-select>
                <small v-show="errors.has('list')" class="red--text help is-danger" >{{ errors.first('list') }}</small>
              </div>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="pa-3">
              <label><b>*Angiv faglige/praktiske kompetenceområder</b></label>
            </v-flex>
          </v-layout>
          <v-layout row wrap text-lg-center>
            <v-flex md3 xs6 lg2  v-for="skill in skilsx">
              <span class="tooltip" style="z-index: 99999; border-bottom: none;">
                           <span class="tooltiptext breakWord" style="top:-30px; right: 20%;text-align: center">{{skill.name}}
                           </span>
              <v-checkbox
                name="ex5"
                type="checkbox"
                class="kkblue"
                data-vv-name="checkbox"
                :value="skill.id"
                v-model="ex5"
                :label="skill.name">
              </v-checkbox>
              </span>
            </v-flex>
            <small v-show="errors.has('ex5')" class="red--text help is-danger">{{ errors.first('ex5') }}</small>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="ma-3">
              <label ><b>Beskrivelse</b></label>
              <v-text-field v-model="discription" class="bg-secondary kk-textarea" box multi-line placeholder="Skriv om dig selv eller hvad du kan hjælpe med"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs1>
              <v-checkbox
                name="terms"
                type="checkbox"
                class="kkblue"
                data-vv-name="checkbox"
                v-model="terms"
              >
              </v-checkbox>
            </v-flex>
            <v-flex xs11>
              <h6 class="point" style="line-height: 33px; margin-left: -25px; font-weight: 300;" @click="TermsOpen('termsOpen')"><b>jeg har læst og accepterer kommunekontakts vilkår- <span style="font-weight: 700">læs betingelser her</span></b></h6>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-spacer></v-spacer>
            <v-flex md1 mr-4>
              <v-btn class="bg-kk-btn trans" @click.native="SignUpModal = false">Fortryd</v-btn>
            </v-flex>
            <v-flex md3>
              <v-btn class="bg-kk-btn" v-if="terms" type="submit" @click="signup()">Tilføj betalingskort</v-btn>
              <v-btn class="bg-kk-btn" disabled v-if="!terms" type="submit">Tilføj betalingskort</v-btn>
            </v-flex>
          </v-layout>

        </v-container>
        </form>
      </v-card>
    </v-dialog>
    <!--contact-modal 1-->
    <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="contactModal" class="large" persistent width="75%">
      <v-card class="bg-primaryColor gray-txt pa-5">
        <v-btn flat icon class="white--text right mt-0 mr-0" @click.native="contactModal = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-container grid-list-md text-xs-center >
          <v-layout row wrap text-lg-center>
            <v-flex>
              <h6>Kontakt os</h6>
            </v-flex>
          </v-layout>
          <v-layout row wrap text-md-left class="pa-3 pb-0">
            <v-flex xs12 md6>
              <P class="pt-5">
                <b>Kommunekontakt</b><br>
                Cvr: 39368382 <br>
                Tlf:  23 20 90 43 <br>
                Mail: <a href="mailto:kontakt@kommunekontakt.dk?">kontakt@kommunekontakt.dk</a>
              </P>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field
                v-model="sendMail"
                hide-details
                single-line
                class="input-gray"
                type="text"
                placeholder="Email">
              </v-text-field>
              <v-text-field
                v-model="sendName"
                hide-details
                single-line
                class="input-gray mt-2"
                type="text"
                placeholder="Emne">
              </v-text-field>
              <v-text-field v-model="sendDiscribe" box class="pa-0 mt-2" multi-line placeholder="Tekst..."></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap text-md-right pr-0>
            <v-flex text-md-right>
              <v-btn class="bg-kk-btn trans" @click.native="contactModal = false">Fortryd</v-btn>
            <!--</v-flex>-->
            <!--<v-flex md1>-->
              <v-btn @click="mailSent" class="bg-kk-btn">send</v-btn>
              <p class="dis light">(Denne besked sendes til administrator)</p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
    <!--AddPaymentModal-->
    <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="AddPaymentModal" class="large" persistent width="75%">
      <v-card class="bg-white pl-5 pt-5 pr-5 pb-3 kkblue">
        <v-btn flat icon class="kkblue right mt-0 mr-0" @click.native="AddPaymentModal = false">
          <v-icon>close</v-icon>
        </v-btn>
        <form @submit.prevent="validateBeforeSubmit">
        <v-container grid-list-md >
          <v-layout row wrap>
            <v-flex text-lg-center>
              <h6>Betalingsoplysninger</h6>
              <p><b>Indtast betalingsoplysninger</b></p>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex text-lg-left md6 pa-3>
              <label><b>*Kortnummer</b></label>
              <!--credit_card-->
              <v-text-field
                :class="{'input': true, 'is-danger': errors.has('credit_field') }"
                v-validate="'digits:16'"
                name="credit_field"
                type="text"
                hide-details
                single-line
                v-model="cardNumber"
                placeholder="#### #### #### ####"
              >
              </v-text-field>
              <small v-show="errors.has('credit_field')" class="help is-danger red--text">{{ errors.first('credit_field') }}</small>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex text-lg-left md4 pa-3>
              <label><b>* Udløbet måned</b></label>
              <v-text-field
                v-validate="'numeric|digits:2|max_value:12'"
                :class="{'input': true, 'is-danger': errors.has('cardMonth') }"
                name="cardMonth"
                type="text"
                hide-details single-line
                v-model="cardMonth"
                placeholder="MM"
              >
              </v-text-field>
              <small v-show="errors.has('cardMonth')" class="help is-danger red--text">{{ errors.first('cardMonth') }}</small>
            </v-flex>
            <v-flex text-lg-left md4 pa-3>
              <label><b>*År</b></label>
              <v-text-field
                v-validate="'numeric|digits:2'"
                :class="{'input': true, 'is-danger': errors.has('cardYear') }"
                name="cardYear"
                hide-details single-line
                v-model="cardYear"
                placeholder="YY"
              >
              </v-text-field>
              <small v-show="errors.has('cardYear')" class="help is-danger red--text">{{ errors.first('cardYear') }}</small>
            </v-flex>
            <v-flex text-lg-left md4 pa-3>
              <label><b>*cvc</b></label>
              <v-text-field
                v-validate="'numeric|digits:3'"
                :class="{'input': true, 'is-danger': errors.has('cardcvc') }"
                name="cardcvc"
                hide-details single-line
                v-model="cardcvc"
                placeholder="###"
              >
              </v-text-field>
              <small v-show="errors.has('cardcvc')" class="help is-danger red--text">{{ errors.first('cardcvc') }}</small>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex text-lg-left md4 pa-3>
              <img class="w-100" src="./../assets/cards.png" alt="">
              <p class="dis ma-0">(betalt med)</p>
            </v-flex>
            <v-flex text-lg-right md8 pa-3>
              <v-btn @click="ownerPay" type="submit" class="bg-kk-btn" large>PAY - 299 DKK</v-btn>
              <v-btn class="bg-kk-btn trans" large @click.native="AddPaymentModal = false">Fortryd</v-btn>
              <p class="dis ma-0"></p>
            </v-flex>
          </v-layout>
        </v-container>
        </form>
      </v-card>
    </v-dialog>
    <!--terms-modal-->
    <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="TermsModal" class="large" persistent width="75%">
      <v-card class="bg-white pl-5 pt-5 pr-5 pb-3 kkblue" >
        <v-btn flat icon class="kkblue right mt-0 mr-0" @click.stop="openDIalog('SignUpModal')" @click.native="TermsOpen('termsClose')">
          <v-icon>close</v-icon>
        </v-btn>
        <h3 class="primary-txt"><b>Kommunekontakt.dk</b></h3>
        <h4>Den sikre vej til det rette tilbud</h4>
          <h5 class="gray-txt"><b>Betingelser og vilkår</b></h5>
          <p>Læs venligst nedenstående betingelser og vilkår forud for brug af denne hjemmeside.
          Kommunekontakt er en formidlingshjemmeside og ved at gøre brug af hjemmesiden har du accepteret disse betingelser.
          Såfremt du ikke kan accepterer betingelserne, beder vi dig forlade hjemmesiden uden at gøre yderligere brug af den.</p>
        <h5 class="gray-txt"><b>Kommunekontakts ansvar</b></h5>
          <p>Kommunekontakt er forpligtet til at gøre sig kommercielle, rimelige bestræbelser på at levere de ydelser, som er aftalt, såfremt Brugeren rettidigt leverer det nødvendige materiale.
          Kommunekontakt formidler annoncer fra erhvervsdrivende til landets kommuner og offentligheden i øvrigt(kommunekontakts hjemmeside er offentligt tilgængelig). Disse parter(erhvervsdrivende, kommuner og offentligheden i øvrigt) beskrives i det følgende som brugere.
          Kommunekontakts ydelser er således alene beregnet til private og offentlige virksomheder. Dette uanset om brugerne af kommunekontakts ydelser er registeret som virksomhed eller ej. Samarbejde med Kommunekontakt eller benyttelse af kommunekontakts ydelser er således ikke omfattet af lov om forbrugeraftaler.
          Brugerne er uafhængige af Kommunekontakt. Kommunekontakt kan ikke drages til ansvar for de aftaler der bliver indgået mellem brugerne på siden.
          Brugerne - herunder direkte og indirekte annoncører - er selvstændigt ansvarlige for opsætning og indhold af tilbud, kundeservice og levering af de tjenesteydelser, som de udbyder. Kommunekontakt er således ikke ansvarlig for udformningen af brugernes tilbud, kundeservice eller levering af tjenesteydelser.
          Kommunekontakt påtager sig intet ansvar for annoncer eller for de aftaler, som brugerne indgår på baggrund af tilbud formidlet af Kommunekontakt eller Kommunekontakts samarbejdspartnere. Kommunekontakt er ikke ansvarlig for fejl eller mangler i forbindelse med tilbudsgivernes levering af varer eller tjenesteydelser.
          Brugeren accepterer, at Kommunekontakt ikke garanterer kontinuerlig eller sikker adgang til Kommunekontakts ydelser og at Kommunekontakt ikke gennemgår indhold eller oplysninger fra annoncører på hjemmesiden og brugere af Kommunekontakts ydelser, hvorfor Kommunekontakt ikke giver nogen garanti eller indeståelse i forbindelse med visningen af et sådant indhold eller oplysninger, herunder i søgeresultater.
          Brugeren accepterer, at Kommunekontakt ikke er ansvarlig for noget tab, herunder direkte tab, tab af fortjeneste, driftstab, goodwill, omkostninger, udgifter og andre følgeskader, der opstår som følge af Brugerens brug af Kommunekontakts hjemmesider, ydelser, produkter og platforme, selvom Brugeren underretter Kommunekontakt herom, eller Kommunekontakt med rimelighed kunne forudse muligheden for sådanne skader.
          </p>
          <h5 class="gray-txt"><b>Data og brugsret</b></h5>
          <p>De indtastede annonce- og profilinformationer gemmes af Kommunekontakt og ved godkendelse af betingelser og vilkår overdrager du brugsret af indholdet til Kommunekontakt. Indholdet bruges til fremstilling af din(e) annonce(r) på hjemmesiden www.kommunekontakt.dk.
          Informationerne kan dog også benyttes i forbindelse med eksempelvis før- og efter historier i nyhedsbreve samt ved eventuelle gengivelser af hjemmesiden og delelementer af hjemmesiden i opslag på sociale medier anvendt af  Kommunekontakt eller anden markedsføring og branding af Kommunekontakt.
          Dine indtastede informationer ville ikke blive videregivet, solgt eller brugt til markedsføring i andre sammenhænge end dem der følger af Kommunekontakts ydelser og produkter. Ønsker du, at få dine oplysninger slettet eller rettet på kommunekontakts server kan du til enhver tid anmode om dette.
          </p><p>Prisændringer, betaling og abonnementers fornyelse
          Kommunekontakt opkræver betaling for visse ydelser. Priserne fremgår af individuelle tilbud afgivet af kommunekontakt til potentielle brugere og generelle tilbud opslået på hjemmesiden www. Kommunekontakt.dk
          Kommunekontakt er til enhver tid berettiget til at ændre afregningsmetoder og prisernes størrelse for endnu ikke indgåede aftaler uden varsel, og Kommunekontakt kan derfor bl.a. ændre sine priser midlertidigt eksempelvis i forbindelse med kampagner eller nye ydelser eller for bestemte kundegrupper – f.eks. nye kunder.
          Ved løbende automatisk abonnementsfornyelse skal afmeldingen af abonnementsfornyelsen ske senest 5 hverdage før udløbet af den aktuelle abonnentsperiode. Ved senere afmelding træder afmeldingen og betalingsforpligtelsen først i kraft ved udløbet af den næstkommende abonnementsperiode.
          Ved løbende automatisk abonnementsfornyelse varsles ændringer i abonnementspriser senest 3 mdr. før prisændringen træder i kraft med fremadrettet virkning. Varslingen sker til den mailadresse som er registeret i Brugerens profil på kommunekontakt.dk.
          Brugeren har selv ansvar for, at den registrerede mailadresse er korrekt. Såfremt abonnementet ikke er opsagt inden den varslede prisændrings ikrafttræden har Brugeren accepteret prisændringen.
          </p>
        <h5 class="gray-txt"><b>Manglende betaling</b></h5>
          <p>Såfremt Brugeren ikke betaler rettidigt, kan Kommunekontakt begrænse brugerens mulighed for at bruge ydelserne. Såfremt Brugeren betaler med kreditkort, Dankort eller på anden måde, kan Brugerens betaling blive pålagt et gebyr, som Brugeren vil blive oplyst om, når Brugeren foretager betalingen.
          Kommunekontakt forbeholder sig retten til at slette Brugerens profil/annonce såfremt Kommunekontakt ikke rettidigt har modtaget betaling.
          Opsigelse, opsigelsesvarsel og passivering af profil
          Ved løbende automatisk abonnementsfornyelse skal afmeldingen af abonnementsfornyelsen ske senest 5 hverdage før udløbet af den aktuelle abonnentsperiode. Ved senere afmelding træder afmeldingen først i kraft ved udløbet af den næstkommende abonnementsperiode
          Opsigelsen skal ske ved at brugeren logger sig ind på sin profil og opsiger abonnementet. Dette gøres ved at passivere profilen samt eventuelle underliggende profiler/annoncer hvis brugeren har oprettet mere end en profil/annonce. Ved passivering af profiler/annoncer bevares oplysningerne i op til 3 år og profil og annonce kan således aktiveres igen hvis brugeren ønsker dette. Hvis brugen samtidigt med passivering af sin profil(er)/annonce(r) ønsker sine oplysninger permanent slettet med det samme skal dette meddeles til kommunekontakt på nedenstående mail eller ved almindeligt brev.
          Hvis du som bruger ikke kan komme ind på din profil kan du bede om at blive kontaktet for opsigelse ved at skrive til os på opsigelse@kommunekontakt.dk.
          Husk at oplyse dit navn/firmanavn og dit telefonnummer så vi kan få bekræftet din opsigelse.</p>
        <h5 class="gray-txt"><b>Ændring af vilkår</b></h5>
          <p>Vi kan til enhver tid ændre vores hjemmesidevilkår. Du er underlagt de politikker, vilkår og betingelser der er gældende på det tidspunkt du gør brug af hjemmesiden.
          </p>
        <h5 class="gray-txt"><b>Nyhedsmail og kontaktaccept</b></h5>
         <p> Kommunekontakt må kontakte dig via mail, telefon og sms. Herunder i forbindelse med opsigelse af abonnement. Du accepterer at modtage kommunekontakts nyhedsbrev højst 2 gange om måneden. Nyhedsbrevet kan til enhver tid afmeldes.
        </p>
        <v-flex text-lg-right md12 pa-3>
          <v-btn class="bg-kk-btn trans" large  @click.stop="TermsOpen('termsClose')" @click.native="TermsModal = false">LUK</v-btn>
        </v-flex>
      </v-card>

    </v-dialog>
  </div>
</template>
<script>
  /* eslint-disable no-unused-vars */

  export default {
    data () {
      return {
        offsetTop: 0,
        TermsModal: false,
        terms: null,
        userNReset: false,
        resetEmail: '',
        resetPassMail: '',
        sendDiscribe: '',
        sendMail: '',
        sendName: '',
        menu1: false,
        ownerid: '',
        cardMonth: '',
        cardNumber: '',
        cardYear: '',
        cardcvc: '',
        name: '',
        email: '',
        password: '',
        url: '',
        passwordRe: '',
        afterLogin: false,
        skills: [],
        skillsSupplier: [],
        ex5: [],
        loginmail: '',
        loginpassword: '',
        selectTypeDD: null,
        discription: '',
        pnumber: '',
        username: '',
        SignUpModal: false,
        select_items_type: [
          { options: 'Mentor' },
          { options: 'Beskæftigelsestilbud' }
        ],
        contactModal: false,
        NotiViewModal: false,
//        NotiViewModalAdmin: false,
        passwordReset: false,
        AddPaymentModal: false,
        fav: true,
        xmore: true,
        menu: false,
        noti: false,
        message: false,
        hints: true,
        selectTypeModal: false,
        user: 'i am nyn',
        drawer: false,
        gender: '',
        tile: false,
        selectmunisipality: [],
        isAuth: false,
        unnotify: 0,
        municipals: [],
        mynotify: [],
        myCroppa: {},
        usersxtype: this.$store.state.usersxtype,
        notiView: {
          data: {
            message: ''
          }
        },
        newPerson: [
          {name: 'aaaaaaaaa'}
        ]
      }
    },
    mounted () {
      if (this.usersxtype === 'admin') {
        this.$router.push('/admin')
      }
    },
    beforeCreate () {
    },
    created () {
      this.isAuth = this.$auth.isAuthenticated()
      // this.skillsx()
      // this.skillsSup()
      this.municipal()
      if (this.isAuth) {
        this.notify()
      }
    },
    methods: {
      addPerson_OK () {
        if (this.$store.state.municipals !== '') {
          this.$store.state.municipals.unshift({name: 'aaaaaaaaaaaaaaaaaaabcd'})
        }
      },
      skillsx () {
        if (this.selectTypeDD.options === 'Mentor') {
          this.$store.state.skills = []
          this.skillsMent()
        } else {
          this.$store.state.skills = []
          this.skillsSup()
        }
      },
      SignupModal () {
        this.SignUpModal = true
        this.skillsx()
      },
      forgetPassword () {
        let data = {
          email: this.resetPassMail
        }
        this.$http.post('api/auth/reset/password', data)
          .then(response => {
            console.log(response.body)
            this.passwordReset = false
            this.$toasted.success('Tjek din e-mail', {timeout: 8000})
          }, (response) => {
            console.log(response.body)
            this.$toasted.error(response.body.error.errors[Object.keys(response.body.error.errors)[0]], {timeout: 8000})
          })
      },
      forgetUsername () {
        let data = {
          email: this.resetEmail
        }
        this.$http.post('api/auth/recovery', data)
          .then(response => {
            console.log(response.body)
            this.userNReset = false
            this.$toasted.success('Tjek din e-mail', {timeout: 8000})
          }, (response) => {
            console.log(response.body)
            this.$toasted.error(response.body.error.message, {timeout: 8000})
            // response.body.error.errors[Object.keys(response.body.error.errors)[0]]
          })
      },
      mailSent () {
        let data = {
          subject: this.sendName,
          email: this.sendMail,
          content: this.sendDiscribe
        }
        this.$http.post('api/mail', data)
          .then(response => {
            this.contactModal = false
            this.$toasted.success('Tak for din henvendelse, din besked er modtaget!', {timeout: 8000})
          }, (response) => {
            console.log(response.body)
          })
      },
      readNotifyClick () {
        this.$http.post('api/markAsRead')
          .then(response => {
            this.unnotify = 0
          }, (response) => {
            console.log(response.body)
          })
      },
      notifyClick (data) {
        this.$http.post('api/markAsRead/' + data.xid)
          .then(response => {
            this.NotiViewModal = true
            this.notiView = data
            this.$_.map(this.mynotify, function (obj) {
              if (obj.xid === data.xid) {
                obj.clickable = 'true'
              }
            })
          }, (response) => {
            console.log(response.body)
          })
      },
      uploadCroppedImage () {
        this.myCroppa.generateBlob((blob) => {
          // write code to upload the cropped image file (a file is a blob)
        }, 'image/jpeg', 0.8) // 80% compressed jpeg file
      },
      validateBeforeSubmit () {
        this.$validator.validateAll().then((result) => {
          console.log(result)
          if (result) {
            // eslint-disable-next-line
            return
          }
          this.$toasted.error('Udflyd alle påkrævet felter', {timeout: 8000})
        })
      },
      goto (url) {
        this.$router.push(url)
//        this.$router.go(url)
      },
      ownerPay () {
        var data = {
          card_no: this.cardNumber,
          exp_year: this.cardYear,
          exp_month: this.cardMonth,
          cvv_no: this.cardcvc
        }
        this.$http.post('api/payment/user/' + this.ownerid + '/newcard', data)
          .then(response => {
            console.log(response.body)
            this.AddPaymentModal = false
            this.menu = true
            this.$toasted.success(response.body.status, {timeout: 8000})
          }, (response) => {
            console.log(response.body)
            if (response === true) {
              this.$toasted.success(response.body.status, {timeout: 8000})
            } else {
              console.log(response.body)
              this.$toasted.error(response.body.status, {timeout: 8000})
            }
          })
      },
      signup () {
        if (this.passwordRe === this.password) {
          var data = {
            name: this.name,
            email: this.email,
            telephone: this.pnumber,
            user_name: this.username,
            password: this.password,
            url: this.url,
            avatar: this.myCroppa.generateDataUrl(),
            municipality: this.selectmunisipality,
            gender: this.gender,
            discription: this.discription,
            user_type: this.selectTypeDD.options,
            skills: this.ex5
          }
//        console.log(data)
          this.$http.post('api/auth/signup', data)
            .then(response => {
              this.$auth.setToken(response.body.token)
              this.ownerid = response.body.userId
              this.SignUpModal = false
              this.AddPaymentModal = true
            }, (response) => {
              this.$toasted.error(response.body.error.errors[Object.keys(response.body.error.errors)[0]], {timeout: 8000})
              console.log(response.body)
            })
        }
      },
      login () {
        var data = {
          user_name: this.loginmail,
          password: this.loginpassword
        }
        this.$http.post('api/auth/login', data)
          .then(response => {
            if (response.body.status === 'ok') {
              this.$auth.setToken(response.body.token)
              this.isAuth = true
              this.loginpassword = ''
              this.$toasted.success('Velkommen', {timeout: 8000})
              this.$store.state.usersxtype = response.body.type
              if (response.body.type === 'admin') {
                location.reload(true)
                // this.$router.replace('/admin')
                this.$router.push('/admin')
              } else {
                this.$router.push('/profile')
                this.$router.go('/profile')
                // location.reload(true)
              }
            }
            if (response.body.status === 'fail') {
              console.log('you have no login permission you are assistant')
              this.$toasted.error('Du har ikke rettigheder til at logge på', {timeout: 8000})
            }
          }, (response) => {
            this.$toasted.error('Brugernavn eller adgangskort er forkert', {timeout: 8000})
            console.log('worrng username / password')
          })
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
              console.log(response.body.skills)
            }, (response) => {
              console.log(response.body)
            })
        }
      },
      logout () {
        this.$auth.destroyToken()
        this.isAuth = false
        this.$router.push('/')
      },
      municipal () {
        if (this.$store.state.municipals.length === 0) {
          this.$http.get('api/municipal')
            .then(response => {
              this.municipals = response.body.municipals
              this.$store.state.municipals = response.body.municipals
            }, (response) => {
              console.log(response.body)
            })
        }
      },
      notify () {
        this.$http.get('api/get/message?skip=' + this.mynotify.length)
          .then(response => {
            this.mynotify = response.body.notify
            this.unnotify = response.body.unreadNotify
          }, (response) => {
            console.log(response.body)
          })
      },
      loadMore () {
        this.$http.get('api/get/message?skip=' + this.mynotify.length)
          .then(response => {
            if (response.body.notify.length === 0) {
              this.xmore = false
            } else {
              for (let i = 0; i < response.body.notify.length; i++) {
                this.mynotify.push(response.body.notify[i])
              }
            }
          })
      },
      openDIalog (data) {
        this.menu = false
        this.contactModal = data === 'contactModal' ? !this.contactModal : false
        this.selectTypeModal = data === 'selectTypeModal' ? !this.selectTypeModal : false
        this.passwordReset = data === 'passwordReset' ? !this.passwordReset : false
        this.userNReset = data === 'userNReset' ? !this.userNReset : false
        // this.SignUpModal = data === 'SignUpModal' ? !this.SignUpModal : false
        this.AddPaymentModal = data === 'AddPaymentModal' ? !this.AddPaymentModal : false
        // this.TermsModal = data === 'TermsModal' ? !this.TermsModal : false
      },
      openMenu (data) {
        this.noti = false
        this.noti = data === 'noti' ? !this.noti : false
      },
      TermsOpen (data) {
        if (data === 'termsOpen') {
          this.TermsModal = true
          this.SignUpModal = false
        } else if (data === 'termsClose') {
          this.TermsModal = false
          this.SignUpModal = true
        }
      }
    },
    watch: {
      selectTypeDD () {
        this.$store.state.selectTypeDD = this.selectTypeDD
      },
      selectmunisipality () {
        this.$store.state.selectmunisipality = this.selectmunisipality
      }
    },
    computed: {
      // isTypex () {
      //   return this.$store.state.isType
      // },
      skilsx () {
        return this.$store.state.skills
      },
      myType () {
        return this.$store.state.selectTypeDD
      }
    }
  }
</script>
<style lang="stylus">
</style>
