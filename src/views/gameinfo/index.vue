<template>
  <div class="game-info">
 
    <file-upload style="margin-top: 20px;"></file-upload>
  </div>
</template>
  
<script>
import { mapState } from 'vuex';
import FileUpload from './components/FileUpload.vue';
export default {
  name: 'gameinfo',
  data() {
    return {
      fileList: []

    };
  },
  components: {
    FileUpload,
  },
  methods: {
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
};
</script>
  
<style scoped>
/* Your styles here */
</style>