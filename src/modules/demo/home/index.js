const Home = (routeTo, routeFrom, resolve, reject) => {
    import('./index.vue').then(res => {
        resolve({ component: res.default });
    });
};
export default Home;
