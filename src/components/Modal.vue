<template>
  <v-dialog v-model="trymodal" width="800px">
    <v-card>
      <v-card-title
        class="grey lighten-4 py-4 title"
      >
        Create contact
      </v-card-title>
      <v-container grid-list-sm class="pa-4">
        <v-layout row wrap>
          <v-flex xs12 d-flex align-center justify-space-between>
            <v-avatar size="40px" class="mr-3">
              <img
                src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                alt=""
              >
            </v-avatar>
            <v-text-field
              placeholder="Navn"
            ></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              prepend-icon="business"
              placeholder="Company"
            ></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              placeholder="Job title"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              prepend-icon="mail"
              placeholder="Email"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              prepend-icon="phone"
              placeholder="(000) 000 - 0000"
              mask="phone"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              prepend-icon="notes"
              placeholder="Notes"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-btn flat primary>More</v-btn>
        <v-spacer></v-spacer>
        <v-btn flat primary @click="trymodal = false">Fortryd</v-btn>
        <v-btn flat @click="trymodal = false">Gem</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
  export default {
    props: ['trymodal'],
    data () {
      return {
      }
    }
  }
</script>
<style>
</style>
