import request from '@/utils/request'

export function getTeam() {
  return request({
    url: '/team/getteam',
    method: 'get',
  })
}
export function getTeamByUser() {
  return request({
    url: '/team/getteam',
    method: 'get',
  })
}

export function quitTeam(team) {
    return request({
      url: '/team/quitteam',
      method: 'delete',
      params:{team}
    })
}

export function quitTeamById(team,id){
  return request({
    url:'/team/deleteuser',
    method:'delete',
    params:{team,id}
  })
}

export function quitTeamByPhone(team,phone){
  return request({
    url:'/team/deleteOther',
    method:'delete',
    params:{team,phone}
  })
}

export function joinTeam(team) {
    return request({
      url: '/team/join',
      method: 'post',
      data:team
    })
}

export function createTeam(team){
  return request({
    url: '/team/create',
    method: 'post',
    data:team
  })

}
export function getTeamMember(team){
  return request({
    url: '/team/getuser',
    method: 'get',
    params:{team}
  })
}

export function getEntourage(team){
  return request({
    url: '/team/showOther',
    method: 'get',
    params:{team}
  })
}

export function addEntourage(entourage){
  return request({
    url: '/team/addOther',
    method: 'post',
    data:entourage
  })
}