<template>
  <div class="create">
    <el-page-header @back="$router.back()" content="新建赛事" class="left-align"></el-page-header>
    <el-form style="width: 600px; margin-top: 20px" :model="createForm" :rules="rules" ref="createForm" label-width="100px">
      <el-form-item label="赛事名" prop="name">
        <el-input v-model="createForm.name"></el-input>
      </el-form-item>
      <el-form-item label="赛事简介" prop="information">
        <el-input v-model="createForm.information"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('createForm')">提交</el-button>
        <el-button @click="resetForm('createForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
  
<script>

import { createCompetition } from '@/api/competition';
export default {
  name: "create",
  props: [],
  data() {
    return {
      createForm: {
        name: "",
        information:"",
        state: true
      },
      rules: {

        // 对name这个字段进行校验
        name: [
          { required: true, message: "请输入赛事名", trigger: "blur" },
        ],
        information: [
          { required: true, message: "请输入赛事简介", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = { ...this.createForm }
          createCompetition(data).then((res) => {
            if (res.code==20000) {
              this.$message({
                message: '用户注册成功',
                type: "success",
                duration: 1500,
                onClose: () => {
                  this.$router.back();
                }
              });
            }
            else {
              console.log("error submit!!");
              return false;
            }
          });
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
  
<style lang="scss" scoped>
.create {
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* Align items vertically */
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.left-align {
  justify-content: left;
  align-items: left;
}
</style>