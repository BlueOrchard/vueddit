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
        axios
            .get('https://www.reddit.com/r/popular.json')
            .then((response) => {
                context.commit('addToList', response.data.data.children);
                context.commit('setLoadMoreVar', response.data.data.after);
            })
    },
    setMainPost(context, link){
        context.commit('setMainPostPermalink', link);
        axios
            .get('https://www.reddit.com' + link + '.json')
            .then((response) => {
                context.commit('setMainPostContent', response);
            });
    }
}