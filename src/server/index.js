import {axios} from '@/utils'

function getSceneInfo (id) {
  let params = Object.assign({},{},{
    sceneId: id
  })
  return axios('/api/getSceneInfo', params)
}

export {
  getSceneInfo
}
