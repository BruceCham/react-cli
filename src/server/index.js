import { axios } from 'utils'

function getSceneInfo(id) {
  return axios({
    url: '/webapi/assignment/stu/paper',
    params: {
      sceneId: id,
    },
  }).then(res => res).catch(err => err)
}

function proxyGithubApi() {
  return axios({
    url: '/webapi/github/users/ikcamp',
  }).then(res => res).catch(err => err)
}

export { getSceneInfo, proxyGithubApi }
