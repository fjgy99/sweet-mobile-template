const Form = (routeTo, routeFrom, resolve, reject) => {
    import('./index.vue').then(res => {
        resolve({component: res.default}, {history: true})
    })
}
export default Form
