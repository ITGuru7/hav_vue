<template>
    <div>
      <div class="bg-secondary pt-5 pb-3 t-height">
        <v-container grid-list-md>
          <v-layout row wrap >
            <v-flex xs10 text-xs-left >
              <img src="./../../assets/logo-kk.png" alt="">
            </v-flex>
            <v-flex xs2 text-xs-left >
              <p>
                <b>Kommunekontakt</b><br>
                Socialgade 13 <br>
                9988 Mentorkøbing <br>
                Tlf.: 007 007 0059 <br>
                Mail: <a href="">kontakt@kommunekontakt.dk</a>
              </p>
            </v-flex>
          </v-layout>
          <v-divider class="white-bg mb-5"></v-divider>
          <v-layout row wrap >
            <v-flex xs12 text-xs-center >
              <h6>YOUR BILL</h6>
            </v-flex>
          </v-layout>
          <v-layout row wrap >
            <v-flex xs8 text-xs-left >
              <h6>INVOICE</h6>
              <p><b>NAME : </b>Name</p>
              <p><b>BILL TYPE : </b>Type</p>
              <p><b>PROFILE TYPE : </b>Type</p>
              <p><b>DATE : </b>##/##/####</p>
              <p><b>REFERENCE ID : </b>##############</p>
            </v-flex>
            <v-flex xs4 text-xs-center>
              <h6>AMOUNT</h6>
              <div class="pl-5 pr-5 pt-4 pb-4 bg-primaryColor">
                <h4 class="ma-0"> <b>$54.00 </b></h4>
              </div>
            </v-flex>
          </v-layout>
          <v-divider class="white-bg mb-5 mt-5"></v-divider>
          <v-layout row wrap >
            <v-flex xs12   text-xs-left >
              <h6> NOTE</h6>
              <p>Sample paragraph words, sentences, paragraphs. This book, for example, consists of text.
                Textprocessing refers to the ability to manipulate words, lines, and pages. Typically,
                the term text refers to text stored as ASCII
                codes (that is, without any formatting). ... Also see text messaging.</p>
            </v-flex>
          </v-layout>
          <v-divider class="white-bg mb-5 mt-5"></v-divider>
          <v-layout row wrap >
            <v-flex xs12   text-xs-right >
              <v-btn large class="bg-kk-btn trans">Fortryd</v-btn>
              <v-btn large class="bg-kk-btn">VIEW MY PROFILE</v-btn>
              <v-btn large class="bg-kk-btn">PRINT AS PDF</v-btn>
              <p class="dis">(When click 'view my profile' button u can visit your active profile , when click 'print as pdf' button can print this invoice as pdf. )</p>
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
    },
    components: {}
  }
</script>

<style>
</style>
