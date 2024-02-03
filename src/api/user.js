import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
export function getRoleList() {
  return request({
      url: '/user/rolelist',
      method: 'get',
  })
}
export function register(data){
  return request({
    url:'user/register',
    method:'post',
    data 
  })
}
export function edit(data){
  return request({
    url:'user/edit',
    method:'post',
    data
  })
}
//上传一寸照
export function uploadFile(file,token) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('token', token);
  // formData.append('token', token);
  return request({
    url: '/user/ico',
    method: 'post', 
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  })
}