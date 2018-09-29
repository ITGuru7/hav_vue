<template>
  <div>
    <div class="bg-gray pt-5 pb-3 primary-txt">
      <v-container grid-list-md text-xs-center >
        <v-layout row wrap>
          <v-flex xs12 v-html="this.$store.state.AboutContents.title">

            <!--<h6>Om Kommunekontakt</h6>-->
          </v-flex>
        </v-layout>
        <v-layout row wrap text-md-left>
          <v-flex xs12 md6 pa-4 style="white-space: pre-line;" v-html="this.$store.state.AboutContents.LeftContent">
            <!--<p><b>Hvem er vi  </b><br>-->
              <!--Kommunekontakt er en ny iværksættervirksomhed med base i København.-->
            <!--</p>-->
            <!--<p>-->
              <!--<b>Det er vores erfaring, <br></b>-->
              <!--at der i de kommunale forvaltninger er behov for et samlet overblik over private aktører inden for-->
              <!--social- og beskæftigelsesområdet.-->
            <!--</p>-->
            <!--<p><b>Vi tror på,<br></b>-->
              <!--at private aktører på social- og beskæftigelsesområdet har behov for en platform hvor de løbende kan formidle eksisterende og nye tilbud til kommunerne.-->
            <!--</p>-->
            <!--<p><b>Vi er<br></b>-->
              <!--tre socialrådgivere med mange års erfaring indenfor social,- og beskæftigelsesområdet.-->
            <!--</p>-->
          </v-flex>
          <v-flex xs12 md6 pa-4 style="white-space: pre-line;" v-html="this.$store.state.AboutContents.RightContent">
            <!--<p>-->
              <!--<b>Mission</b><br>-->
              <!--Vores mission er at forbedre og øge kontakten mellem kommunerne og de private aktører/udbydere.-->
            <!--</p>-->
            <!--<p><b>Vision<br></b>-->
              <!--Vi ser for os, at vi skal facilitere en træfsikker indsats når jobcentret anvender private aktører.</p>-->
              <!--<p>Vi vil øge muligheden for overblik og kvalificerede faglige valg for både sagsbehandlere og ledere - det tror vi på kan være med til at sikre, at borgerne får en indsats der matcher deres individuelle problemstillinger.-->
            <!--</p>-->
            <v-layout row wrap text-lg-left>
              <!--<v-flex xs3>-->
                <!--<img src="../assets/p1.png" alt="">-->
              <!--</v-flex>-->
              <v-flex xs9>
              <!--  <v-btn class="bg-kk-btn">
                 print
                  <i class="material-icons pl-2">print</i>
                </v-btn>-->
                <a href="mailto:kontakt@kommunekontakt.dk?Subject=" target="_top" class="btn btn--raised point bg-kk-btn">
                  email
                  <i class="material-icons pl-2">email</i>
                </a>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    mounted () {
      this.getContent()
    },
    methods: {
      getContent () {
        this.$http.get('api/contents')
          .then(response => {
            this.$store.state.AboutContents = response.body[0]
            // console.log(this.$store.state.AboutContents)
          }, (response) => {
            // console.log(response.body[0]
          })
      }
    }
  }
</script>
<style>
</style>
