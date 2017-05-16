function Mock(app){
  app.get('/getSceneInfo',function(req,res){
    let sceneId = req.query.sceneId
    res.json({
      status: 0,
      message: '数据请求成功，请查看data字段',
      data: {
        sceneName: '西餐厅偶遇',
        sceneId: sceneId
      }
    })
  })
}
module.exports = Mock