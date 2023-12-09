<template>
    <div class="good-list">
        <el-button type="primary"  @click="handleQuit()">退出队伍</el-button>
        <el-table :data="list" border style="width: 100%; margin-top: 20px">
            <el-table-column label="队员姓名" align="center" sortable>
                <template slot-scope="{ row }">
                    <div>{{ row.user }}</div>
                </template>
            </el-table-column>
            <el-table-column label="队员身份" align="center">
                <template slot-scope="{ row }">
                    <div>{{ row.role }}</div>
                </template>
            </el-table-column>
        </el-table>
        
    </div>
</template>
  
<script>
import { mapState } from 'vuex'
import { quitTeam,getTeamMember } from "@/api/team"
export default {
    name: "team",
    props: [],
    data() {
        return {
            teamId:'',
            list: [
            ],
        };
    },
    computed: {
        ...mapState({
            user: state => state.user
        })
    },
    mounted() {
        // this.teamid = this.$route.query.teamId
        // this.teamId = this.$route.query.teamId;
        getTeamMember(this.teamId).then(res => {
            this.list = res.data
        })
    },
    created(){
        this.teamId = this.$route.query.teamId;
        console.log(this.teamId)
    },
    methods: {
        // handleDelete(row) {
        //     const index = this.list.indexOf(row);
        //     if (index !== -1) {
        //         quitTeam(row.id).then(res => {
        //             if (res.code != 2000) {
        //                 this.$message({
        //                     message: '退出成功',
        //                     type: 'success'
        //                 });
        //                 this.list.splice(index, 1);
        //             }
        //             else {
        //                 this.$message.error('退出失败');
        //             }
        //         })
        //     }
        // },
        handleQuit() {
            quitTeam(this.teamId).then(res => {
                if (res.code != 2000) {
                    this.$message({
                        message: '队伍退出成功',
                        type: 'success'
                    });
                    this.$router.push('/team/index');
                    location.reload();
                }
                else {
                    this.$message.error('队伍退出失败');
                    location.reload();
                }
            })
        }
    },
};
</script>
  
  <!-- scss -->
<style lang="scss" scoped>
.good-list {
    padding: 20px;
    box-sizing: border-box;
}
</style>