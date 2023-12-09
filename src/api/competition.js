import request from '@/utils/request'

export function getCompetition() {
  return request({
    url: '/competition/selectAll',
    method: 'get',
  })
}

export function createCompetition(competition) {
    return request({
      url: '/competition/create',
      method: 'post',
      data:competition
    })
}

export function getScore() {
  return request({
    url: '/competition/getScore',
    method: 'get',
  })
}


