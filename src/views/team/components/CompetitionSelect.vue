<template>
    <el-select :value="value" placeholder="请选择" @change="$emit('input', $event)">
        <el-option v-for="item in competitionList" :key="item.name" :label="item.name" :value="item.name">
        </el-option>
    </el-select>
</template>
<script>
import { mapActions, mapState } from "vuex"
export default {
    name: "CompetitionSelect",
    props: {
        value: {
            type: String,
            default: "",
        }
    },
    data() {
        return {
        };
    },
    created() {
        this.getCompetitionList();
    },
    computed: {
        // ...mapState({
        //     roleList: state => state.user.roleList
        // })
        ...mapState("competition",['competitionList'])
    },
    methods: {
        ...mapActions("competition", ["getCompetitionList"]),
    }
}
</script>