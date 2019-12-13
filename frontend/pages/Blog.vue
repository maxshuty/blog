<template>
  <div>hello world - {{ id }}</div>
</template>

<script>
export default {
    name: 'Blog',
    props: {
        id: {
            type: Number,
            required: true
        }
    }
};
</script>
