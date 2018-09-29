<template>
  <div >
    <div class="bg-primaryColor pt-1 pb-1">
      <v-container grid-list-md name="profile">
        <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="ProfileView" class="large" persistent width="80%">
          <v-card class="bg-primaryColor gray-txt pa-5">
            <v-btn flat icon class="white--text right mt-0 mr-0" @click.native="ProfileView = false">
              <v-icon>close</v-icon>
            </v-btn>
            <v-container grid-list-md text-xs-center >
              <v-layout row wrap text-xs-center>
              </v-layout>
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
                      <p><b>Hjemmeside : </b><a  target="_blank" :href="'http://' + up.url ">{{up.url}}</a>
                      </p>
                    </v-flex>
                    <v-flex xs6 pa-3>
                      <!--<p><b>Brugernavn : </b>{{up.user_name}}</p>-->
                      <p><b>Telefonnummer : </b>{{up.telephone}}</p>
                      <p><b>Kommune : </b>
                      <span v-for="municipale in user.municipality">{{ municipale.name }}, </span></p>
                      <!--<p>{{// up.municipality.name}}</p>-->
                      <p><b>Køn : </b>{{up.gender}}</p>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap text-xs-left>
                    <v-flex xs12 pa-3>
                      <p><b>Arbejdsområder: </b>
                        <v-chip small class="bg-gray kkblue" v-for="skill in up.skills">{{skill.name}}</v-chip>
                      </p>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12 pa-3>
                  <v-layout row wrap text-xs-left>
                    <v-flex xs2 pa-3>
                      <p><b>Om mig : </b></p>
                    </v-flex>
                    <v-flex xs10 pa-3 style="white-space: pre-line;">
                      {{up.discription}}
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
              <v-btn class="bg-kk-btn" @click.native="ProfileView = false">Luk</v-btn>
            </v-container>
          </v-card>
        </v-dialog>
        <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="userupdate" class="large" persistent width="75%">
          <form @submit.prevent="validateBeforeSubmit">
          <v-card class="bg-white pa-5 kkblue">
            <v-btn flat icon class="kkblue right mt-0 mr-0" @click.native="userupdate = false">
              <v-icon>close</v-icon>
            </v-btn>
            <v-container grid-list-md>
              <v-layout row wrap>
                <v-flex text-xs-left>
                  <small><b>Felter markeret med en stjerne <br> (*) er påkrævet.</b></small>
                  <h6 class="text-xs-center">{{user.user_type}}</h6>
                  <p class="text-xs-center"><b><Stamdata></Stamdata></b></p>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex md4 text-xs-center pa-3>
                  <div>
                    <label><b>Profilbillede</b></label>
                    <croppa v-model="myCroppa"
                            :initial-image="$auth.getDomain()+user.avatar"
                            :accept="'image/*'"
                            :zoom-speed="15"
                            slot="initial">
                    </croppa>
                  </div>
                </v-flex>
                <v-flex md4 text-lg-left pa-3>
                  <div>
                    <label for="name"><b>*Navn:</b></label>
                    <v-text-field
                      id="name"
                      v-model="user.name"
                      hide-details single-line
                      type="text"
                      placeholder="Navn">
                    </v-text-field>
                  </div>
                  <div class="mt-3">
                    <label for="email"><b>*Mail:</b></label>
                    <v-text-field
                      id="email"
                      v-model="user.email"
                      hide-details single-line
                      placeholder="sample@mail.dk"
                      type="email">
                    </v-text-field>
                  </div>
                  <div class="mt-3">
                    <label for="password"><b>*Adgangskode:</b></label>
                    <v-text-field
                      name="password"
                      v-validate="'required|confirmed:{target}'"
                      :class="{'input': true, 'is-danger': errors.has('password') }"
                      id="password"
                      v-model="user.password"
                      hide-details single-line
                      type="password"
                      placeholder="adgangskode">
                    </v-text-field>
                    <small v-show="errors.has('password')" class="red--text help is-danger">{{ errors.first('password') }}</small>
                  </div>
                  <div class="mt-3">
                    <label><b>*Bekræft adgangskode:</b></label>
                    <v-text-field
                      name="{target}"
                      :class="{'input': true, 'is-danger': errors.has('password') }"
                      type="password"
                      v-model="passwordRe"
                      hide-details single-line
                      placeholder="Bekræft adgangskode">
                    </v-text-field>
                    <small v-show="errors.has('password')" class="red--text help is-danger">{{ errors.first('password') }}</small>
                  </div>
                </v-flex>
                <v-flex md4 text-lg-left pa-3>
                  <!--<div>-->
                    <!--<label for="username"><b>*Brugernavn:</b></label>-->
                    <!--<v-text-field-->
                      <!--type="text"-->
                      <!--id="username"-->
                      <!--v-model="user.user_name"-->
                      <!--hide-details single-line-->
                      <!--placeholder="Brugernavn">-->
                    <!--</v-text-field>-->
                  <!--</div>-->
                  <div>
                    <label for="phone"><b>*Telefonnummer:</b></label>
                    <v-text-field
                      type="number"
                      id="phone"
                      v-model="user.telephone"
                      hide-details single-line
                      placeholder="Telefonnummer">
                    </v-text-field>
                  </div>
                  <div class="mt-3">
                    <label ><b>*Vælg kommune:</b></label>
                    <v-select
                      v-bind:items="municipals"
                      v-model="user.municipality"
                      multiple
                      item-text="name"
                      item-value="id"
                      placeholder="Vælg Kommune"
                      persistent-hint
                      class="kk-select mb-4"
                    ></v-select>
                  </div>
                  <div class="mt-3">
                    <label><b>Hjemmeside:</b></label>
                    <v-text-field
                      v-model="user.url"
                      type="text"
                      hide-details single-line
                      placeholder="http://google.dk">
                    </v-text-field>
                  </div>
                  <div class="mt-2 text-xs-left" v-if="user.gender !== '' ">
                    <label><b>*Køn:</b></label>
                    <v-layout row wrap>
                      <v-radio-group v-model="user.gender" row class="bg-trans " >
                        <v-radio label="Mand" value="male" class="bg-trans kkblue" ></v-radio>
                        <v-radio label="Kvinde" value="female" class="bg-trans kkblue"></v-radio>
                      </v-radio-group>
                    </v-layout>
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
              <v-layout row wrap>
                <v-flex class="ma-3">
                  <label ><b>Beskrivelse</b></label>
                  <v-text-field v-model="user.discription" class="bg-secondary kk-textarea" box multi-line placeholder="Tekst ..."></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-spacer></v-spacer>
                <v-flex md1 mr-4>
                  <v-btn @click="update" class="bg-kk-btn">Gem</v-btn>
                </v-flex>
                <v-flex md1 mr-4>
                  <v-btn class="bg-kk-btn trans" @click.native="userupdate = false">Fortryd</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
          </form>
        </v-dialog>
        <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="assistantupdate" class="large" persistent width="75%">
          <v-card class="bg-white pa-5 kkblue">
            <v-btn flat icon class="kkblue right mt-0 mr-0" @click.native="assistantupdate = false">
              <v-icon>close</v-icon>
            </v-btn>
            <v-container grid-list-md>
              <v-layout row wrap>
                <v-flex text-xs-left>
                  <small><b>Felter markeret med en stjerne <br> (*) er påkrævet.</b></small>
                  <h6 class="text-xs-center">{{myassistantedit.user_type}}</h6>
                  <p class="text-xs-center"><b>Stamdata</b></p>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex md4 text-xs-center pa-3>
                  <div>
                    <label><b>Profilebillede</b></label>
                    <croppa v-model="assUpCroppa"
                            :initial-image="$auth.getDomain()+myassistantedit.avatar"
                            :accept="'image/*'"
                            :zoom-speed="15"
                            slot="initial">
                    </croppa>
                  </div>
                </v-flex>
                <v-flex md4 text-lg-left pa-3>
                  <div>
                    <label><b>*Navn:</b></label>
                    <v-text-field
                      v-model="myassistantedit.name"
                      hide-details single-line
                      type="text"
                      placeholder="Navn">
                    </v-text-field>
                  </div>
                  <!--<div class="mt-3">-->
                    <!--<label><b>*Mail:</b></label>-->
                    <!--<v-text-field-->
                      <!--v-model="myassistantedit.email"-->
                      <!--hide-details single-line-->
                      <!--placeholder="sample@mail.dk"-->
                      <!--type="email">-->
                    <!--</v-text-field>-->
                  <!--</div>-->
                  <!--<div class="mt-3">-->
                    <!--<label><b>*Adgangskode:</b></label>-->
                    <!--<v-text-field-->
                      <!--v-model="password"-->
                      <!--hide-details single-line-->
                      <!--type="password"-->
                      <!--placeholder="******">-->
                    <!--</v-text-field>-->
                  <!--</div>-->
                  <div class="mt-3">
                    <label><b>Hjemmeside:</b></label>
                    <v-text-field
                      v-model="myassistantedit.url"
                      type="text"
                      hide-details single-line
                      placeholder="http://google.dk">
                    </v-text-field>
                  </div>
                  <div class="mt-2 text-xs-left" v-if="myassistantedit.gender !== ''">
                    <label><b>*Køn:</b></label>

                  <v-layout row wrap>
                    <v-radio-group v-model="myassistantedit.gender" row class="bg-trans">
                      <v-radio label="Mand" value="male" class="bg-trans kkblue" ></v-radio>
                      <v-radio label="Kvinde" value="female" class="bg-trans kkblue"></v-radio>
                    </v-radio-group>
                  </v-layout>
                  </div>
                </v-flex>
                <v-flex md4 text-lg-left pa-3>
                  <!--<div>-->
                    <!--<label><b>*Brugernavn:</b></label>-->
                    <!--<v-text-field-->
                      <!--type="text"-->
                      <!--v-model="myassistantedit.user_name"-->
                      <!--hide-details single-line-->
                      <!--placeholder="Brugernavn">-->
                    <!--</v-text-field>-->
                  <!--</div>-->
                  <div>
                    <label><b>*Telefonnummer:</b></label>
                    <v-text-field
                      type="number"
                      v-model="myassistantedit.telephone"
                      hide-details single-line
                      placeholder="Telefonnummer">
                    </v-text-field>
                  </div>
                  <!--<div class="mt-3">-->
                    <!--<label><b>*Bekræft adgangskode:</b></label>-->
                    <!--<v-text-field-->
                      <!--type="password"-->
                      <!--v-model="passwordRe"-->
                      <!--hide-details single-line-->
                      <!--placeholder="******">-->
                    <!--</v-text-field>-->
                  <!--</div>-->
                  <div class="mt-3">
                    <label ><b>*Vælg kommune:</b></label>
                    <v-select
                      v-bind:items="municipals"
                      v-model="myassistantedit.municipality"
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
                    v-model="myassistantedit_ex5"
                    :label="skill.name">
                  </v-checkbox>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex class="ma-3">
                  <label ><b>Beskrivelse</b></label>
                  <v-text-field v-model="myassistantedit.discription" class="bg-secondary kk-textarea" box multi-line placeholder="Tekst ..."></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-spacer></v-spacer>
                <v-flex md1 mr-4>
                  <v-btn @click="updatemyassistant(myassistantedit.id)" class="bg-kk-btn">UPDATE</v-btn>
                </v-flex>
                <v-flex md1 mr-4>
                  <v-btn class="bg-kk-btn trans" @click.native="assistantupdate = false">Fortryd</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-dialog>
        <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="assistantcreate" class="large" persistent width="75%">
          <v-card class="bg-white pa-5 kkblue">
            <v-btn flat icon class="kkblue right mt-0 mr-0" @click.native="assistantcreate = false">
              <v-icon>close</v-icon>
            </v-btn>
            <form @submit.prevent="validateBeforeSubmit">
              <v-container grid-list-md>
                <v-layout row wrap>
                  <v-flex text-xs-left>
                    <small><b>Felter markeret med en stjerne <br> (*) er påkrævet.</b></small>
                    <h6 class="text-xs-center">{{selectTypeDDa.options}}</h6>
                    <p class="text-xs-center"><b>Stamdata</b></p>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex md4 text-xs-center text-md-left pa-3>
                    <div>
                      <label><b>Profilbillede</b></label>
                      <croppa v-model="assCrCroppa"
                              :initial-image="$auth.getDomain()+myassistantedit.avatar"
                              :accept="'image/*'"
                              :zoom-speed="15"
                              slot="initial">
                      </croppa>
                    </div>
                    <div class="mt-2 text-xs-left" v-if="selectTypeDDa.options == 'Mentor'">
                      <label><b>*Køn:</b></label>
                      <v-layout row wrap>
                        <v-radio-group v-model="as_gender"
                                       name="gender"
                                       :class="{'input': true, 'is-danger': errors.has('gender') }" row class="bg-trans">
                          <v-radio label="Mand"
                                   name="gender" v-validate="'required|in:male,female'" value="male" type="radio"
                                   class="bg-trans kkblue" ></v-radio>
                          <v-radio label="Kvinde"
                                   name="radio_group" value="female" type="radio"
                                   class="bg-trans kkblue"></v-radio>
                          <small class="red&#45;&#45;text help is-danger" v-show="errors.has('gender')">{{ errors.first('gender') }}</small>
                        </v-radio-group>
                      </v-layout>
                    </div>
                    <br><small v-show="errors.has('gender')" class="red&#45;&#45;text help is-danger">{{ errors.first('gender') }}</small>
                  </v-flex>
                  <v-flex md4 text-lg-left pa-3 :class="{ 'control': true }">
                    <div>
                      <label><b>*Navn:</b></label>
                      <v-text-field
                        name="Navn"
                        v-validate="'required'"
                        :class="{'input': true, 'is-danger': errors.has('Navn') }"
                        v-model="as_name"
                        hide-details single-line
                        type="text"
                        placeholder="Navn">
                      </v-text-field>
                      <small v-show="errors.has('Navn')" class="red&#45;&#45;text help is-danger">{{ errors.first('Navn') }}</small>
                    </div>
                    <div class="mt-3">
                      <label><b>*Brugernavn:</b></label>
                      <v-text-field
                        name="Brugernavn"
                        v-validate="'required'"
                        :class="{'input': true, 'is-danger': errors.has('Brugernavn') }"
                        type="text"
                        v-model="as_user_name"
                        hide-details single-line
                        placeholder="Brugernavn">
                      </v-text-field>
                      <small v-show="errors.has('Brugernavn')" class="red&#45;&#45;text help is-danger">{{ errors.first('Brugernavn') }}</small>
                    </div>
                    <div class="mt-3">
                      <label ><b>*Mail:</b></label>
                      <v-text-field
                        v-validate="'required|email'"
                        :class="{'input': true, 'is-danger': errors.has('Mail')}"
                        name="Mail"
                        v-model="as_email"
                        hide-details single-line
                        placeholder="sample@mail.dk"
                        type="email">
                      </v-text-field>
                      <small v-show="errors.has('Mail')" class="red&#45;&#45;text help is-danger">{{ errors.first('Mail') }}</small>
                    </div>
                    <div class="mt-3">
                      <label><b>*Telefonnummer:</b></label>
                      <v-text-field
                        name="phone"
                        v-validate="'required|numeric'"
                        :class="{'input': true, 'is-danger': errors.has('phone') }"
                        type="text"
                        v-model="as_telephone"
                        hide-details single-line
                        placeholder="Telefonnummer">
                      </v-text-field>
                      <small v-show="errors.has('phone')" class="red&#45;&#45; text help is-danger">{{ errors.first('phone') }}</small>
                    </div>
                  </v-flex>
                  <v-flex md4 text-lg-left pa-3 :class="{ 'control': true }">
                    <div>
                      <label><b>*Adgangskode:</b></label>
                      <v-text-field
                        name="password"
                        v-validate="'required|confirmed:target'"
                        :class="{'input': true, 'is-danger': errors.has('password') }"
                        v-model="as_password"
                        hide-details single-line
                        type="password"
                        placeholder="Adgangskode">
                      </v-text-field>
                      <small v-show="errors.has('password')" class="red--text help is-danger">{{ errors.first('password') }}</small>
                    </div>
                    <div class="mt-3">
                      <label><b>*Bekræft adgangskode:</b></label>
                      <v-text-field
                        name="target"
                        :class="{'input': true, 'is-danger': errors.has('password') }"
                        type="password"
                        v-model="as_passwordRe"
                        hide-details single-line
                        placeholder="Bekræft adgangskode">
                      </v-text-field>
                      <small v-show="errors.has('password')" class="red--text help is-danger">{{ errors.first('password') }}</small>
                    </div>
                    <div class="mt-3">
                      <label><b>Hjemmeside:</b></label>
                      <v-text-field
                        v-model="as_url"
                        type="text"
                        hide-details single-line
                        placeholder="http://google.com">
                      </v-text-field>
                    </div>
                    <div class="mt-3">
                      <label ><b>*Vælg kommune:</b></label>
                      <v-select
                        v-bind:items="municipals"
                        name="municipality"
                        v-validate="'required'"
                        v-model="as_municipality"
                        multiple
                        item-text="name"
                        item-value="id"
                        placeholder="Vælg Kommune"
                        persistent-hint
                        class="kk-select mb-0"
                      ></v-select>
                      <small v-show="errors.has('municipality')" class="red&#45;&#45;text help is-danger" >{{ errors.first('municipality') }}</small>
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
                      name="ex5"
                      type="checkbox"
                      class="kkblue"
                      data-vv-name="checkbox"
                      :value="skill.id"
                      v-model="as_ex5"
                      :label="skill.name">
                    </v-checkbox>
                  </v-flex>
                  <small v-show="errors.has('ex5')" class="red&#45;&#45;text help is-danger">{{ errors.first('ex5') }}</small>
                </v-layout>
                <v-layout row wrap>
                  <v-flex class="ma-3">
                    <label ><b>Beskrivelse</b></label>
                    <v-text-field v-model="as_discription" class="bg-secondary kk-textarea" box multi-line placeholder="Tekst ..."></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap text-lg-right>
                  <v-spacer></v-spacer>
                  <v-flex md12 >
                    <v-btn @click="createassistan" type="submit" class="bg-kk-btn">Opret</v-btn>
                    <v-btn class="bg-kk-btn trans" @click.native="assistantcreate = false">Fortryd</v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </form>
          </v-card>
        </v-dialog>
        <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="selectTypeModal1" class="large" persistent width="60%">
          <v-card class="bg-white pa-5">
            <v-btn flat icon class="kkblue right mt-0 mr-0" @click.native="selectTypeModal1 = false">
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
                    v-model="selectTypeDDa"
                    single-line
                    item-text="options"
                    placeholder="Vælg type"
                    class="kk-select mb-2"
                  ></v-select>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex md6 offset-md4 xs12  mr-5>
                  <v-btn v-if="!selectTypeDDa" disabled class="bg-kk-btn" @click="selectTypeModal1 = false" @click.stop="assistantcreate = true">Opret</v-btn>
                  <v-btn v-if="selectTypeDDa" class="bg-kk-btn" @click.stop="selectTypeModal1 = false" @click="assistSignup">Opret</v-btn>
                  <v-btn class="bg-kk-btn trans" @click="selectTypeModal1 = false">Fortryd</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-dialog>
        <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="usertopay" class="large" persistent width="75%">
          <v-card class="bg-white pl-5 pt-5 pr-5 pb-3 kkblue">
            <v-btn flat icon class="kkblue right mt-0 mr-0" @click.native="usertopay = false">
              <v-icon>close</v-icon>
            </v-btn>
            <v-container grid-list-md >
              <v-layout row wrap>
                <v-flex text-lg-center>
                  <h6>Assistant PAYMENT INVOICE</h6>
                  <p><b>Add your payment details</b></p>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex v-if="mycards.length != 0" text-lg-left md6 pa-3>
                  <v-radio-group v-model="ex8" row class="bg-trans ">
                    <v-radio :label="mycards[0].card_no" :value="mycards[0].card_id" class="bg-trans kkblue"></v-radio>
                  </v-radio-group>
                </v-flex>
                <v-flex v-if="mycards.length != 0" text-lg-right md6 pa-3>
                  <v-btn @click="exCardPay" class="bg-kk-btn" large>vælg</v-btn>
                </v-flex>
              </v-layout>
              <v-divider class="mb-5 mt-5"></v-divider>
              <v-layout row wrap>
                <v-flex text-lg-left md6 pa-3>
                  <label><b>*Kortnummer</b></label>
                  <v-text-field
                    v-validate="'digits:16'"
                    :class="{'input': true, 'is-danger': errors.has('credit_field') }"
                    name="credit_field"
                    type="text"
                    hide-details single-line
                    v-model="pucardNumber"
                    placeholder="#### #### #### ####"
                  >
                  </v-text-field>
                  <small class="red&#45;&#45;text help is-danger" v-if="errors.has('credit_field')">{{ errors.first('credit_field') }}</small>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex text-lg-left md4 pa-3>
                  <label><b>* Udløbet måned</b></label>
                  <v-text-field
                    v-validate="'numeric|digits:2|max_value:12'"
                    :class="{'input': true, 'is-danger': errors.has('cardMonth') }"
                 a  name="cardMonth"
                    hide-details single-line
                    v-model="pucardMonth"
                    placeholder="MM"
                  >
                  </v-text-field>
                  <small class="red&#45;&#45;text help is-danger" v-if="errors.has('cardMonth')">{{ errors.first('cardMonth') }}</small>
                </v-flex>
                <v-flex text-lg-left md4 pa-3>
                  <label><b>* År</b></label>
                  <v-text-field
                    v-validate="'numeric|digits:2'"
                    :class="{'input': true, 'is-danger': errors.has('cardYear') }"
                    name="cardYear"
                    hide-details single-line
                    v-model="pucardYear"
                    placeholder="YY"
                  >
                  </v-text-field>
                  <small class="red&#45;&#45;text help is-danger" v-if="errors.has('cardYear')">{{ errors.first('cardYear') }}</small>
                </v-flex>
                <v-flex text-lg-left md4 pa-3>
                  <label><b>*CVC-koden</b></label>
                  <v-text-field
                    v-validate="'numeric|digits:3'"
                    :class="{'input': true, 'is-danger': errors.has('cardcvc') }"
                    name="cardcvc"
                    hide-details single-line
                    v-model="pucardcvc"
                    placeholder="###"
                  >
                  </v-text-field>
                  <small v-show="errors.has('cardcvc')" class="help is-danger red--text">{{ errors.first('cardcvc') }}</small>
                  <!--<v-text-field-->
                    <!--v-validate="'numeric|digits:3'"-->
                    <!--hide-details single-line-->
                    <!--v-model="pucardcvc"-->
                    <!--placeholder="###"-->
                  <!--&gt;-->
                  <!--</v-text-field>-->
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex text-lg-left md4 pa-3>
                  <img class="w-100" src="./../assets/cards.png" alt="">
                  <p class="dis ma-0">(betalt med)</p>
                </v-flex>
                <v-flex text-lg-right md8 pa-3>
                  <v-btn @click="newCardPay" class="bg-kk-btn" large>Tilføj kort</v-btn>
                  <v-btn class="bg-kk-btn trans" large @click.native="usertopay = false">Fortryd</v-btn>
                  <p class="dis ma-0">(Your card will update as new)</p>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-dialog>
        <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="AddPaymentModal" class="large" persistent width="75%">
          <v-card class="bg-white pl-5 pt-5 pr-5 pb-3 kkblue">
            <v-btn flat icon class="kkblue right mt-0 mr-0" @click.native="AddPaymentModal = false">
              <v-icon>close</v-icon>
            </v-btn>
            <v-container grid-list-md >
              <form>
                <v-layout row wrap>
                  <v-flex text-lg-center>
                    <h6>Betalingsoplysninger</h6>
                    <p><b>Tilføj kort</b></p>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex text-lg-left md6 pa-3>
                    <label><b>*Kortnummer</b></label>
                    <v-text-field
                      v-validate="'digits:16'"
                      name="credit_field"
                      type="text"
                      :class="{'input': true, 'is-danger': errors.has('credit_field') }"
                      class="input"
                      hide-details single-line
                      v-model="cardNumber"
                      placeholder="#### #### #### ####"
                    >
                    </v-text-field>
                    <small class="red&#45;&#45;text help is-danger" v-if="errors.has('credit_field')">{{ errors.first('credit_field') }}</small>
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
                    <small class="red&#45;&#45;text help is-danger" v-if="errors.has('cardMonth')">{{ errors.first('cardMonth') }}</small>
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
                    <small class="red&#45;&#45;text help is-danger" v-if="errors.has('cardYear')">{{ errors.first('cardYear') }}</small>
                  </v-flex>
                  <v-flex text-lg-left md4 pa-3>
                    <label><b>*CVC-koden</b></label>
                    <v-text-field
                      v-validate="'numeric|digits:3'"
                      :class="{'input': true, 'is-danger': errors.has('cardcvc') }"
                      name="cardcvc"
                      hide-details single-line
                      v-model="cardcvc"
                      placeholder="###"
                    >
                    </v-text-field>
                    <small class="red&#45;&#45;text help is-danger" v-if="errors.has('cardcvc')">{{ errors.first('cardcvc') }}</small>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex text-lg-left md4 pa-3>
                    <img class="w-100" src="./../assets/cards.png" alt="">
                    <p class="dis ma-0">(betalt med)</p>
                  </v-flex>
                  <v-flex text-lg-right md8 pa-3>
                    <v-btn @click="addCard" class="bg-kk-btn" large>Tilføj kort</v-btn>
                    <v-btn class="bg-kk-btn trans" large @click.native="AddPaymentModal = false">Fortryd</v-btn>
                    <p class="dis ma-0"></p>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card>
        </v-dialog>
        <v-layout row wrap text-xs-center>
          <v-flex xs12 pa-3>
            <h6 class="capitalize">min profil</h6>
            <p><b>Grundlæggende profiloplysninger
            </b></p>
          </v-flex>
        </v-layout>
        <v-layout row wrap text-xs-left>
          <v-flex xs12 md4 pa-3>
            <img class="zajix res-img" :src="$auth.getDomain()+user.avatar" alt="">
          </v-flex>
          <v-flex xs12 md8>
            <v-layout row wrap text-xs-left>
              <v-flex xs6 pa-3>
                <p><b>Navn : </b>{{user.name}}</p>
                <p><b>Mail : </b>{{user.email}}</p>
                <!--<p><b>Adgangskode : </b>********</p>-->
                <p><b>Hjemmeside : </b><a  target="_blank" :href="'http://' + user.url ">{{user.url}}</a></p>
                <p><b>Abonnement : </b>
                  <v-btn v-if="user.subscription" flat small @click="subscription(user.id,'user')" dark><i class="material-icons">credit_card</i>disable</v-btn>
                  <v-btn v-if="!user.subscription" flat class="" @click="subscription(user.id,'user')" small dark><i class="material-icons gray-txt">credit_card</i>enable</v-btn>
                </p>
              </v-flex>
              <v-flex xs6 pa-3>
                <p><b>Brugernavn : </b>{{user.user_name}}</p>
                <p><b>Telefonnummer : </b>{{user.telephone}}</p>
                <p><b>Kommune : </b>
                  <span v-for="municipale in user.municipality">{{ municipale.name }}, </span>
                </p>
                <p v-if="user.gender !== ''"><b>Køn : </b>{{user.gender}}</p>
              </v-flex>
            </v-layout>
            <v-layout row wrap text-xs-left>
              <v-flex xs12 pa-3>
                <p><b>Mine færdigheder: </b>
                  <v-chip small class="bg-gray kkblue" v-for="skill in user.skills">{{skill.name}}</v-chip>
                </p>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-layout row wrap text-xs-left>
          <v-flex xs12 pa-3>
            <v-layout row wrap text-xs-left>
              <v-flex xs2 pa-3>
                <p><b>om mig : </b></p>
              </v-flex>
              <v-flex xs10 pa-3 style="white-space: pre-line;">
                {{user.discription}}
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-layout row wrap text-xs-right>
          <v-flex xs12 pa-3>
            <v-btn @click="updateUser" class="bg-kk-btn">Rediger profil</v-btn>
            <p class="dis"></p>
          </v-flex>
        </v-layout>
        <v-divider class="white-bg mb-5 mt-5"></v-divider>
        <v-layout row wrap text-xs-center>
          <v-flex xs12 pa-3>
            <h6>Profiler under mig</h6>
          </v-flex>
        </v-layout>
        <v-layout row wrap text-xs-right>
          <v-flex xs12 pa-3>
            <v-btn @click="selectTypeModal1 = true" class="bg-kk-btn" large>tilføj profiler</v-btn>
            <p class="dis">( Du kan tilføje nye mentorer eller beskæftigelsestilbud under dig)</p>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12 md6 pa-3 v-for="user in assistant">
            <v-card class="pa-3 bg-gray ">
              <v-layout row wrap>
                <v-flex xs12 lg3 text-xs-center>
                  <img :src="$auth.getDomain()+user.avatar" @click.stop="profileView(user)" class="nav-logo point" v-tooltip="{ }" alt="">
                </v-flex>
                <v-flex lg9>
                  <v-layout row wrap>
                    <v-flex xs12 md4>
                      <h6 class="mb-1">{{ user.name }}</h6>
                    </v-flex>
                    <v-flex xs12 md8 text-lg-right>
                      <v-btn flat @click="editass(user)" small><v-icon>edit</v-icon>edit</v-btn>
                      <v-btn v-if="user.subscription" flat @click="subscription(user.id,'assistant')" small><i class="material-icons grey&#45;&#45;text text&#45;&#45;darken-4">credit_card</i>inaktiv</v-btn>
                      <v-btn v-if="!user.subscription" flat @click="subscription(user.id,'assistant')" small><i class="material-icons grey&#45;&#45;text text&#45;&#45;lighten-1">credit_card</i> aktiv</v-btn>
                    </v-flex>
                    <v-layout row wrap>
                      <v-flex xs8>
                        <v-layout row wrap>
                          <v-flex xs2>
                            <i class="material-icons kkblue">phone</i>
                          </v-flex>
                          <v-flex xs10>
                            <p class="gr-text">{{ user.telephone }}</p>
                          </v-flex>
                          <v-flex xs2>
                            <i class="material-icons kkblue">email</i>
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
                  <p>
                    {{ user.discription | truncate(230) }}
                  </p>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
        <paginate v-if="pagi_ass.last_page > 1"
                  :page-count="pagi_ass.last_page"
                  :page-range="5"
                  :margin-pages="5"
                  :click-handler="myassistant"
                  :prev-text="'Forrige'"
                  :next-text="'Næste'"
                  :container-class="'pagination'"
                  :page-class="'page-item waves-effect waves-light'">
        </paginate>
        <v-divider class="white-bg mb-5 mt-5"></v-divider>
        <v-layout row wrap text-xs-center>
          <v-flex xs12 pa-3>
            <h6>Betalingsoplysninger</h6>
          </v-flex>
        </v-layout>
        <v-layout row wrap text-xs-center>
          <v-flex xs12 pa-3>
            <v-btn @click="AddPaymentModal = true" class="bg-kk-btn" large>tilføj kortoplysninger</v-btn>
            <!--<v-btn class="bg-kk-btn" large>Slet betalingskort</v-btn>-->
            <!--<v-btn @click="getCard" class="bg-kk-btn" large>annuller abonnement</v-btn>-->
            <p class="dis">(Du kan tilføje flere betalingskort)</p>
          </v-flex>
        </v-layout>
        <v-layout row wrap text-md-center>
          <v-flex class="xs12 md6 offset-md3 md6">
            <v-data-table
              v-bind:headers="cardheaders"
              :items="mycards"
              class="elevation-1"
              hide-actions
              dark
            >
              <template slot="items" scope="props">
                <td>{{ props.item.card_no }}</td>
                <td class="text-xs-center">
                  <v-btn @click="deleteCard(props.item.id)" class="bg-kk-btn" small>slette</v-btn>
                  <v-btn v-if="props.item.status === 'active'" @click="defaultCard(props.item.card_id)" class="bg-kk-btn btn-op" small>default</v-btn>
                  <v-btn v-if="props.item.status === 'default'" @click="defaultCard(props.item.card_id)" class="bg-kk-btn" small>default</v-btn>
                </td>
              </template>
            </v-data-table>
          </v-flex>
        </v-layout>
        <v-divider class="white-bg mb-5 mt-5"></v-divider>
        <v-layout row wrap text-md-center>
          <v-flex class="xs12 pa-3">
            <h6>Faktura detaljer</h6>
          </v-flex>
        </v-layout>
        <v-layout row wrap text-md-center>
          <v-flex class="xs12" id="printableArea">
            <v-data-table
              v-bind:headers="headers"
              :items="items"
              class="elevation-1"
              hide-actions
              dark
            >
              <template slot="items" scope="props">
                <td>{{ props.item.order_id }}</td>
                <!--<td class="text-xs-center">{{ props.item.payer_id == props.item.user_id ? 'owner' : 'assistant'}}</td>-->
                <!--<td class="text-xs-center">{{ props.item.username }}</td>-->
                <td class="text-xs-center">{{ props.item.updated_at }}</td>
                <td class="text-xs-center">{{ props.item.amount }}</td>
              </template>
            </v-data-table>
            <div v-for="item in items" :key="item.id" v-model="PaymentDetails">
            </div>
          </v-flex>
        </v-layout>
        <paginate v-if="pagi_pay.last_page > 1"
                  :page-count="pagi_pay.last_page"
                  :page-range="5"
                  :margin-pages="5"
                  :click-handler="myPaymentDetails"
                  :prev-text="'Forrige'"
                  :next-text="'Næste'"
                  :container-class="'pagination'"
                  :page-class="'page-item waves-effect waves-light'">
        </paginate>
        <br>
        <v-layout row wrap text-md-right>
          <v-flex class="xs12">
            <v-btn @click="pdfMake('printableArea')" class="bg-kk-btn" large>print som pdf</v-btn>
          </v-flex>
        </v-layout>
        <v-divider class="white-bg mb-5 mt-5"></v-divider>
      </v-container>
    </div>
  </div>
</template>
<script>
  // import pdfMake from 'pdfmake/build/pdfmake'
  // import pdfFonts from 'pdfmake/build/vfs_fonts'
  import Paginate from 'vuejs-paginate'
  // pdfMake.vfs = pdfFonts.pdfMake.vfs
  export default {
    components: {
      'paginate': Paginate
    },
    data () {
      return {
        municipality: '',
        gender: '',
        skills: [],
        discription: '',
        name: '',
        user_type: '',
        userProfile: '',
        ProfileView: false,
        assUpCroppa: {},
        myCroppa: {},
        assCrCroppa: {},
        assCUpCroppa: {},
        changepic: true,
        pagi_pay: '',
        pagi_ass: '',
        password: '',
        passwordRe: '',
        tile: '',
        drawer: false,
        assistant: this.$store.state.assistant,
        myassistantedit: '',
        ex8: '',
        assistantupdate: false,
        usertopay: false,
        AddPaymentModal: false,
        selectTypeModal1: false,
        assistantcreate: false,
        userupdate: false,
        headers: [
          {
            text: 'Ref. number﻿',
            align: 'center',
            sortable: false,
            value: 'rNumber',
            type: 'text'
          },
          { text: 'Dato',
            align: 'center',
            sortable: false,
            value: 'pDate',
            type: 'date'
          },
          { text: 'Beløb',
            align: 'center',
            sortable: false,
            value: 'pAmount',
            type: 'currency'
          }
        ],
        items: [],
        user: this.$store.state.myprofile,
        cardheaders: [
          {
            text: 'Kort﻿',
            align: 'center',
            sortable: false,
            value: 'rNumber',
            type: 'text'
          },
          {
            text: 'Indstillinger',
            align: 'center',
            sortable: false,
            value: 'rNumber',
            type: 'text'
          }
        ],
        mycards: [],
        pucardMonth: '',
        pucardNumber: '',
        pucardYear: '',
        pucardcvc: '',
        cardMonth: '',
        cardNumber: '',
        cardYear: '',
        cardcvc: '',
        selectTypeDDa: '',
        as_gender: '',
        as_name: '',
        as_email: '',
        as_password: '',
        as_url: '',
        as_user_name: '',
        as_telephone: '',
        as_passwordRe: '',
        as_municipality: '',
        babytest: 'hello world',
        as_ex5: [],
        as_discription: '',
        as_id: '',
        newAss: '',
        ex5: '',
        PaymentDetails: '',
        myassistantedit_ex5: [],
        select_items_type: [
          { options: 'Mentor' },
          { options: 'Beskæftigelsestilbud' }
        ],
        docDefinition: {
          content: this.babytest
        }
      }
    },
    created () {
      this.myPaymentDetails(1)
      this.myprofile()
      this.myassistant(1)
      this.getCard()
    },
    methods: {
      assistSignup () {
        this.assistantcreate = true
        this.skillsAssist()
      },
      updateUser () {
        this.userupdate = true
        this.skillsx()
      },
      skillsx () {
        if (this.$store.state.usersxtype === 'Mentor') {
          this.$store.state.skills = []
          this.skillsMent()
        } else {
          this.$store.state.skills = []
          this.skillsSup()
        }
      },
      skillsAssist () {
        if (this.selectTypeDDa.options === 'Mentor') {
          this.$store.state.skills = []
          this.skillsMent()
        } else {
          this.$store.state.skills = []
          this.skillsSup()
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
              console.log(response.body.skills)
            }, (response) => {
              console.log(response.body)
            })
        }
      },
      pdfMake (divName) {
        // this.docDefinition = this.babytest
        // this.items
        // var docDefinition = this.items
        // this.docDefinition.content.body = dd.data
        // pdfMake.createPdf(this.docDefinition).open({})
        var printContents = document.getElementById(divName).innerHTML
        var originalContents = document.body.innerHTML
        document.body.innerHTML = printContents
        window.print()
        document.body.innerHTML = originalContents
      },
      profileView (data, option = false) {
        this.userProfile = [data]
        this.ProfileView = true
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
      editass (user) {
        // working area1
        this.assistantupdate = true
        this.myassistantedit = user
        var result = this.myassistantedit.skills
        var result1 = result.map(a => a.id)
        this.myassistantedit_ex5 = result1
        this.CheckType()
      },
      CheckType () {
        if (this.myassistantedit.user_type === 'Mentor') {
          this.$store.state.skills = []
          this.skillsMent()
        } else {
          this.$store.state.skills = []
          this.skillsSup()
        }
      },
      addCard () {
        var data = {
          card_no: this.cardNumber,
          exp_year: this.cardYear,
          exp_month: this.cardMonth,
          cvv_no: this.cardcvc
        }
        this.$http.post('api/user/card', data)
          .then(response => {
            this.getCard()
            this.AddPaymentModal = false
            console.log(response.body)
          }, (response) => {
            console.log(response.body)
          })
      },
      subscription (id, data) {
        this.$http.post('api/user/subscription/' + id)
          .then(response => {
            if (data === 'user') {
              this.$store.state.myprofile.subscription = !this.$store.state.myprofile.subscription
            }
            if (data === 'assistant') {
              this.$_.map(this.$store.state.assistant, function (obj) {
                if (obj.id === id) {
                  obj.subscription = !obj.subscription
                }
              })
            }
            console.log(response.body)
          }, (response) => {
            console.log(response.body)
          })
      },
      newCardPay () {
        var data = {
          card_no: this.pucardNumber,
          exp_year: this.pucardYear,
          exp_month: this.pucardMonth,
          cvv_no: this.pucardcvc
        }
        this.$http.post('api/payment/assistan/' + this.as_id + '/newcard', data)
          .then(response => {
            this.usertopay = false
            console.log(response.body)
            this.assistant.push(this.newAss)
          }, (response) => {
            console.log(response.body)
          })
      },
      exCardPay () {
        var data = {
          card_no: this.ex8
        }
        this.$http.post('api/payment/assistan/' + this.as_id + '/excard', data)
          .then(response => {
            console.log(response.body)
            this.usertopay = false
            this.assistant.push(this.newAss)
          }, (response) => {
            console.log(response.body)
          })
      },
      deleteCard (id) {
        this.$http.delete('api/user/card/' + id)
          .then(response => {
            this.getCard()
            console.log(response.body)
          }, (response) => {
            console.log(response.body)
          })
      },
      defaultCard (id) {
        this.$http.put('api/user/card/' + id)
          .then(response => {
            this.getCard()
          }, (response) => {
          })
      },
      getCard () {
        this.$http.get('api/user/card')
          .then(response => {
            this.mycards = response.body.cards
            this.$store.state.mycards = response.body.cards
            // console.log(response.body.cards)
          }, (response) => {
            console.log(response.body)
          })
      },
      update () {
        var data1 = {
          skill_id: this.ex5
        }
        console.log('------->skill<----', data1)
        if (this.$store.state.usersxtype === 'Mentor') {
          this.$http.post('api/user/skill/update', data1)
            .then(response => {
              this.$store.state.myprofile.skills = response.body.user.skills
            }, (response) => {
              console.log(response.body)
            })
        } else {
          this.$http.post('api/user/skill/updateSub', data1)
            .then(response => {
              this.$store.state.myprofile.skills = response.body.user.skills
            }, (response) => {
              console.log(response.body)
            })
        }
        var tmpUserMuni = this.user.municipality
        var userMuni = []
        for (const key in tmpUserMuni) {
          if (tmpUserMuni[key].hasOwnProperty('id')) {
            userMuni.push(tmpUserMuni[key]['id'])
          } else {
            userMuni.push(tmpUserMuni[key])
          }
        }
        var data = {
          name: this.user.name,
          avatar: this.myCroppa.generateDataUrl(),
          telephone: this.user.telephone,
          password: this.user.password,
          email: this.user.email,
          url: this.user.url,
          municipality: userMuni,
          gender: this.user.gender,
          discription: this.user.discription
        }
        console.log('------->updated data<----', data)
        this.$http.put('api/user/' + this.user.id, data)
          .then(response => {
            this.$store.state.myprofile.municipality = response.body.user.municipality
            this.userupdate = false
            location.reload(true)
          }, (response) => {
            console.log(response)
          })
      },
      updatemyassistant (id) {
        var tmpUserMuni = this.myassistantedit.municipality
        var userMuni = []
        for (const key in tmpUserMuni) {
          if (tmpUserMuni[key].hasOwnProperty('id')) {
            userMuni.push(tmpUserMuni[key]['id'])
          } else {
            userMuni.push(tmpUserMuni[key])
          }
        }
        var data = {
          name: this.myassistantedit.name,
          telephone: this.myassistantedit.telephone,
          url: this.myassistantedit.url,
          municipality: userMuni,
          avatar: this.assUpCroppa.generateDataUrl(),
          gender: this.myassistantedit.gender,
          discription: this.myassistantedit.discription,
          skills: this.myassistantedit_ex5
        }
        this.$http.put('api/assistant/' + id, data)
          .then(response => {
            this.$_.map(this.assistant, function (obj) {
              if (obj.id === id) {
                obj.skills = response.body.user.skills
                obj.municipality = response.body.user.municipality
              }
            })
            this.assistantupdate = false
            this.$toasted.success('Opdateret', {timeout: 8000})
          }, (response) => {
            console.log(response)
          })
      },
      myprofile () {
        this.$http.get('api/user')
          .then(response => {
            this.user = response.body.user
            this.$store.state.usersxtype = response.body.user.user_type
            this.$store.state.myprofile = response.body.user
            var result = this.user.skills
            var result1 = result.map(a => a.id)
            this.ex5 = result1
          }, (response) => {
            console.log(response)
          })
      },
      myPaymentDetails (id) {
        this.$http.get('api/payment/details?page=' + id)
          .then(response => {
            this.items = response.body.details.data
            this.pagi_pay = response.body.details
          }, (response) => {
            console.log(response)
          })
      },
      myassistant (id) {
        this.$http.get('api/assistant?page=' + id)
          .then(response => {
            this.assistant = response.body.assistant.data
            this.$store.state.assistant = response.body.assistant.data
            this.assistantcreate = false
            this.pagi_ass = response.body.assistant
          }, (response) => {
            console.log(response)
          })
      },
      assistantopay () {
        this.$http.get('api/assistant')
          .then(response => {
            this.assistant = response.body.assistant.data
            this.$store.state.assistant = response.body.assistant.data
            this.assistantcreate = false
            this.usertopay = true
          }, (response) => {
            console.log(response)
          })
      },
      createassistan () {
        if (this.as_password === this.as_passwordRe) {
          var data = {
            skills: this.as_ex5,
            name: this.as_name,
            user_name: this.as_user_name,
            email: this.as_email,
            password: this.as_password,
            telephone: this.as_telephone,
            url: this.as_url,
            municipality: this.as_municipality,
            gender: this.as_gender,
            avatar: this.assCrCroppa.generateDataUrl(),
            discription: this.as_discription,
            user_type: this.selectTypeDDa.options
          }
          this.$http.post('api/assistant', data)
            .then(response => {
              // console.log(response.body.user)
              this.usertopay = true
              this.assistantcreate = false
              this.as_id = response.body.assistanId
              this.newAss = response.body.user
            }, (response) => {
              this.$toasted.error(response.body.error.errors[Object.keys(response.body.error.errors)[0]], {timeout: 8000})
              console.log(response)
            })
        }
      }
    },
    watch: {
      selectmunisipality: function () {
        this.$store.state.selectmunisipality = this.selectmunisipality
      }
    },
    computed: {
      skilsx () {
        return this.$store.state.skills
      },
      municipals () {
        return this.$store.state.municipals
      }
    }
  }
</script>
<style lang="stylus">
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

</style>
