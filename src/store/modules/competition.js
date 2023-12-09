
import { getCompetition } from '@/api/competition'

const state = {
    competitionList: []
}

const mutations = {
    SET_COMPETITIONLIST: (state, competitionList) => {
        state.competitionList = competitionList
    }
}

const actions = {
    // //用户注册
    // getRole({ commit }) {
    //     getRoleList().then(res => {
    //         console.log(res);
    //         if (res.data) {
    //             commit("set_roleList", res.data)
    //         }
    //     })
    // },
    getCompetitionList({commit}){
        getCompetition().then(res=>{
            if(res.data){
                console.log(res.data);
                commit("SET_COMPETITIONLIST",res.data)
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
