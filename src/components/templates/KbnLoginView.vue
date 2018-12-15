<template>
    <v-container>
        <v-layout
        text-xs-center
        wrap
        >
            <v-flex xs12>
                login
            </v-flex>
            <v-flex xs12>
                <KbnLoginForm :onlogin="handleLogin"></KbnLoginForm>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import KbnLoginForm from '@/components/molecules/KbnLoginForm'

export default {
    name: 'KbnLoginView',

    components: {
        KbnLoginForm,
    },

    methods: {
        handleLogin (authInfo) {
            console.log(authInfo)
            return this.$store.dispatch('login', authInfo)
                .then(() => {
                    this.$router.push({ path: '/'})
                })
                .catch(err => this.throwReject(err))
            // return Promise.resolve()
        },

        throwReject (err) {
            console.log(err)
            return Promise.reject(err)
        },
    },
}
</script>
