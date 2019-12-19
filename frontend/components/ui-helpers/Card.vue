<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      :elevation="hover ? 6 : 2"
      :disabled="disabled"
      :height="height"
      :width="width"
      class="mx-auto">
      <v-card-text v-if="title" class="my-4 text-center title">
        <h3>{{ title }}</h3>
      </v-card-text>
      <v-card-text>
        <div
          v-if="body"
          :class="{'card-trimmed-body': trimBody}"
          v-html="$md.render(body)" />
        <slot />
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
    name: 'CardComp',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        trimBody: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        body: {
            type: String,
            default: ''
        },
        height: {
            type: Number,
            default: null
        },
        width: {
            type: Number,
            default: null
        }
    }
};
</script>

<style scoped>
.card-trimmed-body {
    max-height: 100px;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>
