<template>
    <div>
      <!--add municipality-->
      <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="AddMunicipality" class="large" persistent width="80%">
        <v-card class="bg-white pa-5">
          <v-btn flat icon class="kkblue right mt-0 mr-0" @click.native="AddMunicipality = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-container grid-list-md >
            <v-layout row wrap text-lg-center>
              <v-flex xs12 >
              <h6>ADD/EDIT MUNICIPALITIES</h6>
              </v-flex>
            </v-layout>
            <v-layout row wrap class="text-lg-left">
              <v-flex md12 pa-3>
                <p><b>List of municipalities</b></p>
                <v-btn class="bg-kk-btn" v-if="muniedit == false" @click="muniedit = !muniedit">EDIT</v-btn>
                <v-btn class="bg-kk-btn" v-if="muniedit == true" >Cancel</v-btn>
                <br>
                <v-chip v-if="muniedit" v-for="municipal in municipals" class="justify-space-around">
                  {{ municipal.name }}
                  <v-icon @click="removeMunicipal(municipal.id)">close</v-icon>
                </v-chip>
                <v-chip v-if="!muniedit" v-for="municipal in municipals" class="justify-space-around">
                  {{ municipal.name }}
                </v-chip>
              </v-flex>
             <v-flex md12 pa-3>
               <v-layout row wrap class="text-lg-left u">
                 <v-flex xs12>
               <p><b>Vælg kommune:</b></p>
                   <v-select
                     label="type and add your munisipalities  "
                     chips
                     tags
                     solo
                     append-icon=""
                     clearable
                     primary
                     v-model="addmuni"
                     class="bg-secondary"
                   >
                     <template slot="selection" slot-scope="data">
                       <v-chip
                         close
                         small
                         :selected="data.selected"
                         class="bg-white"
                       >
                           <strong>{{ data.item }}</strong>
                       </v-chip>
                     </template>
                   </v-select>
               <small>(press enter for add another municipality)</small>
                 </v-flex>
               </v-layout>
               <v-layout row wrap class="text-lg-right">
                 <v-flex xs12 >
               <v-btn large class="bg-kk-btn trans" @click.native="AddMunicipality = false">Fortryd</v-btn>
               <v-btn large class="bg-kk-btn" @click="addMunicipal">ADD ALL</v-btn>
                 </v-flex>
               </v-layout>
              </v-flex>
            </v-layout>
            <v-layout row wrap class="">
              <v-flex md7 >
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-dialog>
      <!--add skills-->
      <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="AddSkills" class="large" persistent width="80%">
        <v-card class="bg-white pa-5">
          <v-btn flat icon class="kkblue right mt-0 mr-0" @click.native="AddSkills = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-container grid-list-md >
            <v-layout row wrap text-lg-center>
              <v-flex xs12 >
              <h6>ADD/EDIT SKILLS</h6>
              </v-flex>
            </v-layout>
            <v-layout row wrap class="text-lg-left">
              <v-flex md12 pa-3>
                <p><b>List of skills</b></p>
                <v-btn class="bg-kk-btn" v-if="skilledit == false" @click="skilledit = !skilledit">EDIT</v-btn>
                <v-btn class="bg-kk-btn" v-if="skilledit == true">cancel</v-btn>
                <br>
                <v-chip v-if="skilledit" v-for="skill in skilsx" class="justify-space-around">
                  {{ skill.name }}
                  <v-icon @click="removeSkill(skill.id)">close</v-icon>
                </v-chip>
                <v-chip v-if="!skilledit" v-for="skill in skilsx" class="justify-space-around">
                  {{ skill.name }}
                </v-chip>
              </v-flex>
             <v-flex md12 pa-3>
               <v-layout row wrap class="text-lg-left u">
                 <v-flex xs12>
               <p><b>Add skills:</b></p>
                   <v-select
                     label="type and add your skills  "
                     chips
                     tags
                     solo
                     append-icon=""
                     clearable
                     primary
                     v-model="addski"
                     class="bg-secondary"
                   >
                     <template slot="selection" slot-scope="data">
                       <v-chip
                         close
                         small
                         class="bg-white "
                         :selected="data.selected"
                       >
                           <strong>{{ data.item }}</strong>
                       </v-chip>
                     </template>
                   </v-select>
               <small>(press enter for add another skill)</small>
                 </v-flex>
               </v-layout>
               <v-layout row wrap class="text-lg-right">
                 <v-flex xs12 >
               <v-btn large class="bg-kk-btn trans" @click.native="AddSkills = false">Fortryd</v-btn>
               <v-btn large class="bg-kk-btn" @click="addskillsxx">ADD ALL</v-btn>
                 </v-flex>
               </v-layout>
              </v-flex>
            </v-layout>
            <v-layout row wrap class="">
              <v-flex md7 >
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
                  <h6 class="text-xs-center">Opret profil {{ usertype }}</h6>
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
                           src="../../assets/profile.png">
                    </croppa>
                    <!--<img src="./../assets/profile.png" alt="avatar">-->
                  </v-avatar>
                </div>
                <div class="mt-2 text-xs-left" v-if="usertype === 'Mentor'" >
                  <label><b>*Køn:</b></label>
                  <v-layout row wrap>
                  <v-radio-group v-model="gender"  v-validate="'required'"
                                 name="Køn"
                                 :class="{'input': true, 'is-danger': errors.has('Køn') }" row class="bg-trans">
                    <v-radio label="Mand"
                             name="radio_group" v-validate="'required|in:male,female'" value="male" type="radio"
                             class="bg-trans kkblue" ></v-radio>
                    <v-radio label="Kvinde"
                             name="radio_group" value="female" type="radio"
                             class="bg-trans kkblue"></v-radio>
                    <small class="red--text help is-danger" v-show="errors.has('radio_group')">{{ errors.first('radio_group') }}</small>
                  </v-radio-group>
                </v-layout>
                  <small v-show="errors.has('Køn')" class="red--text help is-danger">{{ errors.first('Køn') }}</small>
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
                    placeholder="sample@mail.dk"
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
                    v-validate="'required|confirmed:{target}'"
                    :class="{'input': true, 'is-danger': errors.has('password') }"
                    v-model="password"
                    hide-details single-line
                    type="password"
                    placeholder="Adgangskode">
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
                <div class="mt-3">
                  <label><b>Hjemmeside/URL:</b></label>
                  <v-text-field
                    name="url"
                    v-validate="'url'"
                    :class="{'input': true, 'is-danger': errors.has('url') }"
                    v-model="url"
                    type="text"
                    hide-details single-line
                    placeholder="HTTP://google.com">
                  </v-text-field>
                  <small v-show="errors.has('url')" class="red--text help is-danger">{{ errors.first('url') }}</small>
                </div>
                <div class="mt-3">
                  <label ><b>*Vælg kommuner (dit virkeområde):</b></label>

                  <!--<v-select-->
                  <!--v-bind:items="municipals"-->
                  <!--name="list"-->
                  <!--v-validate="'required'"-->
                  <!--v-model="selectmunisipality"-->
                  <!--single-line-->
                  <!--item-text="name"-->
                  <!--placeholder="Vælg Kommune"-->
                  <!--return-object-->
                  <!--persistent-hint-->
                  <!--class="kk-select mb-0"-->
                  <!--&gt;</v-select>-->
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
                <small v-show="errors.has('ex5')" class="red&#45;&#45;text help is-danger">{{ errors.first('ex5') }}</small>
              </v-layout>
              <v-layout row wrap>
                <v-flex class="ma-3">
                  <label ><b>Upload billede eller logo</b></label>
                  <v-text-field v-model="discription" class="bg-secondary kk-textarea" box multi-line placeholder="Skriv om dig selv eller hvad du kan hjælpe med"></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <!--<v-flex xs1>-->
                  <!--<v-checkbox-->
                    <!--name="terms"-->
                    <!--type="checkbox"-->
                    <!--class="kkblue"-->
                    <!--data-vv-name="checkbox"-->
                    <!--v-model="terms"-->
                  <!--&gt;-->
                  <!--</v-checkbox>-->
                <!--</v-flex>-->
                <!--<v-flex xs11>-->
                  <!--<h5 class="point" @click="openDIalog('TermsModal')">Jeg bekræfter hermed, at jeg acceptere vilkår og betingelser</h5>-->
                <!--</v-flex>-->
              </v-layout>
              <v-layout row wrap>
                <v-spacer></v-spacer>
                <v-flex md1 mr-4>
                  <v-btn class="bg-kk-btn trans" @click.native="SignUpModal = false">Fortryd</v-btn>
                </v-flex>
                <v-flex md3>
                  <v-btn class="bg-kk-btn" type="submit" @click="signup()">Tilføj betalingskort</v-btn>
                  <!--<v-btn class="bg-kk-btn" disabled v-if="!terms" type="submit">Tilføj betalingskort</v-btn>-->
                </v-flex>
              </v-layout>
            </v-container>
          </form>
        </v-card>
      </v-dialog>
      <!--<v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="SignUpModal" class="large" persistent width="75%">
        <v-card class="bg-white pa-5 kkblue">
          <form @submit.prevent="userAddSubmit">
            <v-container grid-list-md>
              <v-layout row wrap>
                <v-flex text-xs-left>
                  <small><b>Felter markeret med en stjerne <br> (*) er påkrævet.</b></small>
                  <h6 class="text-xs-center">Add {{ usertype }}</h6>
                  <p class="text-xs-center"><b>Stamdatas</b></p>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex md4 text-xs-center text-md-left pa-3>
                  <div>
                    <label><b>Billede/Logo</b></label>
                    <croppa v-model="myCroppa"
                            :initial-image="$auth.getDomain()"
                            :accept="'image/*'"
                            :zoom-speed="15"
                            slot="initial">
                    </croppa>
                  </div>
                  <div class="mt-2 text-xs-left">
                    <label><b>*Køn:</b></label>
                    <v-layout row wrap>
                      <v-radio-group v-model="gender"  v-validate="'required'"
                                     name="Køn"
                                     :class="{'input': true, 'is-danger': errors.has('Køn') }" row class="bg-trans">
                        <v-radio label="Mand"
                                 name="Køn" v-validate="'required|in:male,female'" value="male" type="radio"
                                 class="bg-trans kkblue" ></v-radio>
                        <v-radio label="Kvinde"
                                 name="radio_group" value="female" type="radio"
                                 class="bg-trans kkblue"></v-radio>
                        <small class="red&#45;&#45;text help is-danger" v-show="errors.has('Køn')">{{ errors.first('Køn') }}</small>
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
                      v-model="name"
                      hide-details single-line
                      type="text"
                      placeholder="Angiv dit fulde navn">
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
                      v-model="username"
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
                      v-model="email"
                      hide-details single-line
                      placeholder="Angiv en gyldig e-mail adresse"
                      type="email">
                    </v-text-field>
                    <small v-show="errors.has('Mail')" class="red&#45;&#45;text help is-danger">{{ errors.first('Mail') }}</small>
                  </div>
                  <div class="mt-3">
                    <label><b>*Telefonnummer:</b></label>
                    <v-text-field
                      name="Telephone"
                      v-validate="'required|numeric'"
                      :class="{'input': true, 'is-danger': errors.has('Telephone') }"
                      type="text"
                      v-model="pnumber"
                      hide-details single-line
                      placeholder="Angiv telefon eller mobil nummer">
                    </v-text-field>
                    <small v-show="errors.has('Telephone')" class="red&#45;&#45;text help is-danger">{{ errors.first('Telephone') }}</small>
                  </div>
                </v-flex>
                <v-flex md4 text-lg-left pa-3 :class="{ 'control': true }">
                  <div>
                    <label><b>*Adgangskode:</b></label>
                    <v-text-field
                      name="Adgangskode"
                      v-validate="'required|confirmed:{target}'"
                      :class="{'input': true, 'is-danger': errors.has('Adgangskode') }"
                      v-model="password"
                      hide-details single-line
                      type="adgangskode"
                      placeholder="Skriv ønsket adgangskode">
                    </v-text-field>
                    <small v-show="errors.has('Adgangskode')" class="red&#45;&#45;text help is-danger">{{ errors.first('Adgangskode') }}</small>
                  </div>
                  <div class="mt-3">
                    <label><b>*Bekræft adgangskode:</b></label>
                    <v-text-field
                      name="{target}"
                      :class="{'input': true, 'is-danger': errors.has('Adgangskode') }"
                      type="password"
                      v-model="passwordRe"
                      hide-details single-line
                      placeholder="Bekræft adgangskoden">
                    </v-text-field>
                    <small v-show="errors.has('Adgangskode')" class="red&#45;&#45;text help is-danger">{{ errors.first('Adgangskode') }}</small>
                  </div>
                  <div class="mt-3">
                    <label><b>URL:</b></label>
                    <v-text-field
                      v-model="url"
                      type="text"
                      hide-details single-line
                      placeholder="HTTP://google.com">
                    </v-text-field>
                  </div>
                  <div class="mt-3">
                    <label ><b>*Vælg kommune:</b></label>
                    <v-select
                      v-bind:items="municipals"
                      name="municipality"
                      v-validate="'required'"
                      v-model="municipality"
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
                    type="checkbox"
                    class="kkblue"
                    data-vv-name="checkbox"
                    :value="skill.id"
                    v-model="ex5"
                    :label="skill.name">
                  </v-checkbox>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex class="ma-3">
                  <label ><b>Billede/Logo:</b></label>
                  <v-text-field v-model="discription" class="bg-secondary kk-textarea" box multi-line placeholder="Tekst ..."></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap text-lg-right>
                <v-spacer></v-spacer>
                <v-flex md12 mr-4>
                  <v-btn @click="addsignup()" type="submit" class="bg-kk-btn">Add {{ usertype }}</v-btn>
                  <v-btn class="bg-kk-btn trans" @click.native="SignUpModal = false">Fortryd</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </form>
        </v-card>
      </v-dialog>-->
      <!--edit home-->
      <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="editAboutusContent" class="large" persistent width="90%">
        <v-card class="bg-primaryColor gray-txt pa-5">
          <v-btn flat icon class="white--text right mt-0 mr-0" @click.native="editAboutusContent = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-container grid-list-md text-xs-center >
            <!--<div v-for="Contents as Cont"></div>-->
            <h5>heading</h5>
            <vue-editor id="editor1" v-model="Contents.title"></vue-editor>
            <h5>Paragraph1 / LeftSide</h5>
            <vue-editor id="editor2" v-model="Contents.LeftContent"></vue-editor>
            <h5>Paragraph2 /RightSide</h5>
            <vue-editor id="editor3" v-model="Contents.RightContent"></vue-editor>
            <v-btn @click="UpdateContent" class="bg-kk-btn">Update</v-btn>
            <v-btn @click="cancelEdit()" class="bg-kk-btn">cancel</v-btn>
          </v-container>
        </v-card>
      </v-dialog>
      <div class="bg-gray  pt-5 pb-3" >
        <v-container grid-list-md text-xs-left >
          <v-layout row wrap text-lg-center >
            <v-flex xs12 md12 pa-3 text-xs-center>
              <h6 class="mb-0"> Administrator panel</h6>
            </v-flex>
          </v-layout>
          <v-layout row wrap text-lg-center >
            <v-flex xs12 md6 pa-3 text-xs-center>
              <p class="mb-0"><b>Klik for at oprette Mentor</b></p>
              <v-btn class="bg-kk-btn mb-3"  @click="addUser('Mentor')">Opret</v-btn><br>
              <p class="mb-0"><b>Klik for at oprette Beskæftigelsestilbud</b></p>
              <v-btn class="bg-kk-btn mb-3"  @click="addUser('Beskæftigelsestilbud')">Opret </v-btn><br>
              <p class="mb-0"><b>Rediger indhold</b></p>
              <v-btn class="bg-kk-btn"  @click="editContent('about')">om os</v-btn><br>
              <v-btn class="bg-kk-btn mb-5"  @click="editContent('HowAdd')">Beskrivelse</v-btn><br>
              <!--<p class="mb-0"><b>Edit home page</b></p>
              <v-btn class="bg-kk-btn" @click="openDIalog('EditHome')">EDIT</v-btn><br>
              <small>(Can change home page contents)</small>-->
            </v-flex>
            <v-flex xs12 md6 pa-3 text-xs-center>
              <p class="mb-0"><b>Tilføje kommuner</b></p>
              <v-btn class="bg-kk-btn" @click="openDIalog('AddMunicipality')">Tilføj/ret</v-btn><br>
              <small>(eg: Allerød, Albertslund, Assens)</small>
              <p class="mb-0 mt-4"><b>Tilføj arbejdsområder</b></p>
              <v-btn class="bg-kk-btn" @click="addSkills('Mentor')">Mentor skills</v-btn><br>
              <!--<small>(eg: ADHD, Ergoterapeut, Løsningsfokuseret (LØFT))</small>-->
              <!--<p class="mb-0 mt-4"><b>Tilføj arbejdsområder</b></p>-->
              <v-btn class="bg-kk-btn" @click="addSkills('Beskæftigelsestilbud')">Beskæftigelsestilbud skills</v-btn><br>
              <small>(eg: ADHD, Ergoterapeut, Løsningsfokuseret (LØFT))</small>
             <!-- <p class="mb-0 mt-4"><b>Payment</b></p>
              <v-btn class="bg-kk-btn">CHANGE $52.00</v-btn><br>
              <small>(Change monthly payment)</small>-->
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <div class="bg-white  pt-5 pb-3" id="SearchAdmin">
        <v-container grid-list-md>
          <v-layout row wrap text-lg-left >
            <v-flex xs12 md6 offset-md3 pa-4>
              <v-subheader class="ma-0 pa-0"><h6>Find profiler</h6></v-subheader>
              <v-text-field
              hide-details single-line
              placeholder="Feks. Jens"
              v-model="name"
              class="mb-1"
              v-on:keyup.enter='pressedEnter'
              prepend-icon="search">
              </v-text-field>
              <div v-scroll-to="{el:'#filterScroll',offset: 5}" ref="zajithxxx"></div>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <div id="filterScroll"></div>
      <filter-div></filter-div>
      <search-result id="resultScroll"></search-result>
      <div class="bg-white  pt-5 pb-3" id="sendMessageadmin">
      <v-container grid-list-md text-xs-left >
        <v-layout row wrap text-lg-center >
          <v-flex xs12 md12 pa-3 text-xs-center>
            <h6 class="mb-0">Send Notifikation til brugere</h6>
            <small>Overveje inden du spammer</small>
          </v-flex>
        </v-layout>
        <v-layout row wrap text-lg-center >
          <v-flex xs12 md1 pa-3 text-xs-center>
            <v-checkbox
              v-model="msgMentor"
              value="true"
              label="Mentor"
              data-vv-name="checkboxtest"
              type="checkbox"
            ></v-checkbox>
          </v-flex>
            <v-flex xs12 md3 pa-3 text-xs-center>
            <v-checkbox
              v-model="msgSuplier"
              value="true"
              label="beskæfigetelsestilbud"
              data-vv-name="checkboxtest"
              type="checkbox"
              class="green"
            ></v-checkbox>
          </v-flex>
        </v-layout>
        <v-layout row wrap text-lg-center >
          <v-flex xs12 md12 pa-3 text-xs-center>
            <v-text-field v-model="sendDiscribe" box class="pa-0 mt-2" multi-line placeholder="Tekst ..."></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap text-lg-center >
          <v-flex xs12 md12 pa-3 text-xs-right>
            <v-btn v-if="msgMentor === null && msgSuplier === null" disabled="" @click="sendMsg" class="bg-kk-btn">send</v-btn>
            <br>
            <small v-if="msgMentor === null && msgSuplier === null">(select who want to receive this notification)</small>
            <v-btn v-if="msgMentor !== null || msgSuplier !== null" @click="sendMsg" class="bg-kk-btn">send</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
      </div>
    </div>
