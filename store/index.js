export const state = () => ({
    loading: false
})
  
export const mutations = {
    SET_LOADING(state, loadingStatus){
        state.loading = loadingStatus;
    }
}