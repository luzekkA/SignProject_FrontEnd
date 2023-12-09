<template>
    <div class="infoform">
        <el-page-header @back="$router.back()" content="编辑用户个人信息" class="left-align"></el-page-header>
        <el-form style="width: 600px; margin-top: 20px" :model="infoForm" :rules="rules" ref="infoForm" label-width="100px">
            <el-form-item label="身份证号" prop="id">
                <el-input v-model="infoForm.id"></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="name">
                <el-input v-model="infoForm.name"></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="phone">
                <el-input v-model="infoForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="选择身份" prop="roles">
                <RoleSelect v-model="infoForm.roles"></RoleSelect>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('infoForm')">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
    
<script>
import { mapState } from 'vuex'
import RoleSelect from "./components/RoleSelect.vue";
import { getInfo,edit } from "@/api/user"
export default {
    name: "info",
    props: [],
    components: {
        RoleSelect
    },
    computed: {
    ...mapState({
      user: state => state.user
    })
    },
    mounted(){
        getInfo(this.user.token).then(res=>{
            this.infoForm={
                id: res.data.id,
                name: res.data.username,
                phone: res.data.phone,
                roles: res.data.roles[0],
            }
        })
    },
    data() {
        return {
            infoForm: {
                id: "",
                name: "",
                phone: "",
                roles: "",
            },
            rules: {
                id: [
                    { required: true, message: "请输入身份证号", trigger: "blur" },
                    {
                        pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
                        message: "请输入正确的身份证信息",
                        trigger: "blur",
                    },
                ],
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
                
                roles: [
                    { required: true, message: "请选择角色", trigger: "change" },
                ],
            },
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let data = { ...this.infoForm }
                    edit(data).then((res) => {
                        if (res.code == 20000) {
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
.infoform {
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