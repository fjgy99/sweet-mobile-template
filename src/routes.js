/**
 * 路由推荐在模块内创建，然后汇总在这合并
 */

import demoRoutes from './modules/demo/routes'

export default [].concat(demoRoutes)
