import {axios} from '@/utils'

function getSceneInfo(id){
  return axios('/api/getSceneInfo', {
    sceneId: id
  })
}

export {
  getSceneInfo
}
