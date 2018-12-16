<template>
        <v-layout
        text-xs-center
        wrap
        >
            <v-flex xs12>
                <v-form>
                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    solo
                    ></v-text-field>
                    <v-text-field
                        v-model="password"
                        :append-icon="show ? 'visibility_off' : 'visibility'"
                        :rules="passwordRules"
                        :type="show ? 'text' : 'password'"
                        label="Password"
                        hint="At least 20 characters"
                        class="input-group--focused"
                        @click:append="show = !show"
                        solo
                    ></v-text-field>
                </v-form>            
            </v-flex>
            <v-flex xs12>
                <Kbn-button 
                    :disabled="false"
                    @click="handleClick"
                >
                    ログイン
                </Kbn-button>
            </v-flex>
        </v-layout>
</template>

<script>
import KbnButton from '@/components/atoms/KbnButton'

const required = val => !!val.trim()

export default {
    name: 'KbnLoginForm',

    components: {
        KbnButton,
    },

    props: {
        onlogin: {
            type: Function,
            required: true
        }
    },
    
    data: () => ({
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length <= 20 || 'Password must be less than 20 characters'
      ],
      show: false,
      progress: false,
      error: '',
    }),

    computed: {
        validation () {
            // todo
            return true
        },

        valid () {
            // todo
            return true
        },

        disableLoginAction () {
            return !this.valid || this.progress
        },
    },

    methods: {
        handleClick (ev) {
            console.log("1")
            if (this.disableLoginAction) { return }
            console.log("2")

            this.progress = true // login process
            this.error = ''

            this.$nextTick(() => {
                this.onlogin({ email: this.email, password: this.password })
                    .catch(err => {
                        this.error = err.message
                    })
                    .then(() => {
                        this.progress = false
                    })

            })
        },
    }
}
</script>
