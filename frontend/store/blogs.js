const moduleName = 'blogs';

export const mutationTypes = Object.freeze({
    SET_BLOGS: `${moduleName}/setBlogs`,
    SET_CATEGORIES: `${moduleName}/setCategories`
});

export const state = () => ({
    loading: false,
    blogs: [],
    categories: []
});

export const mutations = {
    setBlogs(state, blogs) {
        state.blogs = blogs;
    },
    setCategories(state, categories) {
        state.categories = categories;
    }
};
