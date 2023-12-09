<template>
    <div>
        <el-upload class="upload-demo" drag name="image" action="https://jsonplaceholder.typicode.com/posts/" multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload_text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload_tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>
<script>
export default {
    name: "ImgUpload",
    props: [],
    data() {
        return{};
    },
    methods:{},
};
</script>
<style lang="less" scoped></style>