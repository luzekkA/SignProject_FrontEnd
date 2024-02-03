<!-- FileUpload.vue -->
<!-- 用于上传用户头像 -->
<template class="uploadFile">
  <div>
    <form @submit.prevent="uploadFile" enctype="multipart/form-data">
      <label for="file">选择图片文件:</label>
      <input style="margin-left: 20px;" type="file" id="file" ref="fileInput" accept=".png, .jpeg, .jpg" required>
      <!-- <label for="competition">竞赛名称:</label>
      <input type="text" v-model="competition" required> -->
      <button type="submit">上传一寸照</button>
    </form>
  </div>
</template>
  
<script>
import { mapState } from 'vuex'
import {uploadFile} from '@/api/user'
export default {
  data() {
    return {
      // competition: '',
      uploadResult: null,
    };
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  // props: ['competition'],
  methods: {
    uploadFile() {
      const fileInput = this.$refs.fileInput;
      const selectedFile = fileInput.files[0];
      if (selectedFile) {
        uploadFile(selectedFile, this.user.token)
          .then(response => {
            this.uploadResult = response;
            console.log('上传结果:', this.uploadResult);

            // 根据后端返回的数据进行处理
            if (this.uploadResult.code === 1) {
              // 文件为空，进行相应的提示或处理
              alert(this.uploadResult.message);
            }
            else{
              alert('文件上传成功');
            }
          })
          .catch(error => {
            console.error('上传失败:', error);
            alert('文件上传失败');
            // 处理上传失败的逻辑
          });
      } else {
        alert('请选择文件');
      }

    },
  },
};
</script>
  
<style scoped>
.uploadFile {
  margin-top: 0px;
}

/* 添加样式（可选） */
</style>
  