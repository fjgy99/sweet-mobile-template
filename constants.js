/**
 * 存放项目常量
 * Created by zdliu on 2018/4/3.
 */
module.exports = {
    /**
     * 设置多个代理接口前缀,只能设置ip/域名+端口号,其他路径无用，必须写在ajax处
     * 设置的 key匹配加载 相应接口前面，匹配到后会自动replace掉key
     * 例: '/api':'http://restapi.com' 调用 '/api/comm/getUser'
     * 最后匹配生成 'http://restapi.com/comm/getUser'
     * 如果本身接口含'/api' 则应该这样写 '/api/api/*'
     * 如果存在多个代理 请按 /api/a 、/api/b 等形式设置
     * 所有ajax接口配置的proxy前缀只在开发环境起作用，生产环境会自动忽略。接口请求必须设置前缀匹配
     * 接口代理key必须以 '/api' 开头！！！
     * 如果是非接口请求设置真实路径作为key(一般很少)
     * 例: '/captcha': 'http://10.86.96.242:19950', 调用 <img src="/captcha?v=1527643456560"/>
     * 最后会代理到 'http://10.86.96.242:19950/captcha?v=1527643456560'
     */
    proxy: {
        '/api': 'http://10.86.96.242:19950',
        '/captcha': 'http://10.86.96.242:19950',
    },
    /**
     * 根据环境变量(process.env.SWEET_ENV,可用其他的)的值 获取对应的 definePlugin对象，设置环境变量值
     * process.env.SWEET_ENV 在 package.json 命令上设置  例：cross-env SWEET_ENV=production
     * 主要是为了不熟不同生产环境需要不同的值这类业务需求。
     * 下面是demo
     */
    definePlugin: {
        development: {
            VUE_ENV: JSON.stringify('src'),
        },
        production: {
            VUE_ENV: JSON.stringify('client'),
        },
    },
    /**
     * framework7常量
     */
    framework7config: {
        target: 'universal',
        rtl: false,
        components: [
            // Modals
            'dialog',
            'popup',
            'login-screen',
            'popover',
            'actions',
            'sheet',
            'toast',

            // Loaders
            'preloader',
            'progressbar',

            // List Components
            'sortable',
            'swipeout',
            'accordion',
            'contacts-list',
            'virtual-list',

            // Timeline
            'timeline',

            // Tabs
            'tabs',

            // Panel
            'panel',

            // Card
            'card',

            // Chip
            'chip',

            // Form Components
            'form',
            'input',
            'checkbox',
            'radio',
            'toggle',
            'range',
            'smart-select',

            // Grid
            'grid',

            // Pickers
            'calendar',
            'picker',

            // Page Components
            'infinite-scroll',
            'pull-to-refresh',
            'lazy',

            // Data table
            'data-table',

            // FAB
            'fab',

            // Searchbar
            'searchbar',

            // Messages
            'messages',
            'messagebar',

            // Swiper
            'swiper',

            // Photo Browser
            'photo-browser',

            // Notifications
            'notification',

            // Autocomplete
            'autocomplete',

            // VI Video Ads
            'vi',

            // Typography
            'typography'
        ],
        darkTheme: true,
        themes: ['ios', 'md'],
        ios: {
            themeColor: '#007aff',
            colors: {
                red: '#ff3b30',
                green: '#4cd964',
                blue: '#007aff',
                pink: '#ff2d55',
                yellow: '#ffcc00',
                orange: '#ff9500',
                gray: '#8e8e93',
                white: '#ffffff',
                black: '#000000',
                // purple: '#5856d6',
                // deeppurple: '#673ab7',
                // indigo: '#3f51b5',
                // lightblue: '#5ac8fa',
                // cyan: '#00bcd4',
                // teal: '#009688',
                // lightgreen: '#8bc34a',
                // lime: '#cddc39',
                // amber: '#ffc107',
                // deeporange: '#ff5722',
                // brown: '#795548',
                // bluegray: '#607d8b',
            }
        },
        md: {
            themeColor: '#2196f3',
            colors: {
                red: '#f44336',
                green: '#4caf50',
                blue: '#2196f3',
                pink: '#e91e63',
                yellow: '#ffeb3b',
                orange: '#ff9800',
                gray: '#9e9e9e',
                white: '#ffffff',
                black: '#000000',
                // purple: '#9c27b0',
                // deeppurple: '#673ab7',
                // indigo: '#3f51b5',
                // lightblue: '#03a9f4',
                // cyan: '#00bcd4',
                // teal: '#009688',
                // lightgreen: '#8bc34a',
                // lime: '#cddc39',
                // amber: '#ffc107',
                // deeporange: '#ff5722',
                // brown: '#795548',
                // bluegray: '#607d8b',
            }
        }
    },
}
