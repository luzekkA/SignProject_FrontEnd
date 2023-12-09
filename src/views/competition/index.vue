<template>
    <div class="Competition">
        <!-- 表格 -->
        <el-table :data="list" border style="width: 100%; margin-top: 20px">
            <el-table-column prop="id" label="比赛名" align="center" sortable>
                <template slot-scope="{ row }">
                    <div>{{ row.name }}</div>
                </template>
            </el-table-column>
            <el-table-column prop="id" label="比赛简介" align="center" sortable>
                <template slot-scope="{ row }">
                    <div>{{ row.information }}</div>
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
import { getCompetition } from '@/api/competition';
export default {
    name: "team",
    props: [],
    data() {
        return {
            input: '',
            list: [
            ],
        };
    },
    mounted() {
        getCompetition().then(res=>{
            this.list = res.data
        })
    },
    methods: {
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