
<template>
    <div class="Competition">
        <!-- 文件上传 -->
        <file-upload v-if="user.roles[0] == 'admin' || user.roles[0] == 'leader'" style="margin-top: 20px; margin-left: 20px;"></file-upload>
        <!-- 表格下载 -->
        <el-input v-if="user.roles[0] == 'admin' || user.roles[0] == 'leader'" style="width: 200px; margin-left: 20px; margin-top:20px;" v-model="input" placeholder="请输入比赛名称"></el-input>
        <el-button v-if="user.roles[0] == 'admin' || user.roles[0] == 'leader'" style=" margin-left: 20px; margin-top:20px;" @click="getExcel()">下载比赛Excel</el-button>
        <el-input v-if="user.roles[0] == 'admin' || user.roles[0] == 'leader'" style="width: 200px; margin-left: 50px; margin-top:20px;" v-model="input2" placeholder="请输入队伍id"></el-input>
        <el-button v-if="user.roles[0] == 'admin' || user.roles[0] == 'leader'" style=" margin-left: 20px; margin-top:20px;" @click="getExcel2()">下载队伍Excel</el-button>

        <!-- 表格 -->
        <el-table :data="list" border style="width: 100%; margin-top: 20px">
            <el-table-column prop="id" label="比赛类型" align="center" sortable>
                <template slot-scope="{ row }">
                    <div>{{ row.category }}</div>
                </template>
            </el-table-column>
            <el-table-column prop="id" label="比赛名称" align="center" sortable>
                <template slot-scope="{ row }">
                    <div>{{ row.name }}</div>
                </template>
            </el-table-column>
            <el-table-column prop="id" label="比赛简介" align="center" sortable>
                <template slot-scope="{ row }">
                    <el-button @click="openLink(row)">比赛文件</el-button>
                    <!-- <div>{{ row.information }}</div> -->
                </template>
            </el-table-column>
            <el-table-column prop="id" label="是否进行" align="center" sortable>
                <template slot-scope="{ row }">
                    <div>{{ row.state }}</div>
                </template>
            </el-table-column>
            <!-- <el-table-column label="操作" align="center">
                <template slot-scope="{ row }">
                    <el-button type="primary" size="mini">详情</el-button>
                </template>
            </el-table-column> -->

        </el-table>
    </div>
</template>
  
<script>
import { getCompetition} from '@/api/competition';
import { mapState} from 'vuex'
import axios from 'axios';
import { saveAs } from 'file-saver';
import FileUpload from './components/FileUpload.vue';
export default {
    name: "team",
    props: [],
    components: {
        FileUpload,
    },
    computed: {
        ...mapState({
            user: state => state.user
        }),
    },
    data() {
        return {
            input: '',
            input2: '',
            list: [
            ],
        };
    },
    mounted() {
        getCompetition().then(res => {
            this.list = res.data
        })
    },
    methods: {
        openLink(row) {
            window.open(row.information, '_blank');
        },
        getExcel() {
            // getExcel(this.input).then((response) => {
            //     const blob = new Blob([response.data], { type: 'application/vnd.ms-excel' });
            //     saveAs(blob, `${this.input}.xlsx`);
            // });
            axios({
                url: 'http://127.0.0.1:8085/competition/download',
                method: 'GET',
                responseType: 'blob', // Important
                params: {
                    competition: this.input
                }
            }).then((response) => {
                const blob = new Blob([response.data], { type: 'application/vnd.ms-excel' });
                saveAs(blob, `${this.input}.xlsx`);
            });
        },
        getExcel2() {
            // getExcel(this.input).then((response) => {
            //     const blob = new Blob([response.data], { type: 'application/vnd.ms-excel' });
            //     saveAs(blob, `${this.input}.xlsx`);
            // });
            axios({
                url: 'http://127.0.0.1:8085/team/download',
                method: 'GET',
                responseType: 'blob', // Important
                params: {
                    team: this.input2
                }
            }).then((response) => {
                const blob = new Blob([response.data], { type: 'application/vnd.ms-excel' });
                saveAs(blob, `${this.input2}.xlsx`);
            });
        }
    }
};
</script>
  
  <!-- scss -->
<style lang="scss" scoped>
.Competition {
    padding: 20px;
    box-sizing: border-box;
}
</style>