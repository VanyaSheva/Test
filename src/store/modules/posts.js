const state = {
    posts: [],
    post: null,
};

const getters = {
    POSTS: state => {
        return state.posts;
    },
    POST: state => {
        return state.post;
    }
};

const mutations = {
    SET_POSTS: (state, items) => {
        state.posts = items;
    },
    SET_POST: (state, item) => {
        state.post = item;
    },
    DELETE_TAG_FROM_POST: (state, payload) => {
        const index = state.posts.findIndex(item => item.id === payload.id);
        state.posts[index].tags = state.posts[index].tags.split(', ').filter(tag => {
            return tag !== payload.tag
        }).join(', ');
    },
    ADD_TAG_TO_POST: (state, payload) => {
        const index = state.posts.findIndex(item => item.id === payload.id);
        const arrOfTags = state.posts[index].tags.split(', ');
        arrOfTags.push(payload.text)
        state.posts[index].tags = arrOfTags.join(', ')
    },
};

const actions = {
    GET_POSTS: (context) => {
        return axios.get('https://pixabay.com/api/?key=22986521-0943181e795d99e673de09bc1&q=cats&image_type=all&per_page=100').then(res => {
            context.commit('SET_POSTS', res.data.hits);
        });
    },
    GET_POST_BY_ID: (context, payload) => {
        return axios.get(`https://pixabay.com/api/?key=22986521-0943181e795d99e673de09bc1&id=${payload.id}`).then(res => {
            context.commit('SET_POST', res.data.hits[0]);
        });
    },
    DELETE_TAG: (context, payload) => {
        context.commit('DELETE_TAG_FROM_POST', payload);
    },
    ADD_TAG: (context, payload) => {
        context.commit('ADD_TAG_TO_POST', payload);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};