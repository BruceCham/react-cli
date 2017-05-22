import {axios} from '@/utils'

function getSceneInfo (id) {
  return axios.get('/api/getSceneInfo', {
    params: {
      sceneId: id
    }
  })
}

export {
  getSceneInfo
}