</template>

<script>
  import Filter from './components/FilterBySkills.vue'
  import Results from './../SearchResults.vue'
  export default {
    data () {
      return {
        selectmunisipality: '',
        Contents: [],
        AddSkills: false,
        tile: false,
        myCroppa: {},
        name: '',
        email: '',
        password: '',
        gender: '',
        username: '',
        pnumber: '',
        chipsx: ['Progamming', 'Playing video games'],
        municipality: null,
        discription: '',
        url: '',
        passwordRe: '',
        afterLogin: false,
        skills: [],
        ex5: [],
        chips: [],
        SignUpModal: false,
        AddMunicipality: false,
        muniedit: false,
        skilledit: false,
        sendDiscribe: '',
        searcHide: true,
        search: null,
        addmuni: [],
        addski: [],
        editAboutusContent: false,
        select_items: [
          { options: 'Mentor' },
          { options: 'Beskæftigelsestilbud' }
        ],
        msgMentor: null,
        msgSuplier: null,
        usertype: '',
        usersxtype: this.$store.state.usersxtype,
        pagi_ad: this.$store.state.pagi_ad,
        users: [],
        EmptySearchResult: this.$store.state.emptyUser
      }
    },
    computed: {
      skilsx () {
        return this.$store.state.skills
      },
      municipals () {
        return this.$store.state.municipals
      },
      myType () {
        return this.$store.state.selectTypeDD
      }
      // users () {
      //   return this.$route.fullPath === '/admin' ? this.$store.state.users : this.$store.state.adusers
      // }
    },
    // watch: {
    //   e1: function () {
    //     this.$store.state.searchtype = this.e1
    //     this.$refs.zajithxxx.click()
    //   },
    //   e2: function () {
    //     if (this.e2 !== '') {
    //       // this.$store.state.isType = true
    //       this.$store.state.searchmuni = this.e2
    //       // this.$refs.zajithxxx.click()
    //     }
    //   }
    // },
    methods: {
      // my try
      UpdateContent () {
        var updateData = {
          title: this.Contents.title,
          LeftContent: this.Contents.LeftContent,
          RightContent: this.Contents.RightContent
        }
        if (this.$store.state.UpdateContentType === 'about') {
          this.$http.put('api/update/1', updateData)
            .then(response => {
              console.log(response.body)
            })
        } else if (this.$store.state.UpdateContentType === 'HowAdd') {
          this.$http.put('api/update/2', updateData)
            .then(response => {
              console.log(response.body)
            })
        } else {
          this.$toasted.error('Try again', {timeout: 8000})
        }
        this.editAboutusContent = false
        this.$toasted.success('Updated', {timeout: 8000})
      },
      cancelEdit () {
        // this.$store.state.Heading = ''
        // this.$store.state.LeftPara = ''
        // this.$store.state.RightPara = ''
        this.editAboutusContent = false
      },
      editContent (data) {
        if (data === 'about') {
          this.$store.state.UpdateContentType = data
          this.$http.get('api/contentEdit/1')
            .then(response => {
              this.Contents = response.body
              console.log(response.body)
              this.editAboutusContent = true
            })
        } else {
          this.$store.state.UpdateContentType = data
          this.$http.get('api/contentEdit/2')
            .then(response => {
              this.Contents = response.body
              console.log(response.body)
              this.editAboutusContent = true
            })
        }
      },
      pressedEnter: function () {
        var data = {
          name: this.name
        }
        if (data.name === '') {
          this.$toasted.error('fill name field', {timeout: 8000})
        } else {
          this.$http.get('api/search/userFirst', {params: data})
            .then(response => {
              var counter = response.body.users.length
              this.$store.state.counter = counter
              if (response.body.length !== 0) {
                this.$store.state.users = response.body.users
              }
            }, (response) => {
              this.$toasted.error(response.body.error.errors[Object.keys(response.body.error.errors)[0]], {timeout: 8000})
              console.log(response.body)
            })
        }
      },
  // {
  //       var data = {
  //         // user_type: 'Beskæftigelsestilbud',
  //         // municipality: this.$store.state.searchmuni.id,
  //         // skill_id: this.$store.state.ex5,
  //         // name: this.name,
  //         filter: this.filterProfile,
  //         path: this.$route.fullPath
  //         // take: 10
  //       }
  //       alert(data.path)
  //       this.$http.get('api/search/user', {params: data})
  //         .then(response => {
  //           if (response.body.length !== 0) {
  //             var counter = response.body.users.length
  //             this.$store.state.counter = counter
  //             this.$store.state.users = response.body.users
  //             this.$store.state.pagi_ad = response.body
  //             console.log(this.$store.state.users)
  //           } else {
  //             this.$store.state.adusers = []
  //           }
  //         }, (response) => {
  //           console.log(response)
  //         })
  //     },
      validateBeforeSubmit () {
        this.$validator.validateAll().then((result) => {
          console.log(result)
          if (result) {
            // eslint-disable-next-line
            return
          }
          this.$toasted.error('Udfyld påkrævet felter', {timeout: 8000})
        })
      },
      signup () {
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
          // user_type: this.selectTypeDD.options,
          user_type: this.usertype,
          skills: this.ex5,
          payment: 'admin'
        }
        console.log(data)
        this.$http.post('api/auth/signup', data)
          .then(response => {
            // this.$auth.setToken(response.body.token)
            this.ownerid = response.body.userId
            this.SignUpModal = false
            // this.AddPaymentModal = true
          }, (response) => {
            this.$toasted.error(response.body.error.errors[Object.keys(response.body.error.errors)[0]], {timeout: 8000})
            console.log(response.body)
          })
      },
      // addsignup () {
      //   var data = {
      //     name: this.name,
      //     email: this.email,
      //     telephone: this.pnumber,
      //     user_name: this.username,
      //     password: this.password,
      //     url: this.url,
      //     municipality: this.municipality,
      //     gender: this.gender,
      //     discription: this.discription,
      //     user_type: this.usertype,
      //     skills: this.ex5,
      //     avatar: this.myCroppa.generateDataUrl(),
      //     paymet: 'admin'
      //   }
      //   this.$http.post('api/auth/signup', data)
      //     .then(response => {
      //       this.SignUpModal = false
      //       console.log(response.body)
      //     }, (response) => {
      //       alert('try again')
      //     })
      // },
      sendMsg () {
        var data = {
          mentor: this.msgMentor,
          suplier: this.msgSuplier,
          message: this.sendDiscribe
        }
        this.$http.post('api/send/message', data)
          .then(response => {
            console.log(response.body)
            this.msgMentor = null
            this.msgSuplier = null
            this.sendDiscribe = null
            this.$toasted.success('Sendt', {timeout: 2000})
          }, (response) => {
            if (response === false) {
              alert('try again')
            }
          })
      },
      addMunicipal () {
        var data = {
          name: this.addmuni
        }
        console.log(data)
        this.$http.post('api/municipal', data)
          .then(response => {
            this.allmunicipal()
            this.addmuni = []
            this.$toasted.success(response.body.status, {timeout: 8000})
            console.log(response.body)
          }, (response) => {
            this.$toasted.error('Data findes allerede: ' + response.body.exsits, {timeout: 8000})
            this.addmuni = response.body.exsits
            console.log(response.body.exsits)
          })
      },
      addskillsxx () {
        var data = {
          name: this.addski
        }
        if (this.$store.state.SkillUsertype === 'Mentor') {
          this.$http.post('api/skill', data)
            .then(response => {
              this.allskills()
              this.addski = []
              this.$toasted.success(response.body.status, {timeout: 8000})
              console.log(response.body)
            }, (response) => {
              this.$toasted.error('Data findes allerede: ' + response.body.exsits, {timeout: 8000})
              this.addski = response.body.exsits
              console.log(response.body.exsits)
            })
        } else if (this.$store.state.SkillUsertype === 'Beskæftigelsestilbud') {
          this.$http.post('api/skillSub', data)
            .then(response => {
              this.allskills()
              this.addski = []
              this.$toasted.success(response.body.status, {timeout: 8000})
              console.log(response.body)
            }, (response) => {
              this.$toasted.error('Data findes allerede: ' + response.body.exsits, {timeout: 8000})
              this.addski = response.body.exsits
              console.log(response.body.exsits)
            })
        }
      },
      removeMunicipal (data) {
        this.$http.delete('api/municipal/' + data)
          .then(response => {
            console.log(response.body)
            this.allmunicipal()
          }, (response) => {
            alert('try again')
          })
      },
      removeSkill (data) {
        if (this.$store.state.SkillUsertype === 'Mentor') {
          this.$http.delete('api/skill/' + data)
            .then(response => {
              console.log(response.body)
              this.allskills()
            }, (response) => {
              alert('try again')
            })
        } else {
          this.$http.delete('api/skillSub/' + data)
            .then(response => {
              console.log(response.body)
              this.allskills()
            }, (response) => {
              alert('try again')
            })
        }
      },
      uploadCroppedImage () {
        this.myCroppa.generateBlob((blob) => {
          // write code to upload the cropped image file (a file is a blob)
        }, 'image/jpeg', 0.8) // 80% compressed jpeg file
      },
      remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      },
      openDIalog (data) {
        this.AddMunicipality = data === 'AddMunicipality' ? !this.AddMunicipality : false
        // this.AddSkills = data === 'AddSkills' ? !this.AddSkills : false
      },
      addSkills (data) {
        this.addski = []
        this.AddSkills = true
        this.$store.state.SkillUsertype = data
        if (this.$store.state.SkillUsertype === 'Mentor') {
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
      skillsx () {
        if (this.usertype === 'Mentor') {
          this.$store.state.skills = []
          this.skillsMent()
        } else {
          this.$store.state.skills = []
          this.skillsSup()
        }
      },
      addUser (data) {
        this.SignUpModal = true
        this.usertype = data
        this.skillsx()
      },
      // adminSearch (id) {
      //   var data = {
      //     user_type: this.$store.state.searchtype.options,
      //     municipality: this.$store.state.searchmuni.id,
      //     skill_id: this.$store.state.ex5,
      //     name: this.$store.state.name,
      //     filter: this.filterProfile,
      //     path: this.$route.fullPath,
      //     take: 10,
      //     page: id
      //   }
      //   this.$http.get('api/admin/search/user', {params: data})
      //     .then(response => {
      //       console.log(response.body)
      //       if (response.body.length !== 0) {
      //         this.$store.state.adusers = response.body.data
      //         this.$store.state.pagi_ad = response.body
      //       } else {
      //         this.$store.state.adusers = []
      //       }
      //     }, (response) => {
      //       console.log(response)
      //     })
      // },
      //  search (id) {
      //   var data = {
      //     user_type: this.$store.state.searchtype.options,
      //     municipality: this.$store.state.searchmuni.id,
      //     skill_id: this.$store.state.ex5,
      //     name: this.$store.state.name,
      //     filter: this.filterProfile,
      //     path: this.$route.fullPath,
      //     take: 10,
      //     page: id
      //   }
      //   this.$http.get('api/admin/search/user', {params: data})
      //     .then(response => {
      //       console.log(response.body)
      //       if (response.body.length !== 0) {
      //         this.$store.state.adusers = response.body.data
      //         this.$store.state.pagi_ad = response.body
      //       } else {
      //         this.$store.state.adusers = []
      //       }
      //     }, (response) => {
      //       console.log(response)
      //     })
      // },
      selectSearchView: function () {
        this.searcHide = false
      },
      userAddSubmit () {
        this.$validator.validateAll().then((result) => {
          console.log(result)
          if (result) {
            // eslint-disable-next-line
            return
          }
          this.$toasted.error('Udflyd alle påkrævet felter', {timeout: 8000})
        })
      },
      allskills () {
        if (this.$store.state.SkillUsertype === 'Mentor') {
          this.$http.get('api/skill')
            .then(response => {
              this.$store.state.skills = response.body.skills
            }, (response) => {
              console.log(response.body)
            })
        } else if (this.$store.state.SkillUsertype === 'Beskæftigelsestilbud') {
          this.$http.get('api/skillSup')
            .then(response => {
              this.$store.state.skills = response.body.skills
            }, (response) => {
              console.log(response.body)
            })
        }
      },
      allmunicipal () {
        this.$http.get('api/municipal')
          .then(response => {
            this.$store.state.municipals = response.body.municipals
          }, (response) => {
            console.log(response.body)
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
      }
/*      ,
      randomProfile () {
        var data = {
          user_type: this.$store.state.searchtype.options,
          municipality: this.$store.state.searchmuni.id,
          skill_id: this.ex5,
          name: this.name
        }
        this.$http.get('api/search/user', {params: data})
          .then(response => {
            console.log(response.body)
            if (response.body.length !== 0) {
              this.$store.state.users = response.body.users
            } else {
              this.$store.state.users = []
            }
          }, (response) => {
            console.log(response)
          })
        console.log(this.ex5)
//        console.log(this.$store.state.searchtype.options + ' -----------kkk----------- ' + this.$store.state.searchmuni.id)
      } */
    },
    created () {
      // this.randomProfile()
      this.myprofile()
      // alert(this.usersxtype)
      if (this.$store.state.usersxtype !== 'admin') {
        this.$router.push('/')
      }
    },
    components: {
      'filter-div': Filter,
      'search-result': Results
    }
  }
</script>

<style>
</style>
