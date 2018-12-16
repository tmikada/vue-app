<template>
    <v-btn
        :class="classes"
        :disabled="disabled"
        @click="handleClick">
        <slot />
    </v-btn>
</template>

<script>
export default {
    name: 'KbnButton',
    
    props: {
        type: {
            type: String,
            default: 'button',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        classes () {
            const cls = this.type === 'text' ? ('-' + this.type) : ''
            return [`kbn-button${cls}`]
        }
    },

    methods: {
        handleClick (ev) {
            this.$emit('click', ev)
        },
    }
}
</script>
