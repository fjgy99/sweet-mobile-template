import Home from '@/modules/demo/home';
import About from '@/modules/demo/about';
import Req from '@/modules/demo/request';

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
    }
];

