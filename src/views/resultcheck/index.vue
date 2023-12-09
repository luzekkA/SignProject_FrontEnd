<template>
  <div class="good-list">
    <!-- 表格 -->
    <el-table :data="list" border style="width: 100%; margin-top: 20px">
      <el-table-column prop="id" label="姓名" align="center" sortable>
        <template slot-scope="{ row }">
          <div>{{ row.user }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="队伍" align="center">
        <template slot-scope="{ row }">
          <div>{{ row.team }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="比赛" align="center">
        <template slot-scope="{ row }">
          <div>{{ row.competition }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="成绩" align="center">
        <template slot-scope="{ row }">
          <div>{{ row.score }}</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getScore } from '@/api/competition';
export default {
  name: "team",
  props: [],
  data() {
    return {
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
    getScore().then(res => {
      this.list = res.data
    })
  },
  methods: {
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