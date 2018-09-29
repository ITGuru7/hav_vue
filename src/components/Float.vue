<template>
  <div>
    <v-btn
      fab
      bottom
      right
      class="blue"
      dark
      fixed
      @click.stop="openDIalog()"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <try-modal :trymodal="dialog"></try-modal>
  </div>
</template>
<script>
  import MyModal from './Modal.vue'
  export default {
    components: {
      'try-modal': MyModal
    },
    data () {
      return {
        dialog: false
      }
    },
    methods: {
      openDIalog () {
        this.dialog = !this.dialog
      }
    }
  }
</script>
<style>
</style>
