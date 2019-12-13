<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>
        <NuxtLink to="/" class="nav-title">
          Poshusta's
        </NuxtLink>
      </v-toolbar-title>
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

<style scoped>
.nav-title {
    text-decoration: none;
    color: #000000;
}
</style>
