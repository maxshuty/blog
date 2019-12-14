<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      :elevation="hover ? 6 : 2"
      :disabled="disabled"
      :height="height"
      :width="width"
      class="mx-auto">
      <v-card-text class="my-4 text-center title">
        <div>
          <h3>{{ title }}</h3>
          <div
            v-if="body"
            :class="{'card-skinny-body': skinnyBody}"
            v-html="$md.render(body)" />
          <slot />
        </div>
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
        title: {
            type: String,
            required: true
        },
        skinnyBody: {
            type: Boolean,
            default: false
        },
        body: {
            type: String,
            default: '',
            required: false
        },
        height: {
            type: Number,
            default: 350
        },
        width: {
            type: Number,
            default: 350
        }
    }
};
</script>

<style scoped>
.card-skinny-body {
    max-height: 100px;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>
