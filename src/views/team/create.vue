<template>
  <div class="create">
    <el-page-header @back="$router.back()" content="创建队伍" class="left-align"></el-page-header>
    <el-form style="width: 600px; margin-top: 20px" :model="createForm" :rules="rules" ref="createForm"
      label-width="100px">
      <el-form-item label="队伍名" prop="name">
        <el-input v-model="createForm.name"></el-input>
      </el-form-item>
      <el-form-item label="领队" prop="leader">
        <el-input v-model="createForm.leader"></el-input>
      </el-form-item>
      <el-form-item label="选择赛事" >
        <CompetitionSelect v-model="createForm.competition"></CompetitionSelect>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('createForm')">提交</el-button>
        <el-button @click="resetForm('createForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
    
<script>
import CompetitionSelect from "./components/CompetitionSelect.vue"
import { createTeam } from "@/api/team"
export default {
  name: "create",
  props: [],
  components: {
    CompetitionSelect
  },
  data() {
    return {
      createForm: {
        id: "",
        name: "",
        leader: "",
        invitation: "",
        competition: ""
      },
      rules: {
        // 对name这个字段进行校验
        name: [
          { required: true, message: "请输入队伍名", trigger: "blur" },
        ],
        leader: [
          { required: true, message: "请输入教练名", trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = { ...this.createForm }
          createTeam(data).then((res) => {
            if (res.code == 20000) {
              this.$message({
                message: '队伍创建成功',
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