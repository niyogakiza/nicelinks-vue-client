import NotFound from 'partials/NotFound'
import routesMap from './routers'

let commonConf = [{
  path: '/login',
  alias: '/register',
  meta: {
    ignoreAuth: true
  },
  component: resolve => require(['partials/Login'], resolve)
}, {
  path: '/index',
  redirect: '/'
}, {
  path: '*',
  meta: {
  },
  component: NotFound
}]

export default routesMap.concat(commonConf)
