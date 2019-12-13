<template>
  <div>
    <!-- TODO: Max P - Breadcrumbs -->
    <h1>{{ blog.title }}</h1>
  </div>
</template>

<script>
import blogQuery from '../apollo/queries/blog/blog.gql';

export default {
    name: 'Blog',
    data() {
        return {
            blog: Object
        };
    },
    // TODO: Max P - it would be awesome to move these queries to actions in the store...
    // see (about half way down): https://lmiller1990.github.io/electic/posts/integrating_apollo_with_vue_and_vuex.html?source=post_page---------------------------
    apollo: {
        blog: {
            prefetch: true,
            query: blogQuery,
            variables() {
                return { id: this.$route.params.id };
            }
        }
    }
};
</script>
