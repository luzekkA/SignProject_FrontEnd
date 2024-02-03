<!-- FileUpload.vue -->
<template>
  <div>
    <form @submit.prevent="uploadFile" enctype="multipart/form-data">
      <label for="file">选择文件:</label>
      <input style="margin-left: 20px;" type="file" id="file" ref="fileInput" accept=".pdf, .xlsx, .jpg" required>
      <label for="competition">竞赛名称:</label>
      <input style="margin-left: 20px;" type="text" v-model="competition" required>
      <button style="margin-left: 20px;" type="submit">上传文件</button>
    </form>
  </div>
</template>
  
<script>
import {uploadFile} from '@/api/competition'
export default {
  data() {
    return {
      competition: '',
      uploadResult: null,
    };
  },
  methods: {
    uploadFile() {
      const formData = new FormData();
      const fileInput = this.$refs.fileInput;
      const selectedFile = fileInput.files[0];
      if (selectedFile) {
        uploadFile(selectedFile, this.competition)
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
        // // 执行上传逻辑
        // formData.append('file', fileInput.files[0]);
        // formData.append('competition', this.competition);

        // // 拼接完整的后端接口地址
        // const backendUrl = 'http://127.0.0.1:8085/competition/uploadFile';

        // // 使用Vue Resource发送POST请求
        // this.$http.post(backendUrl, formData)
        //   .then(response => {
        //     this.uploadResult = response.data;
        //     console.log('上传结果:', this.uploadResult);

        //     // 根据后端返回的数据进行处理
        //     if (this.uploadResult.code === 1) {
        //       // 文件为空，进行相应的提示或处理
        //       alert(this.uploadResult.message);
        //     } else {
        //       // 处理上传成功的逻辑
        //     }
        //   })
        //   .catch(error => {
        //     console.error('上传失败:', error);
        //     // 处理上传失败的逻辑
        //   });
      } else {
        alert('请选择文件');
      }

    },
  },
};
</script>
  
<style scoped>
/* 添加样式（可选） */
</style>
  