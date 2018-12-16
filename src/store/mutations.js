import * as types from './mutation-types'

export default {
    [types.AUTH_LOGIN] (state, payload) {
        state.auth = payload
        // todo
        // throw new Error('AUTH_LOGIN mutation should be implemented')
    },
}