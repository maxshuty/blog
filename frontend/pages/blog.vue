<template>
  <div>
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
