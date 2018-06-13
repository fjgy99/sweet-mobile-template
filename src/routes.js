import Home from '@/modules/demo/home'
import About from '@/modules/demo/about'
import Req from '@/modules/demo/request'
import Theme from '@/modules/demo/theme'
import Data from '@/modules/demo/data'
import FormDemo from '@/modules/demo/form'
import Flex from '@/modules/demo/flex'

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
]
