<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>Poshusta's</v-toolbar-title>
      <v-spacer />
      <account-select-comp />
    </v-toolbar>
  </div>
</template>

<script>
import AccountSelectComp from './AccountSelect';

export default {
  name: 'HeaderComp',
  components: {
    AccountSelectComp
  }
};
</script>
