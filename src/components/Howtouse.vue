<template>
  <div>
    <div class="bg-white pt-5 pb-3">
      <v-container grid-list-md>
        <!--<v-layout row wrap text-lg-center>-->
          <!--<v-flex xs12 pa-4 >-->
            <!--<h6 class="text-xs-center"><b>-->
              <!--Sådan gør du....-->
            <!--</b>-->
            <!--</h6>-->
            <!--<p class="text-xs-left text-md-center">-->
              <!--1. vælg først om du ønsker at finde en mentor eller et beskæftigelsestilbud.-->
              <!--Du vælger via topmenuen eller via cirklerne til venstre-->
            <!--</p>-->
            <!--<p class="text-xs-left text-md-center">-->
              <!--2. Stil sigtekornet ind...-->
              <!--Vores søgefunktion fungerer sådan, at du fra start ser alle annoncer i hele landet. Herefter kan du sigte dig ind på den leverance som du har brug for.-->
              <!--Det vil være naturligt at du først vælger hvilken kommune opgaven skal udføres i og så kan du, ved afkrydsning af en eller flere tjekbokse, indsnævre det fremviste udvalg af leverandører.-->
              <!--Udvalget af leverandører vises som visitkort. Du kan klikke på navnet i visitkortet og se den bagvedliggende annonce eller du kan kontakte leverandøren direkte via kontaktoplysninger/mail link på visitkortet.-->
            <!--</p>-->
          <!--</v-flex>-->
        <!--</v-layout>-->
        <v-layout row wrap text-xs-center>
          <v-flex xs12 md3 pa-3>
            <div class="avatar avatar--tile nav-logo  mb-3">
              <img src="../assets/icons/select-mORs.svg" alt="">
            </div>
            <p>Vælg mentor- eller beskæftigelsestilbud</p>
          </v-flex>
          <v-flex xs12 md3 pa-3 >
            <div class="avatar avatar--tile nav-logo mb-3">
              <img src="../assets/icons/filter-3.svg" alt="">
            </div>
            <p>Afgræns din søgning</p>

          </v-flex>
          <v-flex xs12 md3 pa-3 >
            <div class="avatar avatar--tile nav-logo mb-3">
              <img src="../assets/icons/clickToRead.svg" alt="">
            </div>
            <p>Se søgeresultat og klik for at læse mere</p>
          </v-flex>
          <v-flex xs12 md3 pa-3 >
            <div class="avatar avatar--tile nav-logo mb-3">
              <img src="../assets/icons/contact-them.svg" alt="">
            </div>
            <p>kontakt dit/dine valgte tilbud</p>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    }
  }
</script>
<style>
</style>
