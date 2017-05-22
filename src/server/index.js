import {axios} from '@/utils'

function getSceneInfo (id) {
  return axios({
    url: '/api/getSceneInfo',
    params: {
      sceneId: id
    }
  })
}

export {
  getSceneInfo
}
