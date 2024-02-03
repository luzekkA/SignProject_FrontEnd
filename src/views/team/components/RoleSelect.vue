<!-- 随行人员角色选择 -->
<template>
    <el-select :value="value" placeholder="请选择" @change="$emit('input', $event)">
        <el-option v-for="item in roleList" :key="item" :label="item" :value="item">
        </el-option>
    </el-select>
</template>
<script>
// import { mapActions, mapState } from "vuex"
export default {
    name: "RoleSelect",
    props: {
        value: {
            type: String,
            default: "",
        }
    },
    data() {
        return {
            roleList:['doctor','family','other']
        };
    },
    created() {
        // this.getRole();
    },
    computed: {
        // ...mapState({
        //     roleList: state => state.user.roleList
        // })
        // ...mapState("user",['roleList'])
    },
    methods: {
        // ...mapActions("user", ["getRole"]),
    }
}
</script>