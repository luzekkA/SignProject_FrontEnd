<template>
  <div class="register">
    <el-page-header @back="$router.back()" content="添加随行人员" class="left-align"></el-page-header>
    <el-form style="width: 600px; margin-top: 20px" :model="registerForm" :rules="rules" ref="registerForm"
      label-width="100px">
      <!-- <el-form-item label="身份证号" prop="id">
          <el-input v-model="registerForm.id"></el-input>
        </el-form-item> -->
      <el-form-item label="姓名" prop="name">
        <el-input v-model="registerForm.name"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="registerForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="选择身份" prop="role">
        <RoleSelect v-model="registerForm.role"></RoleSelect>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('registerForm')">提交</el-button>
        <el-button @click="resetForm('registerForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
    
<script>
import { mapState } from 'vuex'
import RoleSelect from "./components/RoleSelect.vue";
import { addEntourage } from "@/api/team"
export default {
  name: "register",
  props: [],
  components: {
    RoleSelect
  },
  computed: {
    ...mapState("user", ['currentTeamId'])
  },
  data() {
    return {
      registerForm: {
        team:"",
        name: "",
        phone: "",
        role: ""
      },
      rules: {
        // id: [
        //   { required: true, message: "请输入身份证号", trigger: "blur" },
        //   {
        //     pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
        //     message: "请输入正确的身份证信息",
        //     trigger: "blur",
        //   },
        // ],
        // 对name这个字段进行校验
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
        ],
        phone: [
          { required: true, message: "请输入电话", trigger: "blur" },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "请输入正确的电话号码",
            trigger: "blur",
          },
        ],
        role: [
          { required: true, message: "请选择角色", trigger: "change" },
        ]

      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.registerForm.team = this.currentTeamId;
          let data = { ...this.registerForm  }
          console.log(data);
          addEntourage(data).then((res) => {
            if (res.code == 20000) {
              this.$message({
                message: '随行人员注册成功',
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
.register {
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