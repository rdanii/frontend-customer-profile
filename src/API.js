const API = {
  // baseURL: 'http://localhost:5002',
  baseURL: 'http://167.172.73.163:5002',

  //endpoint
  login: {
    method: 'post',
    url: '/login',
  },
  userlist: {
    method: 'get',
    url: '/users',
  },
  userdetail: {
    method: 'get',
    url: '/user/{id}',
  },
  createuser: {
    method: 'post',
    url: '/user',
  },
}

export default API
