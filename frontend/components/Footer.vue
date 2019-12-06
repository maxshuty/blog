<template>
  <v-footer
    :fixed="fixed"
    app>
    <span>&copy; Poshusta Family 2019</span>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterComp',
  data() {
    return {
      fixed: false
    };
  }
};
</script>
