<template>
    <div class="gamer-list">
        <el-button type="danger" @click="handleQuit()">退出此队伍</el-button>
        <router-link :to="{ path: '/team/entourage' }" v-if="user.roles[0] == 'admin' || user.roles[0] == 'leader'">
            <el-button class="thirdparty-button" type="primary" style="margin-left: 20px;">
                添加随行人员
            </el-button>
        </router-link>
        <!-- <router-link to="/register">
            <el-button type="" style="margin-left: 20px;">添加随行人员</el-button>
        </router-link> -->
        <div style="margin-top: 20px;">参赛人员列表</div>
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
            <el-table-column label="队员电话" align="center">
                <template slot-scope="{ row }">
                    <div>{{ row.phone }}</div>
                </template>
            </el-table-column>
            <el-table-column v-if="user.roles[0] == 'admin' || user.roles[0] == 'leader'" label="管理员操作" align="center">
                <template slot-scope="{ row }">
                    <!-- <div>{{ row.phone }}</div> -->
                    <el-button type="danger" @click="handleGamerQuit(row.id)">退出队伍</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- <el-button type="" style="margin-left: 20px; margin-top: 20px;">添加随行人员</el-button> -->
        <div style="margin-top: 20px;">随行人员列表</div>
        <el-table :data="Entourage" border style="width: 100%; margin-top: 20px">
            <el-table-column label="人员姓名" align="center" sortable>
                <template slot-scope="{ row }">
                    <div>{{ row.name }}</div>
                </template>
            </el-table-column>
            <el-table-column label="人员身份" align="center">
                <template slot-scope="{ row }">
                    <div>{{ row.role }}</div>
                </template>
            </el-table-column>
            <el-table-column label="电话" align="center">
                <template slot-scope="{ row }">
                    <div>{{ row.phone }}</div>
                </template>
            </el-table-column>
            <el-table-column v-if="user.roles[0] === 'admin' || user.roles[0] === 'leader'" label="管理员操作" align="center">
                <template slot-scope="{ row }">
                    <!-- <div>{{ row.phone }}</div> -->
                    <el-button type="danger" @click="handleOtherQuit(row.phone)">退出队伍</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
  
<script>
import { mapState } from 'vuex'
import { quitTeam, getTeamMember, quitTeamByPhone, quitTeamById,getEntourage } from "@/api/team"
export default {
    name: "team",
    props: [],
    data() {
        return {
            teamId: '',
            list: [
            ],
            Entourage: [{ name: 'testname', role: 'testrole', phone: '11111' }]
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
        }),
        getEntourage(this.teamId).then(res => {
            this.Entourage = res.data
        })

    },
    created() {
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
        },
        handleOtherQuit(phone) {
            quitTeamByPhone(this.teamId, phone).then(res => {
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
        },
        handleGamerQuit(id) {
            console.log(id);
            quitTeamById(this.teamId, id).then(res => {
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
.gamer-list {
    padding: 20px;
    box-sizing: border-box;
}
</style>