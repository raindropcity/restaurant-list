// /routes/index.js這支檔案為「總路由」，用來整合各種頁面、功能所需的路由分支。

const express = require('express')
// Express中專門用於設定路由器的方法
const router = express.Router()
// 引用/routes/modules/home.js中所設定的「首頁」路由
const home = require('./modules/home')
// 引用/routes/modules/todos.js中所設定的「CRUD」路由
const CRUD = require('./modules/CRUD')

router.use('/', home)
// 這邊設定的「/restaurants/lists」叫做前綴詞，在引用/routes/modules/CRUD.js時，會將此「/restaurants/lists」串在各個CRUD的路由前面。
// 例如Create功能在CRUD.js中設定的路由是「/new」，實際上點下去URL會變成「/restaurants/lists/new」
router.use('/restaurants', CRUD)

// 匯出路由器給app.js去引用
module.exports = router