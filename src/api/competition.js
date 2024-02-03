import request from '@/utils/request'
//获取所有比赛
export function getCompetition() {
  return request({
    url: '/competition/selectAll',
    method: 'get',
  })
}
//创建比赛
export function createCompetition(competition) {
    return request({
      url: '/competition/create',
      method: 'post',
      data:competition
    })
}
//获取比赛分数
//未使用
export function getScore() {
  return request({
    url: '/competition/getScore',
    method: 'get',
  })
}
//上传比赛文件
export function uploadFile(file,competition) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('competition', competition);
  return request({
    url: '/competition/info',
    method: 'post',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
//用于获取比赛类型
export function getType() {
  return request({
      url: '/competition/getCategory',
      method: 'get',
  })
}
// //用于下载excel
// //未使用
// export function getExcel(competition) {
//   return request({
//       url: '/competition/download',
//       method: 'get',
//       responseType:'blob',
//       params:{competition}
//   })
// }