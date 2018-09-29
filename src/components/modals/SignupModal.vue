<!--<template>-->
    <!--<div>-->
      <!--<v-dialog v-model="SignUpModal" class="large" persistent width="75%">-->
        <!--<v-card class="bg-white pa-5 kkblue">-->
          <!--<v-container grid-list-md>-->
            <!--<v-layout row wrap>-->
              <!--<v-flex text-lg-left>-->
                <!--<small><b>Felter markeret med en stjerne <br> (*) er påkrævet.</b></small>-->
                <!--<h6 class="text-lg-center">ADD MENTORsss</h6>-->
                <!--<p class="text-lg-center"><b>Kontooplysninger</b></p>-->
              <!--</v-flex>-->
            <!--</v-layout>-->
            <!--<v-layout row wrap>-->
              <!--<v-flex md4 text-lg-left pa-3>-->
                <!--<div>-->
                <!--<label for=""><b>Billede/Logo</b></label>-->
                <!--<v-avatar-->
                  <!--:tile="tile"-->
                  <!--size="200px"-->
                  <!--class=""-->
                <!--&gt;-->
                  <!--<img src="./../../assets/profile.png" alt="avatar">-->
                <!--</v-avatar>-->
                <!--</div>-->
                <!--<div class="mt-2">-->
                  <!--<label for=""><b>*Køn:</b></label>-->
                  <!--<v-layout row wrap>-->
                    <!--<v-flex>-->
                  <!--<v-checkbox-->
                    <!--v-model="male"-->
                    <!--value=""-->
                    <!--label="Mand"-->
                    <!--data-vv-name=""-->
                    <!--type="checkbox"-->
                    <!--class="kkblue"-->
                  <!--&gt;</v-checkbox>-->
                    <!--</v-flex>-->
                    <!--<v-flex>-->
                  <!--<v-checkbox-->
                    <!--v-model="female"-->
                    <!--value=""-->
                    <!--label=" Kvinde"-->
                    <!--data-vv-name=""-->
                    <!--type="checkbox"-->
                    <!--class="kkblue"-->
                  <!--&gt;</v-checkbox>-->
                    <!--</v-flex>-->
                  <!--</v-layout>-->
                <!--</div>-->

              <!--</v-flex>-->
              <!--<v-flex md4 text-lg-left pa-3>-->
                <!--<div>-->
                <!--<label for="name"><b>*Navn:</b></label>-->
                <!--<v-text-field-->
                  <!--id="name"-->
                  <!--hide-details single-line-->
                  <!--type="text"-->
                  <!--Placeholder="Navn">-->
                <!--</v-text-field>-->
                <!--</div>-->
                <!--<div class="mt-3">-->
                  <!--<label for="email"><b>*Mail:</b></label>-->
                  <!--<v-text-field-->
                    <!--id="email"-->
                    <!--hide-details single-line-->
                    <!--placeholder="email@email.dk"-->
                    <!--type="email">-->
                  <!--</v-text-field>-->
                <!--</div>-->
                <!--<div class="mt-3">-->
                  <!--<label for="password"><b>*Adgangskode:</b></label>-->
                  <!--<v-text-field-->
                    <!--id="password"-->
                    <!--hide-details single-line-->
                    <!--type="password"-->
                    <!--placeholder="******">-->
                  <!--</v-text-field>-->
                <!--</div>-->
                <!--<div class="mt-3">-->
                  <!--<label for="url"><b>URL:</b></label>-->
                  <!--<v-text-field-->
                    <!--id="url"-->
                    <!--type="text"-->
                    <!--hide-details single-line-->
                    <!--placeholder="HTTP://google.com">-->
                  <!--</v-text-field>-->
                <!--</div>-->
              <!--</v-flex>-->
              <!--<v-flex md4 text-lg-left pa-3>-->
                <!--<div>-->
                  <!--<label for="username"><b>*Brugernavn:</b></label>-->
                  <!--<v-text-field-->
                    <!--type="text"-->
                    <!--id="username"-->
                    <!--hide-details single-line-->
                    <!--placeholder="user name">-->
                  <!--</v-text-field>-->
                <!--</div>-->
                <!--<div class="mt-3">-->
                  <!--<label for="phone"><b>*Telephone:</b></label>-->
                  <!--<v-text-field-->
                    <!--type="number"-->
                    <!--id="phone"-->
                    <!--hide-details single-line-->
                    <!--placeholder="123456">-->
                  <!--</v-text-field>-->
                <!--</div>-->
                <!--<div class="mt-3">-->
                  <!--<label for="passwordRe"><b>*Bekræft adgangskode:</b></label>-->
                  <!--<v-text-field-->
                    <!--type="password"-->
                    <!--id="passwordRe"-->
                    <!--hide-details single-line-->
                    <!--placeholder="******">-->
                  <!--</v-text-field>-->
                <!--</div>-->
                <!--<div class="mt-3">-->
                  <!--<label for=""><b>*Vælg kommune:</b></label>-->
                  <!--<v-select-->
                    <!--v-bind:items="select_mu"-->
                    <!--v-model="selectmunisipality"-->
                    <!--single-line-->
                    <!--item-text="option"-->
                    <!--placeholder="Vælg Kommune"-->
                    <!--return-object-->
                    <!--persistent-hint-->
                    <!--class="kk-select mb-4"-->
                  <!--&gt;</v-select>-->
                <!--</div>-->
              <!--</v-flex>-->
            <!--</v-layout>-->
            <!--<v-layout row wrap>-->
              <!--<v-flex class="pa-3">-->
              <!--<label for=""><b>*Vælg arbejdsområder:</b></label>-->
              <!--</v-flex>-->
            <!--</v-layout>-->
            <!--<v-layout row wrap text-lg-center>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox1"-->
                  <!--label="ADHD"></v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox2"-->
                  <!--label="Ergoterapeut">-->
                <!--</v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox3"-->
                  <!--label="Løsningsfokuseret (LØFT)"></v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox4"-->
                  <!--label="Psykoterapeut"></v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox5"-->
                  <!--label="Angst og fobi"></v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox6"-->
                  <!--label="Fremmedsprog"></v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox7"-->
                  <!--label="Mand"></v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox8"-->
                  <!--label="PTSD"></v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox9"-->
                  <!--label="Asperger/autisme">-->
                <!--</v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox10"-->
                  <!--label="Fysioedukation">-->
                <!--</v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox11"-->
                  <!--label="Misbrug">-->
                <!--</v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox12"-->
                  <!--label="Smertehåndtering"></v-checkbox></v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox13"-->
                  <!--label="Bipolar lidelse">-->
                <!--</v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox14"-->
                  <!--label="Hjemløshed">-->
                <!--</v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox15"-->
                  <!--label="Motivationsarbejde">-->
                <!--</v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox16"-->
                  <!--label="Skizofreni">-->
                <!--</v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox17"-->
                  <!--label="Budget/økonomi">-->
                <!--</v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox18"-->
                  <!--label="Integration">-->
                <!--</v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox19"-->
                  <!--label="OCD"></v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox20"-->
                  <!--label="Spiseforstyrrelser">-->
                <!--</v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox21"-->
                  <!--label="Børn/familie">-->
                <!--</v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox22"-->
                  <!--label="Kost og motion">-->
                <!--</v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox23"-->
                  <!--label="Personlighedsforstyrelser">-->
                <!--</v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox24"-->
                  <!--label="Socialpædagog">-->
                <!--</v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox25"-->
                  <!--label="Coach">-->
                <!--</v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox26"-->
                  <!--label="Kriminalitet">-->
                <!--</v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox27"-->
                  <!--label="Psykoedukation">-->
                <!--</v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox28"-->
                  <!--label="Socialrådgiver">-->
                <!--</v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox29"-->
                  <!--label="Depression">-->
                <!--</v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox30"-->
                  <!--label="Kvinde">-->
                <!--</v-checkbox>-->
              <!--</v-flex>-->
              <!--<v-flex md2  >-->
                <!--<v-checkbox-->
                  <!--type="checkbox"-->
                  <!--class="kkblue"-->
                  <!--data-vv-name="checkbox"-->
                  <!--value="1"-->
                  <!--v-model="checkbox31"-->
                  <!--label="Psykolog">-->
                <!--</v-checkbox>-->
              <!--</v-flex>-->
            <!--</v-layout>-->
            <!--<v-layout row wrap>-->
              <!--<v-flex class="ma-3">-->
                <!--<label for=""><b>Billede/Logo:</b></label>-->
                <!--<v-text-field class="bg-secondary kk-textarea" box multi-line placeholder="Tekst ..."></v-text-field>-->
              <!--</v-flex>-->
            <!--</v-layout>-->
          <!--</v-container>-->
        <!--</v-card>-->
      <!--</v-dialog>-->
    <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--export default {-->
    <!--props: ['SignUpModal'],-->
    <!--data () {-->
      <!--return {-->
        <!--male: false,-->
        <!--female: false,-->
        <!--tile: false,-->
        <!--selectmunisipality: null,-->
        <!--select_mu: [-->
          <!--{ option: 'Albertslund' },-->
          <!--{ option: 'Allerød' },-->
          <!--{ option: 'Assens' },-->
          <!--{ option: 'Ballerup' },-->
          <!--{ option: 'Billund' },-->
          <!--{ option: 'Bornholms regionskommune' },-->
          <!--{ option: 'Brøndby' },-->
          <!--{ option: 'Brønderslev' },-->
          <!--{ option: 'Dragør' },-->
          <!--{ option: 'Egedal' },-->
          <!--{ option: 'Esbjerg' },-->
          <!--{ option: 'Fanø' },-->
          <!--{ option: 'Faxe' },-->
          <!--{ option: 'Fredensborg' },-->
          <!--{ option: 'Fredericia' },-->
          <!--{ option: 'Frederiksberg' },-->
          <!--{ option: 'Frederikshavn' },-->
          <!--{ option: 'Frederikssund' },-->
          <!--{ option: 'Furesø' },-->
          <!--{ option: 'Gentofte' },-->
          <!--{ option: 'Gladsaxe' },-->
          <!--{ option: 'Glostrup' },-->
          <!--{ option: 'Greve' },-->
          <!--{ option: 'Gribskov' },-->
          <!--{ option: 'Guldborgsund' },-->
          <!--{ option: 'Haderslev' },-->
          <!--{ option: 'Halsnæs' },-->
          <!--{ option: 'Hedensted' },-->
          <!--{ option: 'Helsingør' },-->
          <!--{ option: 'Herlev' },-->
          <!--{ option: 'Herning' },-->
          <!--{ option: 'Hillerød' },-->
          <!--{ option: 'Hjørring' },-->
          <!--{ option: 'Holbæk' },-->
          <!--{ option: 'Holstebro' },-->
          <!--{ option: 'Horsens' },-->
          <!--{ option: 'Hvidovre' },-->
          <!--{ option: 'Høje Taastrup' },-->
          <!--{ option: 'Hørsholm' },-->
          <!--{ option: 'Ikast-Brande' },-->
          <!--{ option: 'Ishøj' },-->
          <!--{ option: 'Jammerbugt' },-->
          <!--{ option: 'Kalundborg' },-->
          <!--{ option: 'Kerteminde' },-->
          <!--{ option: 'Kolding' },-->
          <!--{ option: 'København' },-->
          <!--{ option: 'Køge' },-->
          <!--{ option: 'Langeland' },-->
          <!--{ option: 'Lejre' },-->
          <!--{ option: 'Lemvig' },-->
          <!--{ option: 'Lolland' },-->
          <!--{ option: 'Lyngby-Taarbæk' },-->
          <!--{ option: 'Mariagerfjord' },-->
          <!--{ option: 'Middelfart' },-->
          <!--{ option: 'Morsø' },-->
          <!--{ option: 'Norddjurs' },-->
          <!--{ option: 'Nordfyn' },-->
          <!--{ option: 'Nyborg' },-->
          <!--{ option: 'Næstved' },-->
          <!--{ option: 'Odder' },-->
          <!--{ option: 'Odense' },-->
          <!--{ option: 'Odsherred' },-->
          <!--{ option: 'Randers' },-->
          <!--{ option: 'Rebild' },-->
          <!--{ option: 'Ringkøbing-Skjern' },-->
          <!--{ option: 'Ringsted' },-->
          <!--{ option: 'Roskilde' },-->
          <!--{ option: 'Rudersdal' },-->
          <!--{ option: 'Rødovre' },-->
          <!--{ option: 'Samsø' },-->
          <!--{ option: 'Silkeborg' },-->
          <!--{ option: 'Skanderborg' },-->
          <!--{ option: 'Skive' },-->
          <!--{ option: 'Slagelse' },-->
          <!--{ option: 'Solrød' },-->
          <!--{ option: 'Sorø' },-->
          <!--{ option: 'Stevns' },-->
          <!--{ option: 'Struer' },-->
          <!--{ option: 'Svendborg' },-->
          <!--{ option: 'Syddjurs' },-->
          <!--{ option: 'Sønderborg' },-->
          <!--{ option: 'Thisted' },-->
          <!--{ option: 'Tønder' },-->
          <!--{ option: 'Tårnby' },-->
          <!--{ option: 'Vallensbæk' },-->
          <!--{ option: 'Varde' },-->
          <!--{ option: 'Vejen' },-->
          <!--{ option: 'Vejle' },-->
          <!--{ option: 'Vesthimmerland' },-->
          <!--{ option: 'Vordingborg' },-->
          <!--{ option: 'Ærø' },-->
          <!--{ option: 'Aabenraa' },-->
          <!--{ option: 'Aalborg' },-->
          <!--{option: 'Aarhus '}-->
        <!--],-->
        <!--checkbox1: null,-->
        <!--checkbox2: null,-->
        <!--checkbox3: null,-->
        <!--checkbox4: null,-->
        <!--checkbox5: null,-->
        <!--checkbox6: null,-->
        <!--checkbox7: null,-->
        <!--checkbox8: null,-->
        <!--checkbox9: null,-->
        <!--checkbox10: null,-->
        <!--checkbox11: null,-->
        <!--checkbox12: null,-->
        <!--checkbox13: null,-->
        <!--checkbox14: null,-->
        <!--checkbox15: null,-->
        <!--checkbox16: null,-->
        <!--checkbox17: null,-->
        <!--checkbox18: null,-->
        <!--checkbox19: null,-->
        <!--checkbox20: null,-->
        <!--checkbox21: null,-->
        <!--checkbox22: null,-->
        <!--checkbox23: null,-->
        <!--checkbox24: null,-->
        <!--checkbox25: null,-->
        <!--checkbox26: null,-->
        <!--checkbox27: null,-->
        <!--checkbox28: null,-->
        <!--checkbox29: null,-->
        <!--checkbox30: null,-->
        <!--checkbox31: null-->
      <!--}-->
    <!--},-->
    <!--components: {}-->
  <!--}-->
<!--</script>-->

<!--<style>-->
<!--</style>-->
