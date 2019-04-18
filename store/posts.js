import axios from 'axios';

export const state = () => ({
    postList: [],
    loadMoreVar: "",
    mainPostPermalink: "",
    mainPostContent: ""
})
  
export const mutations = {
    addToList(state, objects){
        objects.map((object) => {
            state.postList.push(object);
        })
    },
    setLoadMoreVar(state, loadVar){
        state.loadMoreVar = loadVar;
    },
    setMainPostPermalink(state, link){
        state.mainPostPermalink = link;
    },
    setMainPostContent(state, content){
        state.mainPostContent = content;
    }
}

export const actions = {
    initialFetch(context){
        // SET_LOADING mutation inside of index.js
        context.commit('SET_LOADING', true, { root: true})
        axios
            .get('https://www.reddit.com/r/popular.json')
            .then((response) => {
                context.commit('addToList', response.data.data.children);
                context.commit('setLoadMoreVar', response.data.data.after);
                context.commit('SET_LOADING', false, { root: true})
            })
        
    },
    setMainPost(context, link){
        // SET_LOADING mutation inside of index.js
        context.commit('SET_LOADING', true, { root: true})
        context.commit('setMainPostPermalink', link);
        context.commit('setMainPostContent', "");
        axios
            .get('https://www.reddit.com' + link + '.json')
            .then((response) => {
                context.commit('setMainPostContent', response);
                context.commit('SET_LOADING', false, { root: true})
            });
    }
}