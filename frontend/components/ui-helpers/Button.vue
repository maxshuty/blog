<template>
  <v-btn
    :disabled="disabled"
    :outlined="outlined"
    :text="textOnly"
    :color="getButtonColor"
    @click="handleClick">
    <span v-if="content">{{ content }}</span>
    <v-icon
      v-if="icon"
      :color="iconColor"
      class="button-icon">
      {{ icon }}
    </v-icon>
  </v-btn>
</template>

<script>
export default {
    name: 'ButtonComp',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: ''
        },
        iconColor: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        primary: {
            type: Boolean,
            default: false
        },
        secondary: {
            type: Boolean,
            default: false
        },
        error: {
            type: Boolean,
            default: false
        },
        outlined: {
            type: Boolean,
            default: false
        },
        textOnly: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        getButtonColor() {
            return this.textOnly ? ''
                : this.error ? 'error'
                    : this.primary ? 'primary'
                        : this.secondary ? 'secondary'
                            : '';
        }
    },
    methods: {
        handleClick() {
            return this.disabled ? this.$emit('disabledClick') : this.$emit('click');
        }
    }
};
</script>

<style scoped>
.button-icon {
    margin-left: 5px;
}
</style>
