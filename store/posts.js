import axios from 'axios';

export const state = () => ({
    postList: [],
    loadMoreVar: ""
})
  
export const mutations = {
    addToList(state, objects){
        // for(var index in objects){
        //     state.postList.push(objects[index]);
        // }
        objects.map((object) => {
            state.postList.push(object);
        })
    },
    setLoadMoreVar(state, loadVar){
        state.loadMoreVar = loadVar;
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
    }
}