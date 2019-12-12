<template>
  <form @submit.prevent>
    <span />
    <v-col cols="12" sm="6" md="3">
      <v-text-field
        v-model="query"
        :clearable="clearable"
        label="Search"
        type="search"
        @input="() => $emit('input', query)" />
    </v-col>
  </form>
</template>

<script>
export default {
    name: 'SearchComp',
    props: {
        clearable: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            query: ''
        };
    }
};
</script>
