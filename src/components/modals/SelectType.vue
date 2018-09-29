<!--<template>-->
  <!--<div>-->
    <!--<v-dialog v-model="selectTypeModal" class="large" persistent width="60%">-->
      <!--<v-card class="bg-white pa-5">-->
        <!--<v-container grid-list-md>-->
          <!--<v-layout row wrap text-lg-center>-->
            <!--<v-flex>-->
              <!--<h5>Vælg en type du ønsker at oprette</h5>-->
            <!--</v-flex>-->
          <!--</v-layout>-->
          <!--<v-layout row wrap class="">-->
            <!--<v-flex md8 offset-md2>-->
            <!--<v-select-->
              <!--v-bind:items="select_items_type"-->
              <!--v-model="selectTypeDD"-->
              <!--single-line-->
              <!--item-text="options"-->
              <!--placeholder="Vælg type"-->
              <!--class="kk-select mb-2"-->
            <!--&gt;</v-select>-->
            <!--</v-flex>-->
          <!--</v-layout>-->
              <!--<v-layout row wrap>-->
            <!--<v-flex md1 offset-md4 mr-5>-->
              <!--<v-btn class="bg-kk-btn" @click="selectTypeModal = false" @click.stop="openDIalog('signup')">Opret</v-btn>-->
            <!--</v-flex>-->
            <!--<v-flex >-->
              <!--<v-btn class="bg-kk-btn trans" @click="selectTypeModal = false">Fortryd</v-btn>-->
            <!--</v-flex>-->
          <!--</v-layout>-->
        <!--</v-container>-->
      <!--</v-card>-->
    <!--</v-dialog>-->
    <!--<SignUp :SignUpModal="signup"></SignUp>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import SignUp from './SignupModal.vue'-->
  <!--export default {-->
    <!--props: ['selectTypeModal', 'selectTypeDD'],-->
    <!--data () {-->
      <!--return {-->
        <!--selectTypeDD: null,-->
        <!--signup: false,-->
        <!--select_items_type: [-->
          <!--{ options: 'Mentor' },-->
          <!--{ options: 'Beskæftigelsestilbud' }-->
        <!--]-->
      <!--}-->
    <!--},-->
    <!--components: {-->
      <!--'SignUp': SignUp-->
    <!--},-->
    <!--methods: {-->
      <!--openDIalog (data) {-->
        <!--this.signup = data === 'signup' ? !this.signup : false-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style>-->
<!--</style>-->
