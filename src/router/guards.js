import store from '../store'

export const authorizeToken = (to, from, next) => {
    // todo
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if(!store.state.auth || !store.state.auth.token) {
            next({ path: '/login' })
        } else {
            next()
        }
    } else {
        next()
    }
}
