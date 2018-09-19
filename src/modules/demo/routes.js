/*eslint-disable*/
// 异步引入
import Home from '@/modules/demo/home'
import About from '@/modules/demo/about'
import Req from '@/modules/demo/request'
import Theme from '@/modules/demo/theme'
import Data from '@/modules/demo/data'
import FormDemo from '@/modules/demo/form'
import Flex from '@/modules/demo/flex'
// 正常引入
import PanelLeft from './leftRight/panel-left.vue'
import PanelRight from './leftRight/panel-right.vue'

export default [
    {
        path: '/',
        async: Home
    },
    {
        path: '/about',
        async: About
    },
    {
        path: '/about/:id',
        name: 'about',
        async: About
    },
    {
        path: '/about/:id',
        async: About
    },
    {
        path: '/request',
        async: Req
    },
    {
        path: '/theme',
        async: Theme
    },
    {
        path: '/data',
        async: Data
    },
    {
        path: '/form',
        async: FormDemo
    },
    {
        path: '/flex',
        async: Flex
    },
    {
        path: '/panel-left/',
        component: PanelLeft,
    },
    {
        path: '/panel-right/',
        component: PanelRight,
    },
    {
        path: '/panel-right-1/',
        content: `
      <div class="page">
        <div class="navbar">
          <div class="navbar-inner sliding">
            <div class="left">
              <a href="#" class="link back">
                <i class="icon icon-back"></i>
                <span class="ios-only">Back</span>
              </a>
            </div>
            <div class="title">Panel Page 1</div>
          </div>
        </div>
        <div class="page-content">
          <div class="block">
            <p>This is a right panel page 1</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>
          </div>
        </div>
      </div>
    `,
    },
    {
        path: '/panel-right-2/',
        content: `
      <div class="page">
        <div class="navbar">
          <div class="navbar-inner sliding">
            <div class="left">
              <a href="#" class="link back">
                <i class="icon icon-back"></i>
                <span class="ios-only">Back</span>
              </a>
            </div>
            <div class="title">Panel Page 2</div>
          </div>
        </div>
        <div class="page-content">
          <div class="block">
            <p>This is a right panel page 2</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>
          </div>
        </div>
      </div>
    `,
    },
]
