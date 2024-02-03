
import { getCompetition } from '@/api/competition'
import {getType} from '@/api/competition'
const state = {
    competitionList: [],
    typeList: []
}

const mutations = {
    SET_COMPETITIONLIST: (state, competitionList) => {
        state.competitionList = competitionList
    },
    SET_TYPELIST:(state, list)=> {
        state.typeList = list
    }
}

const actions = {
    //创建队伍时使用的
    getCompetitionList({ commit }) {
        getCompetition().then(res => {
            if (res.data) {
                console.log(res.data);
                commit("SET_COMPETITIONLIST", res.data)
            }
        })
    },
    //获取类型列表
    getTypeList({ commit }) {
        getType().then(res => {
            console.log(res);
            if (res.data) {
                commit("SET_TYPELIST", res.data)
            }
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
