<template>
    <div class="good-list">
        <el-input v-model="joinTeamViewModel.invitation" style="width: 500px" placeholder="请输入队伍邀请码"></el-input>
        <el-button type="primary" style="margin-left: 20px" @click="handleJoin(joinTeamViewModel)">加入队伍</el-button>
        <!-- 表格 -->
        <el-table :data="list" border style="width: 100%; margin-top: 20px">
            <el-table-column  label="队伍id" align="center" sortable>
                <template slot-scope="{ row }">
                    <div>{{ row.id }}</div>
                </template>
            </el-table-column>
            <el-table-column  label="队名" align="center" sortable>
                <template slot-scope="{ row }">
                    <div>{{ row.name }}</div>
                </template>
            </el-table-column>
            <el-table-column  label="教练员" align="center">
                <template slot-scope="{ row }">
                    <div>{{ row.leader }}</div>
                </template>
            </el-table-column>
            <el-table-column  label="邀请码" align="center">
                <template slot-scope="{ row }">
                    <div>{{ row.invitation }}</div>
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="{ row }">
                    <!-- <router-link to="/team/info"> -->
                    <router-link :to="{ path: '/team/info', query: { teamId: row.id } }" @click.native="setCurrentTeamId(row.id)">
                        <el-button class="thirdparty-button" type="primary">
                            队伍详情
                        </el-button>
                    </router-link>
                </template>

            </el-table-column>
        </el-table>
    </div>
</template>
  
<script>
import { mapState,mapActions } from 'vuex'
import { getInfo } from "@/api/user"
import { getTeam, joinTeam } from "@/api/team"
export default {
    name: "team",
    props: [],
    data() {
        return {
            joinTeamViewModel: {
                userId: "",
                invitation: ""
            },
            list: [
            ],
        };
    },
    computed: {
        ...mapState({
            user: state => state.user
        }),
    },
    mounted() {
        getInfo(this.user.token).then(res => {
            this.joinTeamViewModel.userId = res.data.id
        })
        getTeam().then(res => {
            this.list = res.data
        })
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
        handleJoin(joinTeamViewModel) {
            joinTeam(joinTeamViewModel).then(res => {
                if (res.code != 2000) {
                    this.$message({
                        message: '加入成功',
                        type: 'success'
                    });
                    location.reload();
                }
                else {
                    this.$message.error('加入失败');
                    location.reload();
                }
            })
        },
        ...mapActions("user", ["setCurrentTeamId"]),
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