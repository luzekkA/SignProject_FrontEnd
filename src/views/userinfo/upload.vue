<template>
  <h1>Vue Image Upload</h1>

  <div
    class="dropzone"
    @dragover.prevent
    @dragenter.prevent
    @dragstart.prevent
    @drop.prevent="handleFileChange($event.dataTransfer)"
  >
    <input
      id="file-input"
      type="file"
      accept="image/png, image/jpeg"
      @change="handleFileChange($event.target)"
      required
    />
    <h2 for="file-input">Click or Drag N Drop Image</h2>
    <img v-bind:src="preview" />
    <h3 v-if="preview">File name: {{ fileName }}</h3>
  </div>

  <button type="submit" v-on:click="upload">Upload</button>
</template>

<script>
export default {
  name: "upload",
  data() {
    return {
      fileName: "",
      preview: null,
      preset: process.env.VUE_APP_UPLOAD_PRESET,
      formData: null,
      cloudName: process.env.VUE_APP_CLOUD_NAME,
      success: "",
    };
  },
  methods: {
    handleFileChange: function (event) {
      this.file = event.files[0];
      this.fileName = this.file.name;

      this.formData = new FormData();
      this.formData.append("upload_preset", this.preset);

      let reader = new FileReader();
      reader.readAsDataURL(this.file);

      reader.onload = (e) => {
        this.preview = e.target.result;
        this.formData.append("file", this.preview);
      };
    },
  },
};
</script>
