const About = (routeTo, routeFrom, resolve, reject) => {
    import('@/modules/demo/about/index.vue').then(res => {
        resolve({ component: res.default }, { history: true });
    });
};
export default About;
